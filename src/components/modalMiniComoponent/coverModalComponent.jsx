import React from "react";
import colors from "../../data/colors"

import styles from './coverModal.module.scss'
export default function CoverModal(){

  return (
    <div className={styles.coverModalBox}>
      {colors.map(color=>(
        <button style={{
          backgroundColor:color
        }}></button>
      ))}
    </div>
  )
}