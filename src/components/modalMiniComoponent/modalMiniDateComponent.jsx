import Checkbox from "antd/lib/checkbox/Checkbox";
import React from "react";
import styles from "./modalMiniDateComponent.module.scss"

export default function DateComponent({date}){
  // const []
  return(
    <div className={styles.date}>
      <h3>DUE DATE</h3>
      <Checkbox onChange={()=>{}}/>
    </div>
  )
}