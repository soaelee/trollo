import React, { useState, useCallback } from 'react';
import { EllipsisOutlined, HeartOutlined, HeartTwoTone} from '@ant-design/icons';
import styled from 'styled-components';
import { Popover } from 'antd';
import Title from '../common/title';
import { useDispatch, useSelector } from 'react-redux';
import { removeListRequestAction } from '../../reducers/board';
import { likeListRequestAction, unlikeListRequestAction } from '../../reducers/user';
import PropTypes from 'prop-types';

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

// Prop Types
ListTitle.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  likes: PropTypes.arrayof(PropTypes.number),
}

const ListTitle = ({title, id, likes}) => {
const dispatch = useDispatch();
const onClickLikeBtn = () => {
  if(likes.includes(id)){
    dispatch(unlikeListRequestAction(id))
  } else {
    dispatch(likeListRequestAction(id))
  }
};
const onClickRemoveList = () => {
  dispatch(removeListRequestAction(id));
};
return (
  <Container>
    <Title title={title} type='list' id={id}/>
    <PopOverPos>
    { likes && likes.includes(id) ?
    <HeartTwoTone style={{marginRight: 5}} onClick={onClickLikeBtn}/>
    : <HeartOutlined style={{marginRight: 5}} onClick={onClickLikeBtn}/>
    }
    <Popover
      content={(
        <div onClick={onClickRemoveList}>
          Delete List
        </div>
      )}
      placement='right'
      overlayInnerStyle={{cursor: 'pointer'}}
    >
      <EllipsisOutlined style={{transform: 'rotate(90deg)'}}/>
    </Popover>
    </PopOverPos>
  </Container>
)
}

export default ListTitle