import produce from 'immer';
import boardDummyData from '../data/board';

// board data 구조
// {
//   id: 1,
//   name: 'board_name',
//   lists: [
//     {
//       id: 1,
//       title: 'list_name',
//       card: [
//         {
//           id: 1,
//           title: 'card_name',
//           description: '',
//           cover: 'cover_color',
//           label: ['label', 'colors'],
//         },
//       ]
//     }
//   ]
// }

const initialState = {
  board: boardDummyData,

}

const reducer = (state = initialState, action) => produce(state, (draft) => {
  switch(action.type){
    default:
      break;
  }
})

export default reducer;