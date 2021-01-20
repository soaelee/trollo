import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { HeartTwoTone, CaretDownOutlined } from '@ant-design/icons';
import { Avatar, Badge, Button } from 'antd';
import Title from '../common/title';
import { useSelector, useDispatch } from 'react-redux';
import { inviteRequestAction, changeBoardBgAction } from '../../reducers/board';
import Backgrounds from '../common/backgrounds';
import { Popover } from 'antd';

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
  const { background } = useSelector(state => state.board.board);
  const inputEl = useRef(null);
  const [ isVisibleBg, setIsVisibleBg ] = useState(false);

  const inviteMember = (e) => {
    e.stopPropagation();
    const member = inputEl.current.value;
    if(member.length > 0)
    dispatch(inviteRequestAction(member.toUpperCase()));
  };
  
  const onClickChangeBg = () => {
    setIsVisibleBg(!isVisibleBg);
  };

  const onCloseChangeBg = () => {
    setIsVisibleBg(false);
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
      <Popover
        content={<Backgrounds cover={background}  onCloseSetBoard={onCloseChangeBg} action={changeBoardBgAction}/>}
        trigger="click"
        visible={isVisibleBg}
        onVisibleChange={() => {setIsVisibleBg(!isVisibleBg)}}
      >
      <Btn onClick={onClickChangeBg}>
        <CaretDownOutlined/> Set Board
      </Btn>
      </Popover>
    </Container>
  );
};

export default Navbar;
