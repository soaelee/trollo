import React from 'react';
import styled from 'styled-components';
import { ClockCircleOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: .3em;
`
const Label = styled.div`
  display: inline-block;
  width: 40px;
  height: 8px;
  border-radius: 2em;
  background-color: ${props => props.color};
  margin-right: .3em;
`
const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
const DueDate = styled.div`
  display: inline-block;
  background: #fa9988;
  border-radius: 4px;
  color: white;
  padding: .3em;
  font-size: 12px;
  line-height: 2;
`
const AvatarStyle = styled(Avatar)`
  display: inline-block;
  margin-right: 4px;
`;

const CardContent = () => {
  return (
    <Container>
      <div className="labelContainer">
        <Label color="pink"/>
        <Label color="orange"/>
      </div>
      <p>Test Card Layout</p>
      <InfoContainer>
        <DueDate>
          <ClockCircleOutlined style={{marginRight: '4px'}}/>
          <span>Jan 18</span>
        </DueDate>
        <div className="avatars">
          <AvatarStyle>P</AvatarStyle>
          <AvatarStyle>H</AvatarStyle>
          <AvatarStyle>L</AvatarStyle>
        </div>
      </InfoContainer>
    </Container>
  )
}

export default CardContent
