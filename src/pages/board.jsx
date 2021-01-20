  
import React, { useCallback } from 'react';
import Navbar from '../components/board/navbar';
import List from '../components/list/list';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { useSelector, useDispatch} from 'react-redux';
import styled from 'styled-components';
import { Button } from 'antd';
import { addListRequestAction, changeListIndexAction } from '../reducers/board';

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

  const onDragEnd = (result) => {
    const body = {
      destIdx: result.destination.index,
      srcIdx: result.source.index,
    }
    dispatch(changeListIndexAction(body));
  };

  const onClickAddList = useCallback(() => {
    dispatch(addListRequestAction());
  }, []);

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
      </DragDropContext>
    </>
  )
}
export default Board