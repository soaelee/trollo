import React from "react";
import CardModalComponent from "../components/modal/CardModalComponent";
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';

export default function CardDetailPage({resetClick,ClckedNum}){
  const dispatch = useDispatch();
  const cardData = useSelector(state=>state.board.board.lists);

  // const setDescription = 

  let clickedCardData;
  cardData.forEach(data=>{
    const clickedCard = data.cards.filter(card=>card.id===(+ClckedNum));
    if(clickedCard.length!==0) {
      clickedCardData = clickedCard[0]
      return
    };
  })
  return ReactDOM.createPortal(<CardModalComponent clickedCardData={clickedCardData} resetClick={resetClick}/>,document.getElementById("cardModal"))
}