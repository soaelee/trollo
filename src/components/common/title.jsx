import React from 'react';
import styled from 'styled-components';
import { Input } from 'antd';
import useInput from '../../hooks/useInput'
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
  font-size: ${ props => props.big ? '1.3rem' : '1rem' };
  color: ${props => props.big ? 'white' : 'black'};
  width: ${props => props.big ? 'auto' : '80%'};
  vertical-align: middle;
`;

// 여기서는 onChange가 아니라 title을 변경하는 dispatch가 필요로 함, 그러기 위해선 리스트 id도 받아오기
const Title = ({title, big}) => {
  const listTitle = useInput(title);
  return (
    <TitleInput value={listTitle.value} onChange={listTitle.onChange} big={big ? big : null}/>
  )
}

export default Title
