import React from 'react';
import { Card, Avatar, Popover, Button } from 'antd';
import styled from 'styled-components';
import ListTitle from './list_title';
import { EllipsisOutlined } from '@ant-design/icons';
const { Meta } = Card;

const ListContainer = styled(Card)`
  width: 300px;
  border-radius: 1em;
`
const List = ({title}) => {
  return (
    <ListContainer title={<ListTitle title={title}/>}
      style={{position: 'relative'}}
    > 
      <Card 
        cover={<div style={{width: '100%', height: '40px', backgroundColor: 'tomato', borderRadius: 4}}></div>}
      >
        <Meta 
          style={{display: 'flex', flexDirection: 'column-reverse'}}
          title="Test Card"
          avatar={<Avatar>S</Avatar> }
        />
      </Card>
    </ListContainer>
  )
}

export default List
