import React from 'react';
import styles from './modalMiniComponent.module.scss';
export default function ModalMiniComponent({type,members,labels,datas}){
  return (
    <div className={styles[type]}>
      <h3>{type}</h3>
      <div className={styles.innerBox}>
        {labels?
          labels.map(color=>(
            <div key={color} style={{backgroundColor:color}}>
              {color}
            </div>)):
          members.map(member=>(
            <div>
              {member[0]}
            </div>
          ))
        }
        <button className={styles.addCrossBtn}>
          <div></div>
          <div></div>
        </button>
      </div>
    </div>
  )
}