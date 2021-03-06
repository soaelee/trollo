import React, { useState } from 'react';
import styles from './CardModalComponent.module.scss'
import { AlignLeftOutlined, CreditCardOutlined } from '@ant-design/icons';
import "./CardModalComponent.css"
import { Input } from 'antd';
import ModalMiniComponent from '../modalMiniComoponent/modalMiniComponent';
import DateComponent from '../modalMiniComoponent/modalMiniDateComponent';
import CoverModal from '../modalMiniComoponent/coverModalComponent';
import AddModal from '../addModal/addModal';
const { TextArea } = Input;
export default function CardModalComponent({deleteInfo,allMembers,resetClick,clickedCardData,editInfo,editCover}){
  const [activeItem,setActiveItem] = useState("none")

  const [titleData,setTitleData] = useState(clickedCardData.title);
  const [descData,setDescData] = useState(clickedCardData.description?clickedCardData.description:"");
  const [openCoverSelector,setOpenCoverSelector] = useState(false);
  const [openMemberModal,setopenMemberModal] = useState(false);
  const [coverSelector,setCoverSelector] = useState(false);

  const openCoverModal = ()=>{
    setOpenCoverSelector(state=>!state);
  }
  const openCoverComponent = ()=>{
    setCoverSelector(state=>!state);
  }
  const openMemberComponent= ()=>{
    setopenMemberModal(state=> !state)
  }
  return(
    <div className={styles.modalBox}>
      <section className={styles.modalSection}>
        <header>
          <button onClick={resetClick} className={styles.closeBtn}>
            <div></div>
            <div></div>
          </button>
          {clickedCardData.cover && 
          <div className={styles.cover} 
            style={{backgroundColor:clickedCardData.cover?clickedCardData.cover:"inherit"}}
          >
            <button className={styles.setCoverBtn} onClick={openCoverComponent}>cover</button>
            {coverSelector && <CoverModal type="Top" openCoverModal={openCoverComponent} editCover={editCover} />}
          </div>}
          <h2>
            <div className={styles.titleIcon}>
              <CreditCardOutlined/>
            </div>
            <TextArea 
              value={clickedCardData.title?titleData:""} 
              placeholder="제목을 입력해주세요"
              style={{
                resize:'none',
                boxShadow:activeItem==="title"?"1px blue":"0",
                backgroundColor:activeItem==="title"?"white":"transparent",
                color:clickedCardData.title?"black":"gray",
                border:0,
                fontSize:"1.5rem",
                height:"3rem"
              }}
              onFocus={()=>{
                setActiveItem(state=>"title");
              }}
              onBlur={
                ()=>{
                  setActiveItem(state=>state==="title"?"none":"title");
                }
              }
              onChange={(e)=>{
                setTitleData(()=>e.target.value);
                editInfo("title",e.target.value)
              }}
            />
            <div className={styles.titleList}> in list <u>{"기획"}</u></div>
          </h2>
        </header>
        <main>
          <div className={styles.dataBox}>
            <div className={styles.cardInfo}>
              {clickedCardData.members && <ModalMiniComponent deleteInfo={deleteInfo} editInfo={editInfo} allMembers={allMembers} type="members" members={clickedCardData.members}/>}
              {clickedCardData.label && <ModalMiniComponent deleteInfo={deleteInfo}type="labels" labels={clickedCardData.label}/>}
              {clickedCardData.date && <DateComponent editInfo={editInfo} date={clickedCardData.date}/>}
            </div>
            <div className={styles.descrition}>
              <h3>
                <div className={styles.descritionIcon}>
                  <AlignLeftOutlined />
                </div>
                Description
              </h3>
              <TextArea 
                className="desc"
                style={{
                  resize:'none',
                  boxShadow:activeItem==="title"?"1px blue":"0",
                  backgroundColor:activeItem==="desc"?"white":"rgba(9,30,66,.04)"
                }}
                value={clickedCardData.description?descData:""}
                rows={4} 
                onFocus={()=>{
                  setActiveItem(state=>"desc");
                }}
                onBlur={
                  ()=>{
                    setActiveItem(state=>state==="desc"?"none":"desc");
                  }
                }
                onChange={e=>{
                    setDescData(()=>e.target.value);
                    console.log(descData)
                    editInfo("description",e.target.value)
                  }
                }
                placeholder="Add a more detailed description"
              />
              <div className={activeItem === "desc" ?  styles.descritionController : styles.hide}>
                <button className={styles.saveBtn}>Save</button>
                <button onClick={()=>{
                  setActiveItem(state=>"none")
                }} className={styles.closeXBtn}>
                  <span></span>
                  <span></span>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.selectorBox}>
            <section>
              <h3>SUGGESTED</h3>
              <div className={styles.optionBox}>
                <button className={styles.optionBtn}><span></span>join</button>
              </div>
            </section>
            <section>
              <h3>ADD TO CARD</h3>
              <div className={styles.optionBox}>
                <button className={styles.optionBtn} onClick={openMemberComponent}>
                  <span></span>Members
                </button>
                <button className={styles.optionBtn}>
                  <span></span>Labels
                </button>
                {!clickedCardData.cover && <button className={styles.optionBtn} onClick={openCoverModal}><span></span>cover</button>}
                {<button className={styles.optionBtn}>
                  <span></span>Due Date
                  </button>}
                {openCoverSelector && <CoverModal openCoverModal={openCoverModal} editCover={editCover} />}
                {openMemberModal && 
                  <AddModal 
                    editInfo={editInfo} 
                    type="members" 
                    setOpenState={setopenMemberModal}
                    datas={clickedCardData.members?allMembers.filter(member=>!clickedCardData.members.includes(member)):allMembers}
                  />
                }
              </div>
            </section>
            <section></section>
          </div>
        </main>
      </section>
    </div>
  )
}