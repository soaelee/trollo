import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { Input } from 'antd';
import { useDispatch } from 'react-redux';
import { editListTitleAction } from '../../reducers/board';
const TitleInput = styled(Input)`
  display: inline-block;
  background: transparent;
  border: 0;
  outline: 0;
  border-radius: 4px;
  &:focus {
    background-color: white;
    border: 1px solid skyblue;
    color: black;
  }
  font-size: ${ props => props.big ? '1.1rem' : '1rem' };
  font-weight: ${ props => props.big ? 'bolder': 'normal'};
  color: ${props => props.big ? 'white' : 'black'};
  width: ${props => props.big ? 'auto' : '80%'};
  vertical-align: middle;
`;

// Enter누르면 focus 벗어나는거 추가 구현 필요
const Title = ({title, big, type, id}) => {
  const [ titleValue, setTitleValue ] = useState(title);
  const dispatch = useDispatch();

  const onChangeTitle = useCallback((e) => {
    setTitleValue(e.target.value);
    const body = {
      id: parseInt(id),
      data: e.target.value,
    }
    if(type === 'list') {
      dispatch(editListTitleAction(body))
    } else if (type === 'board'){
      // editBoardTitleAction
    } else if (type === 'card'){
      // editCardTitleAction
    }
  }, [titleValue]);

  return (
    <TitleInput value={titleValue} onChange={onChangeTitle} big={big ? big : null} />
  )
}

export default Title
