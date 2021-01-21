import React from "react";
import CardModalComponent from "../components/modal/CardModalComponent";
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCardInfoAction, editCardInfoAction, editCoverAction } from "../reducers/board";

export default function CardDetailPage({resetClick,ClckedNum}){
  const cardData = useSelector(state=>state.board.board.lists);
  const allMembers = useSelector(state=>state.board.board.members);
  let clickedCardData;
  cardData.forEach(data=>{
    const clickedCard = data.cards.filter(card=>card.id===(+ClckedNum));
    if(clickedCard.length!==0) {
      clickedCardData = clickedCard[0]
      return
    };
  });

  const dispatch = useDispatch();
  const editInfo = (editTarget,data)=>{
    dispatch(editCardInfoAction({ClckedNum,editTarget,data}))
  }
  const deleteInfo = (editTarget,data)=>{
    dispatch(deleteCardInfoAction({ClckedNum,editTarget,data}))
  }

  const editCover = (data)=>{
    dispatch(editCoverAction({ClckedNum,data}))
  }
  return ReactDOM.createPortal(<CardModalComponent allMembers={allMembers} deleteInfo={deleteInfo} editCover={editCover} editInfo={editInfo} clickedCardData={clickedCardData} resetClick={resetClick}/>,document.getElementById("cardModal"))
}