import React from "react";
import CardModalComponent from "../components/modal/CardModalComponent";
import ReactDOM from 'react-dom';
import { useSelector } from 'react-redux';

export default function CardDetailPage({resetClick,ClckedNum}){

  const cardData = useSelector(state=>state.board.board.lists);
  let clickedCardData;
  cardData.forEach(data=>{
    const clickedCard = data.cards.filter(card=>card.id===(+ClckedNum));
    if(clickedCard.length!==0) {
      clickedCardData = clickedCard[0]
      return
    };
  })
  console.log(clickedCardData)
  return ReactDOM.createPortal(<CardModalComponent clickedCardData={clickedCardData} resetClick={resetClick} ClckedNum={ClckedNum}/>,document.getElementById("cardModal"))
}