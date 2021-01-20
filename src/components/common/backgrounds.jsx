import React from 'react';
import styled from 'styled-components';
import { CloseOutlined, CheckSquareOutlined, MinusSquareOutlined } from '@ant-design/icons';
import colors from '../../data/colors';
import { Button } from 'antd';
import { useDispatch } from 'react-redux';

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
  &:hover {
    width: 90%;
  }

`

const Backgrounds = ({cover, onCloseSetBoard, action}) => {
  const dispatch = useDispatch();
  const onClose = () => {
    onCloseSetBoard();
  };

  const onChangeBg = (color) => {
    dispatch(action(color));
  };
  return (
    <Container>
      <Title>
        <p style={{margin: 0}}>Background</p>
        <CloseOutlined onClick={onClose} style={{position: 'absolute', right: 10, color: 'gray', cursor: 'pointer'}}/>
      </Title>
      <Colors>
        { colors.map(v => {
          if(cover === v){
            return (
              <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-around'}}>
                <Color color={v} onClick={() => {onChangeBg(v)}}/>
              </div>
            )
          }
          else {
            return (
              <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-around'}}>
                <Color color={v} onClick={() => {onChangeBg(v)}} />
              </div>
            )            
          }
        }
        )}
      </Colors>
      <Button style={{marginTop: '1rem'}} onClick={onCloseSetBoard}>Done</Button>
    </Container>
  )
}

export default Backgrounds;
