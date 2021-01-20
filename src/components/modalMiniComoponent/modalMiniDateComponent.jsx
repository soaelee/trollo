import Checkbox from "antd/lib/checkbox/Checkbox";
import React, { useState } from "react";
import styles from "./modalMiniDateComponent.module.scss"
import "./antd.css"
export default function DateComponent({date}){
  const [isComplete,setComplete] = useState(false);
  return(
    <div className={styles.date}>
      <h3>DUE DATE</h3>
      <div className={styles.dateBox}>
        <Checkbox className={styles.Checkbox} onChange={()=>{setComplete(state=>!state)}}/>
        <div className={styles.testBox}>
          <span>{date}</span>
          {
            isComplete?<span className={styles.complete}>complete</span>
            :<span className={styles.overdue}>overdue</span>
          }
        </div>
      </div>
    </div>
  )
}