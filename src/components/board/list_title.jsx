import React from 'react';
import { EllipsisOutlined, HeartOutlined} from '@ant-design/icons';
import styled from 'styled-components';
import { Popover } from 'antd';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  position: relative;
`
const PopOverPos = styled(Popover)`
    position: absolute;
    right: 0;
    border: 0;
    background: transparent;
`  
const ListTitle = ({title}) => {
  return (
    <Container>
      <h3>{title}</h3>
      <PopOverPos>
      <HeartOutlined style={{marginRight: 5}}/>
      <Popover 
        content="Delete list"
        placement="right"
      >
        <EllipsisOutlined style={{transform: "rotate(90deg)"}}/>
      </Popover>
      </PopOverPos>
    </Container>
  )
}

export default ListTitle
