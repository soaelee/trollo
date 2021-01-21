import React from "react";
import styles from "./addModal.module.scss";
export default function AddModal ({setOpenState,type,editInfo,datas}){
  console.log(datas)
  return (
    <div className={styles.addModalBox}>
      <h3>
        {type}
      </h3>
      <div className={styles.dataBox}>
        {datas&&datas.map(data=>(
          <button 
            className={styles.data} 
            key={data}
            onClick={
              ()=>{
                if(type==="labels")return
                editInfo(type,data);
                setOpenState&&setOpenState()
              }
            }
          >
              {data[0]}
          </button>
        ))}
      </div>
    </div>
  )
}