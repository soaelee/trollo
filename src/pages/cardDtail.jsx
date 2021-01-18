import React from "react";
import CardModalComponent from "../components/modal/CardModalComponent";
import ReactDOM from 'react-dom';

export default function CardDetailPage({resetClick,ClckedNum}){
  return ReactDOM.createPortal(<CardModalComponent resetClick={resetClick} ClckedNum={ClckedNum}/>,document.getElementById("cardModal"))
}