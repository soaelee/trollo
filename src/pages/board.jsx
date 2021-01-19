import React, { useCallback } from 'react';
import Navbar from '../components/board/navbar';
import List from '../components/list/list';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
<<<<<<< HEAD
import { useSelector } from 'react-redux';
=======
import { useSelector, useDispatch} from 'react-redux';
import styled from 'styled-components';
import { Button } from 'antd';
import { addListRequestAction } from '../reducers/board';
>>>>>>> 7800b733b34ae71f51c18007ea633a0b9de59469

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

  const onDragEnd = useCallback(() => {
    console.log('Completed DnD!');
  }, []);

  const onClickAddList = useCallback(() => {
    dispatch(addListRequestAction());
    // console.log(new Date());
  }, []);

  return (
    <>
      <Navbar title={board.name} members={board.members} auth={board.auth}/>
      <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId={board.name} direction="horizontal">
          {provided => (
            <div {...provided.droppableProps} ref={provided.innerRef} style={{display: 'flex'}}>
              {board.lists.map(v => (
                <List key={v.id} list={v}/>
              ))}
              {provided.placeholder}
              <AddListBtn type="primary" onClick={onClickAddList}>+ Add List</AddListBtn>
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  )
}

export default Board
