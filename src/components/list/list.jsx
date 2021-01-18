import React, { useCallback, useState } from 'react';
import { Card, Button } from 'antd';
import styled from 'styled-components';
import ListTitle from './list_title';
import CardContent from './card_content';
import { Draggable } from 'react-beautiful-dnd';
import CardDetailPage from '../../pages/cardDtail';

const ListContainer = styled(Card)`
  width: 300px;
  border-radius: .2em;
  background-color: #e9e9e9;
  display: inline-block;
  margin: .5em;
  position: relative;
`

const AddCard = styled(Button)`
  background: transparent;
  border: 0;
  position: relative;
  bottom: -10px;
  left: -10px;
  &:hover {
    background-color: transparent;
  }
`

const CardContainer = styled(Card)`
  margin-bottom: .5em;
  border-radius: 8px;
`

const CardCover = styled.div`
  width: 100%;
  height: 40px;
  background-color: ${props => props.color};
  border-radius: 8px;
`;

const List = ({list}) => {
  const [isClcked,setIsClick] = useState(false);
  const [ClckedNum,setClickNum] = useState(null);
  const resetClick = ()=>{
    setIsClick(()=>false)
    setClickNum(()=>null)
  }
  const clickCard = (e)=>{
    console.log(e.currentTarget.id)
    const id = e.currentTarget.id
    setIsClick(()=>true)
    setClickNum(()=>id)
  }
  return (
    <>
      <Draggable draggableId={list.title} index={parseInt(list.id)}> 
        {provided => (
          <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
            <ListContainer title={<ListTitle title={list.title}/>}
              style={{position: 'relative'}}
              headStyle={{borderBottom: "0"}}
              bodyStyle={{padding: "10px"}}
            > 
            {list.cards?.map( v => {
              if(v.cover) {
                const cover = v.cover;
                return (
                    <CardContainer 
                      key={v.id}
                      id={v.id} 
                      onClick={clickCard}
                      index={v.id} 
                      bodyStyle={{padding: "1.6px 8px", paddingBottom: '20px'}}
                      cover={<CardCover color={cover}/>}
                    >
                      <CardContent card={v}/>
                    </CardContainer> 
              )
            } else {
              return (
                <CardContainer 
                  key={v.id}
                  id={v.id} 
                  onClick={clickCard}
                  index={v.id} 
                  key={v.id}
                  bodyStyle={{padding: "1.6px 8px"}}
                >
                  <CardContent card={v}/>
                </CardContainer> 
                )
              }})}
              {list.cards ? (
                <AddCard>+ Add another card</AddCard>
              ) : <AddCard> + Add card</AddCard>}
            </ListContainer>
            </div>
        )
        }
      </Draggable>
      {isClcked && <CardDetailPage resetClick={resetClick} ClckedNum ={ClckedNum}/>}
    </>
  )
}

export default List
