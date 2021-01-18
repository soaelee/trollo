import React from 'react';
import style from './cardDetail.module.scss';
const CardDetail = (props)=>{
  return (
    <section>
      <header className="cardDetailHeader">
        <div className="cover">
          <div></div>
          <button>
            <span className=""></span>
            Cover
          </button>
        </div>
        <span></span>
        <h2 className="cardDetailTitle">
          <span>{props.title}</span>
          <span>in list {props.listTitle}</span>
        </h2>
      </header>
      <div className="modal-left">
        <div className="cardOption">
          <h3></h3>
          {props.members && <div className="members"></div>}
          {props.labels && <div className="labels"></div>}
          {props.dueDate && <div className="dueDate"></div>}
        </div>
        <div className="description">

        </div>
        <div className=""></div>
      </div>
      <div className="modal-right"></div>
    </section>
  )
}
export default CardDetail