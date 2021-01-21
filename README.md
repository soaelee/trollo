# 2021 세미나 발표 프로젝트

<br>
<br>
<br>

# Trello

### 협업 및 일정관리를 위한 툴

<br>
<br>
<br>

# Skills

- Html
- Postcss, PostScss, Antd Design
- React Hooks
- Redux, Redux saga
- Library: Styled-components, Immer, Beautiful dnd
- Tool: Figma

<br>
<br>
<br>

# Presentation

목차

1. Demo 소개

- 페이지
  - 로그인, 로그아웃 [이소애, 한승표]
  - 메인 대쉬보드 페이지 [이소애, 한승표]
  - 대쉬보드 모달페이지 [백승일]
- 주요 기능  
  [로그인, 로그아웃, 메인페이지]
  - 로그인, 로그아웃
  - 배경색 변경
  - 멤버 추가하기
  - 좋아요기능
  - 카드 드래그앤드랍
  - 카드 추가
  - 카드 내 리스트 추가 제거
    [모달페이지]

2. Session1 한승표

- 표제: [제목]

3. Session2 이소애

- 표제: Beautiful dnd 라이브러리 소개

4. Session3 백승일

- 표제: [제목]

<br>
<br>
<br>
<br>
<br>
<br>

## Session1 한승표

### 리액트 소개

[content]

<br>
<br>
<br>
<br>
<br>
<br>

## Session2 이소애

### Beautiful dnd 라이브러리 소개

> Drag n Drop을 편리하게 구현할 수 있는 리액트 라이브러리
>
> > 🚀 Horizontal 리스트
> > ✓ Vertical 리스트
> > ✓ 한 페이지 내의 멀티 리스트
> > ✓ 중첩 리스트 (리스트와 카드 모두)
> > ✓ 마우스, 키보드 드래깅

- 컴포넌트 구성

  1. DragDropContext
  2. Droppable
  3. Droggable

- DragDropContext & Droppable 적용

```
<DragDropContext onDragEnd={onDragEnd}>
  <Droppable droppableId={board.name} direction="horizontal">
    {provided => (
      <div {...provided.droppableProps} ref={provided.innerRef}>
        {lists.map((list, index) => (
          <List key={list.id} list={list} index={index}/>
        ))}
    {provided.placeholder}
  </Droppable>
</DragDropContext>

// 🔥 Note!!
// onDragEnd는 필수 콜백 : draggable 컴포넌트 순서 유지 로직
// droppableId는 string형식이며, 고유한 값(변동 x)
// droppable의 child는 react element를 반환하는 함수 형태여야 하고, dnd가 작동하도록 provided를 모두 할당 받아야 한다.
// provided.placeholder로 drop 가능한 공간 할당
```

- DnD가 실행된 이후 실행될 함수

```
//onDragEnd의 result인자를 받아서
//드래그하는 인덱스와 드롭되는 인덱스를 dispatch할 때 함께 넘김
const onDragEnd = (result) => {
  const body = {
    destIdx: result.destination.index,
    srcIdx: result.source.index,
  }
  dispatch(changeListIndexAction(body));
};

```

- Board reducer

```
// 드래그 할 리스트 객체를 임시로 변수 할당하고, 제거한 후에
// 드롭 될 인덱스 중간에 추가하여 드래그 된 순서를 유지
case CHANGE_LIST_INDEX: {
  const destIdx = action.data.destIdx;
  const srcIdx = action.data.srcIdx;

  const source = draft.board.lists[srcIdx];
  draft.board.lists.splice(srcIdx, 1);
  draft.board.lists.splice(destIdx, 0, source);
  break;
}
```

- Draggable 적용

```
<Draggable draggableId={String(list.id)} index={parseInt(index)}>
  {provided => (
    <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
      <ListContainer id={list.id}/>
    </div>
  )}
</Draggable>
// 🔥 Note!!
// droggableId는 string형식이며, 고유한 값(변동 x)
```

- 참고 snapshot (README in react-beautiful-dnd)
  Droppable과 Draggable에서는 provided와 함께 옵션으로 snapshot을 인자로 받을 수 있음
  주로 isDraggingOver 속성을 이용해 드래그 도중 스타일을 변경

```
<Droppable droppableId="droppable-1">
  {(provided, snapshot) => (
    <div
      ref={provided.innerRef}
      style={{backgroundColor: snapshot.isDraggingOver ? 'blue' : 'grey'}}
    >
      I am a droppable!
    </div>
  )}
</Droppable>
```

<br>
<br>
<br>
<br>
<br>
<br>

## Session3 백승일

### 리액트 소개

[content]

<br>
