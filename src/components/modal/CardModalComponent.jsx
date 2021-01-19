import React from 'react';
import styles from './CardModalComponent.module.scss'
import { CreditCardOutlined } from '@ant-design/icons';
import "./CardModalComponent.css"
import ModalMiniComponent from '../modalMiniComoponent/modalMiniComponent';
export default function CardModalComponent({resetClick,clickedCardData}){

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
              <ModalMiniComponent type="members" members={clickedCardData.members} datas={["B"]}/>
              <ModalMiniComponent type="labels" labels={clickedCardData.label} datas={["yellow","red"]}/>
            </div>
          </div>
          <div className={styles.selectorBox}></div>
        </main>
      </section>
    </div>
  )
}