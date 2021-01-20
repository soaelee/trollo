import React, { useRef } from 'react';
import styled from 'styled-components';
import { HeartTwoTone, CaretDownOutlined } from '@ant-design/icons';
import { Avatar, Badge, Button } from 'antd';
import Title from '../common/title';
import { useDispatch } from 'react-redux';
import {inviteRequestAction } from '../../reducers/board';

const Container = styled.div`
  background: transparent;
  display: flex;
  align-items: center;
`;

const Btn = styled(Button)`
  background: rgba(255, 255, 255, 0.35);
  color: white;
  border: 0;
  outline: 0;
  border-radius: 3px;
  padding: 0.3em 0.8em;
  height: 35px;
  margin: 0 0.5em;
  line-height: 1;
`;
const Members = styled.div`
  display: flex;
  align-items: center;
`;

const AvatarStyle = styled(Avatar)`
  margin: 0 1px;
`;

const Input = styled.input`
  border: none;
  border-radius: 5px;
  margin-right: 5px;
  outline: none;
`
const Navbar = ({ title, members, auth }) => {
  
  const dispatch = useDispatch();
  const inputEl = useRef(null);

  const inviteMember = (e) => {
    e.stopPropagation();
    const member = inputEl.current.value;
    if(member.length > 0)
    dispatch(inviteRequestAction(member.toUpperCase()));
  };

  return (
    <Container>
      <Btn>
        <Title title={title} big={true} />
      </Btn>
      <Btn>
        <HeartTwoTone />
      </Btn>
      <Members>
        {/* Avatar */}
        {members.map((v) => {
          if (auth === v) {
            return (
              <Badge dot key={v}>
                <AvatarStyle>{v[0]}</AvatarStyle>
              </Badge>
            );
          } else {
            return <AvatarStyle key={v}>{v[0]}</AvatarStyle>;
          }
        })}
      </Members>
      <Btn onClick={inviteMember}>
        <Input 
          ref={inputEl}
          type="text"
          onClick={ (e) => e.stopPropagation()}
          placeholder="invite members..." />
        Invite
      </Btn>
      <Btn>
        <CaretDownOutlined /> Set Board
      </Btn>
    </Container>
  );
};

export default Navbar;
