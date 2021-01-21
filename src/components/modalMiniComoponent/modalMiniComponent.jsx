import React, { useState } from 'react';
import AddModal from '../addModal/addModal';
import styles from './modalMiniComponent.module.scss';
export default function ModalMiniComponent({deleteInfo,editInfo,allMembers,type,members,labels}){
  const [openModal,setOpenState] = useState(false);
  const [openModalType,setOpenTypeState] = useState("");
  const toggleModal = (type)=>{
    setOpenState(state => !state);
    setOpenTypeState(state=>type);
    console.log(type,openModalType)
  }
  const deleteInfoClick=(type,data)=>{
    console.log("1")
    deleteInfo(type,data)
  }
  return (
    <div className={styles[type]}>
      <h3>{type}</h3>
      <div className={styles.innerBox}>
        {labels?
          labels.map(color=>(
            <button className={styles.dataBox} key={color} style={{backgroundColor:color}}>
              {color}
            </button>)):
          members.map(member=>(
            <button className={styles.dataBox} key={member} onClick={()=>{deleteInfoClick("members",member)}}>
              {member[0]}
            </button>
          ))
        }
        {
          allMembers && (allMembers.length > members.length) ? 
          <button className={styles.addCrossBtn} onClick={()=>toggleModal("members")}>
            <div></div>
            <div></div>
          </button> :
          labels ? 
          <button className={styles.addCrossBtn} onClick={()=>toggleModal("labels")}>
            <div></div>
            <div></div>
          </button> :
          <></>
        }
        {openModal && 
        <AddModal 
          type={openModalType} 
          setOpenState={setOpenState}
          editInfo={editInfo} 
          datas={type==="members"?allMembers.filter(member=>!members.includes(member)):labels}
        />}
      </div>
    </div>
  )
}