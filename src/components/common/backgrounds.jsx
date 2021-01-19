import React from 'react';
import styled from 'styled-components';
import { CloseOutlined, CheckSquareOutlined, MinusSquareOutlined } from '@ant-design/icons';
import colors from '../../data/colors';
import { Button } from 'antd';
const Container = styled.div`
  width: 250px;
  border-radius: 8px;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 15px;
`;

const Title = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-bottom: 1px solid gray;
  padding-bottom: 2px;
  margin-bottom: 10px;
`;

const Colors = styled.div`
  flex: 1;
`;

const Color = styled.div`
  width: 85%;
  height: 30px;
  background: ${ props => props.color};
  margin-bottom: 6px;
  border-radius: 3px;
`

const Backgrounds = ({cover}) => {
  return (
    <Container>
      <Title>
        <p style={{margin: 0}}>Background</p>
        <CloseOutlined style={{position: 'absolute', right: 10, color: 'gray'}}/>
      </Title>
      <Colors>
        { colors.map(v => {
          if(cover === v){
            return (
              <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-around'}}>
                <Color color={v} />
                <CheckSquareOutlined style={{fontSize: '1.3rem', color: 'gray'}}/>
              </div>
            )
          }
          else {
            return (
              <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-around'}}>
                <Color color={v} />
                <MinusSquareOutlined style={{fontSize: '1.3rem', color: 'gray'}}/>
              </div>
            )            
          }
        }
        )}
      </Colors>
      <Button style={{marginTop: '1rem'}}>Selected Background</Button>
    </Container>
  )
}

export default Backgrounds;
