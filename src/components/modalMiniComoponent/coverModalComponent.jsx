import React from "react";
import colors from "../../data/colors"

import styles from './coverModal.module.scss'
export default function CoverModal({type,openCoverModal,editCover}){

  return (
    <div className={type ? styles.topCoverModalWrapper : styles.coverModalWrapper}>
      <h3>cover</h3>
      <button className={styles.coverModalCloseBtn}
            onClick={openCoverModal}
      >
        <span></span>
        <span></span>
      </button>
      <div className={styles.coverModalBox}>
        {colors.map(color=>(
          <button style={{
            backgroundColor:color
          }}
          onClick={()=>{
            editCover(color)
            openCoverModal();
          }}
          ></button>
        ))}
      </div>
    </div>
  )
}