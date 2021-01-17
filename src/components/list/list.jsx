import React from 'react';
import { Card, Button } from 'antd';
import styled from 'styled-components';
import ListTitle from './list_title';
import CardContent from './card_content';

const { Meta } = Card;

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
const List = ({title}) => {
  return (
    <ListContainer title={<ListTitle title={title}/>}
      style={{position: 'relative'}}
      headStyle={{borderBottom: "0"}}
      bodyStyle={{padding: "10px"}}
    > 
      <Card 
        cover={<div style={{width: '100%', height: '40px', backgroundColor: 'tomato', borderRadius: 4}}></div>}
        bodyStyle={{padding: "1.6px 8px"}}
      >
        <CardContent />
      </Card>
      <AddCard>+ Add another card</AddCard>
    </ListContainer>
  )
}

export default List
