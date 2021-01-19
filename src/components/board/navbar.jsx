import React from 'react';
import styled from 'styled-components';
import { HeartTwoTone, CaretDownOutlined } from '@ant-design/icons';
import { Avatar, Badge, Button } from 'antd';
import Title from '../common/title';
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
  padding: .3em .8em;
  height: 35px;
  margin: 0 .5em;
  line-height: 1;
`
const Members = styled.div`
  display: flex;
  align-items: center;
`;

const AvatarStyle = styled(Avatar)`
  margin: 0 1px;
`
const Navbar = ({title, members, auth}) => {
  return (
    <Container>
      <Btn>
        <Title title={title} big={true}/>
      </Btn>
      <Btn>
        <HeartTwoTone />
      </Btn>
      <Members>
        {/* Avatar */}
        {members.map( v  => {
          if(auth === v) {
            return (
              <Badge dot key={v}>
                <AvatarStyle>{v[0]}</AvatarStyle>
              </Badge>
            )
          } else {
            return (
              <AvatarStyle key={v}>{v[0]}</AvatarStyle>
            )
          }
        })}
      </Members>
      <Btn>Invite</Btn>
      <Btn><CaretDownOutlined /> Set Board</Btn>
    </Container>
  )
}

export default Navbar
