import React from 'react';
import styles from './CardModalComponent.module.scss'

export default function CardModalComponent({resetClick,ClckedNum}){
  console.log(ClckedNum)
  return(
    // <cardDetail/>
    <section className={styles.modalSection}>
      <h1>
        {ClckedNum}
        <button onClick={resetClick}>close modal</button>
      </h1>
    </section>
  )
}