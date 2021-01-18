import React from 'react';
import { Card, Button } from 'antd';
import styled from 'styled-components';
import ListTitle from './list_title';
import CardContent from './card_content';
import { Draggable } from 'react-beautiful-dnd';

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
const List = ({title, idx}) => {
  return (
    <Draggable draggableId={title} index={parseInt(idx)}> 
      {provided => (
        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
          <ListContainer title={<ListTitle title={title}/>}
            style={{position: 'relative'}}
            headStyle={{borderBottom: "0"}}
            bodyStyle={{padding: "10px"}}
          > 
          {/* Cards map zone */}
            <Card 
              id={'test'}
              index={0}
              key={'test'}
              cover={<div style={{width: '100%', height: '40px', backgroundColor: 'tomato', borderRadius: 4}}></div>}
              bodyStyle={{padding: "1.6px 8px"}}
            >
              <CardContent />
            </Card>
            {/* card가 존재하면 another card 아니면 card */}
            <AddCard>+ Add another card</AddCard>
          </ListContainer>
          </div>
      )
      }
      </Draggable>
  )
}

export default List
