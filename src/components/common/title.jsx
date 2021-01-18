import React from 'react';
import styled from 'styled-components';
import { Input } from 'antd';
const TitleInput = styled(Input)`
  width: 80%;
  background: transparent;
  border: 0;
  outline: 0;
  border-radius: 4px;
  &:focus {
    background-color: white;
    border: 1px solid skyblue;
  }
`;
const Title = ({title, onChange}) => {
  return (
    <TitleInput value={title} onChange={onChange}/>
  )
}

export default Title
