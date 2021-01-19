import React, { useCallback } from 'react';
import Navbar from '../components/board/navbar';
import List from '../components/list/list';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { useSelector, useDispatch} from 'react-redux';
import styled from 'styled-components';
import { Button } from 'antd';
import { addListRequestAction } from '../reducers/board';
import Labels from '../components/common/labels';

// DnD 해결해야해요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// 관심관심!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const AddListBtn = styled(Button)`
  position: relative;
  top: 10px;
  background: transparent;
  border: 0;
  outline: 0;
  color: black;
`;
const Board = () => {
  
  const dispatch = useDispatch();

  const { board } = useSelector((state) => state.board);

  const onDragEnd = () => {
    // 여기서 인덱스를 바꿔주어야 하나 생각중,,,,,,,
    // 흙흙 너무 어렵다
    console.log('Completed DnD!');
  };

  const onClickAddList = () => {
    dispatch(addListRequestAction());
  };

  return (
    <>
      <Navbar title={board.name} members={board.members} auth={board.auth}/>
      <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId={board.name} direction="horizontal">
          {provided => (
            <div {...provided.droppableProps} ref={provided.innerRef} style={{display: 'flex'}}>
              {board.lists.map((v, index) => (
                <List key={v.id} list={v} index={index}/>
              ))}
              {provided.placeholder}
              <AddListBtn type="primary" onClick={onClickAddList}>+ Add List</AddListBtn>
            </div>
          )}
        </Droppable>
        <Labels />
      </DragDropContext>
    </>
  )
}

export default Board
