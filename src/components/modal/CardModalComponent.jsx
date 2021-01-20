import React, { useRef, useState } from 'react';
import styles from './CardModalComponent.module.scss'
import { AlignLeftOutlined, CreditCardOutlined } from '@ant-design/icons';
import "./CardModalComponent.css"
import { Input } from 'antd';
import ModalMiniComponent from '../modalMiniComoponent/modalMiniComponent';
const { TextArea } = Input;
export default function CardModalComponent({resetClick,clickedCardData,editInfo}){
  const [activeItem,setActiveItem] = useState("none")
  const [isEditing,setIsEditing] = useState(false);
  const [titleData,setTitleData] = useState(clickedCardData.title);
  const [descData,setDescData] = useState(clickedCardData.description);
  const titleInput = useRef(null);
  return(
    <div className={styles.modalBox}>
      <section className={styles.modalSection}>
        <header>
          <div className={styles.cover} 
            style={{backgroundColor:clickedCardData.cover?clickedCardData.cover:"inherit"}}
          >
            <button onClick={resetClick} className={styles.closeBtn}>
              <div></div>
              <div></div>
            </button>
          </div>
          <h2>
            <div className={styles.titleIcon}>
              <CreditCardOutlined/>
            </div>
            <TextArea 
              ref={titleInput}
              value={clickedCardData.title?titleData:"제목을 입력해주세요"} 
              style={{
                resize:'none',
                boxShadow:activeItem==="title"?"1px blue":"0",
                backgroundColor:activeItem==="title"?"white":"transparent",
                color:clickedCardData.title?"black":"gray"
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
              {clickedCardData.members && <ModalMiniComponent type="members" members={clickedCardData.members} datas={["B"]}/>}
              {clickedCardData.label && <ModalMiniComponent type="labels" labels={clickedCardData.label} datas={["yellow","red"]}/>}
              {clickedCardData.date && <ModalMiniComponent type="labels" labels={clickedCardData.label} datas={["yellow","red"]}/>}
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
                  border:0,
                  backgroundColor:activeItem==="desc"?"white":"rgba(9,30,66,.04)"
                }}
                value={clickedCardData.description?descData:""}
                rows={4} 
                onFocus={()=>{
                  setActiveItem(state=>"desc");
                  setIsEditing(state=>!state);
                }}
                onBlur={
                  ()=>{
                    setActiveItem(state=>state==="desc"?"none":"desc");
                  }
                }
                onChange={
                  e=>{
                    setDescData(()=>e.target.value);
                    editInfo("descrition",e.target.value)
                  }
                }
                placeholder="Add a more detailed description"
              />
              <div className={activeItem === "desc" ?  styles.descritionController : styles.hide}>
                <button className={styles.saveBtn}>Save</button>
                <button onClick={()=>{
                  console.log("1")
                  setActiveItem(state=>"none")
                }} className={styles.closeXBtn}>
                  <span></span>
                  <span></span>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.selectorBox}></div>
        </main>
      </section>
    </div>
  )
}