import Checkbox from "antd/lib/checkbox/Checkbox";
import React, { useState } from "react";
import styles from "./modalMiniDateComponent.module.scss"
import "./antd.css"
export default function DateComponent({date,editInfo}){
  const {checked,value} = date
  return(
    <div className={styles.date}>
      <h3>DUE DATE</h3>
      <div className={styles.dateBox}>
        <Checkbox 
          className={styles.Checkbox}
          checked={checked}
          onChange={()=>{
            editInfo("complete",!checked);
          }}
        />
        <div className={styles.testBox}>
          <span>{value}</span>
          {
            checked?<span className={styles.complete}>complete</span>
            :<span className={styles.overdue}>overdue</span>
          }
        </div>
      </div>
    </div>
  )
}