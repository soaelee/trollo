import React, { useState, useCallback } from 'react';
import { EllipsisOutlined, HeartOutlined, HeartTwoTone} from '@ant-design/icons';
import styled from 'styled-components';
import { Popover } from 'antd';
import Title from '../common/title';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import 'moment/locale/ko';

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

const ListTitle = ({title, id}) => {

  const [ like, setLike ] = useState(false);
  const onClickLikeBtn = useCallback(() => {
    setLike(!like);
  }, [like]);

  const onClickRemoveList = useCallback(() => {
    console.log('delete');
    
  }, []);
  return (
    <Container>
      <Title title={title} type="list" id={id}/>
      <PopOverPos>
      
      { like ?
      <HeartTwoTone style={{marginRight: 5}} onClick={onClickLikeBtn}/> 
      : <HeartOutlined style={{marginRight: 5}} onClick={onClickLikeBtn}/>
      }
      <Popover 
        content={(
          <div onClick={onClickRemoveList}>
            Delete List
          </div>
        )}
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
