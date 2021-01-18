import React, { useCallback } from 'react';
import Header from '../components/board/header';
import List from '../components/list/list';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

const Board = () => {
  const onDragEnd = useCallback(() => {
    
    console.log('Completed DnD!');
  }, []);
  return (
    <>
    <Header />
    <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="test" direction="horizontal">
        {provided => (
          <div {...provided.droppableProps} ref={provided.innerRef} style={{display: 'flex'}}>
            <List title={"TestList1"} idx="1"/>
            <List title={"TestList2"}idx="2"/>
            <List title={"TestList3"}idx="3"/>
            <List title={"TestList4"}idx="4"/>
            <List title={"TestList5"}idx="5"/>
            <List title={"TestList6"}idx="6"/>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
    </>
  )
}

export default Board
