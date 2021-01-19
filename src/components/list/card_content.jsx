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
  position: relative;
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
const Avatars = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;
const CardContent = ({card}) => {
  return (
    <Container>
      <div className="labelContainer">
        {card.label && card.label.map((v,idx) => (
          <Label color={v} key={idx}/>
        ))}
      </div>
      {card.title ?
      <p>{card.title}</p>
      :
      <p>카드이름을 입력해주세요</p>
      }
      <InfoContainer>
        {card.date && (
          <DueDate>
            <ClockCircleOutlined style={{marginRight: '4px'}}/>
            <span>{card.date}</span>
          </DueDate>
        )}
        <Avatars>
        {card.members?.map((v,idx) => {
          return <Avatar key={idx} style={{marginLeft: 2}}>{v[0]}</Avatar>
        })}
        </Avatars>
      </InfoContainer>
    </Container>
  )
}

export default CardContent
