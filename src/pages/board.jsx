import React, { useCallback } from 'react';
import Header from '../components/board/header';
import List from '../components/list/list';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { useSelector, useDispatch } from 'react-redux';

const Board = () => {
  
  const { board } = useSelector((state) => state.board);

  const onDragEnd = useCallback(() => {
    console.log('Completed DnD!');
  }, []);
  return (
    <>
    <Header title={board.name} members={board.members} auth={board.auth}/>
    <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId={board.name} direction="horizontal">
        {provided => (
          <div {...provided.droppableProps} ref={provided.innerRef} style={{display: 'flex'}}>
            {board.lists.map(v => (
              <List key={v.id} list={v}/>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
    </>
  )
}

export default Board
