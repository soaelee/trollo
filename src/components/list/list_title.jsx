import React, { useState, useCallback } from 'react';
import { EllipsisOutlined, HeartOutlined, HeartTwoTone} from '@ant-design/icons';
import styled from 'styled-components';
import { Popover, Input } from 'antd';
import useInput from '../../hooks/useInput';
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  position: relative;
`
const PopOverPos = styled.div`
    position: absolute;
    right: 0;
    border: 0;
    background: transparent;
`;

const ListTitle = ({title}) => {

  const [ like, setLike ] = useState(false);
  const titleInput = useInput(title);
  const onClickLikeBtn = useCallback(() => {
    setLike(!like);
  }, [like]);
  return (
    <Container>
      <Input value={titleInput.value} onChange={titleInput.onChange}/>
      <PopOverPos>
      
      { like ?
      <HeartTwoTone style={{marginRight: 5}} onClick={onClickLikeBtn}/> 
      : <HeartOutlined style={{marginRight: 5}} onClick={onClickLikeBtn}/>
      }
      <Popover 
        content="Delete list"
        placement="right"
        overlayInnerStyle={{cursor: "pointer"}}
      >
        <EllipsisOutlined style={{transform: "rotate(90deg)"}}/>
      </Popover>
      </PopOverPos>
    </Container>
  )
}

export default ListTitle
