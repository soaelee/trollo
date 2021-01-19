import React, { useState } from 'react';
import styles from './CardModalComponent.module.scss'
import { AlignLeftOutlined, CreditCardOutlined } from '@ant-design/icons';
import "./CardModalComponent.css"
import { Input } from 'antd';
import ModalMiniComponent from '../modalMiniComoponent/modalMiniComponent';
const { TextArea } = Input;
export default function CardModalComponent({resetClick,clickedCardData}){
  const [activeItem,setActiveItem] = useState("none")
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
            <span>{clickedCardData.title}</span>
            <div className={styles.titleList}> in list <u>{"기획"}</u></div>
          </h2>
        </header>
        <main>
          <div className={styles.dataBox}>
            <div className={styles.cardInfo}>
              {clickedCardData.members && <ModalMiniComponent type="members" members={clickedCardData.members} datas={["B"]}/>}
              {clickedCardData.label && <ModalMiniComponent type="labels" labels={clickedCardData.label} datas={["yellow","red"]}/>}
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
                  border:0,
                  backgroundColor:activeItem==="desc"?"white":"rgba(9,30,66,.04)"
                }}
                value={clickedCardData.description?clickedCardData.description:""}
                rows={4} 
                onFocus={()=>{
                  setActiveItem(state=>"desc")
                }}
                placeholder="Add a more detailed description"
              />
              <div className={activeItem === "desc" ?  styles.descritionController : styles.hide}>
                <button className={styles.saveBtn}>Save</button>
                <button onClick={()=>{setActiveItem(state=>"none")}} className={styles.closeXBtn}>
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