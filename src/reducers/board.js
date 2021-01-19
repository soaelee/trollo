import produce from 'immer';
import boardDummyData from '../data/board';

// board data 구조
// {
//   id: 1,
//   name: 'board_name',
//   members: [],
//   background: 'color',
//   lists: [
//     {
//       id: 1,
//       title: 'list_name',
//       like: boolean
//       card: [
//         {
//           id: 1,
//           title: 'card_name',
//           description: '',
//           cover: 'cover_color',
//           label: ['label', 'colors'],
//           members: [] 
//         },
//       ]
//     }
//   ]
// }

const initialState = {
  board: boardDummyData,

  addListLoading: false,
  addListDone: false,
  addListError: null,

  removeListLoading: false,
  removeListDone: false,
  removeListError: null,

  editListTitleLoading: false,
  editListTitleDone: false,
  editListTitleError: null,

  addCardLoading: false,
  addCardDone: false,
  addCardError: null,

  // 배경바꾸기와 좋아요와 타이틀바꾸기는 saga거치지 않고 바로

}

export const ADD_LIST_REQUEST = 'ADD_LIST_REQUEST';
export const ADD_LIST_SUCCESS = 'ADD_LIST_SUCCESS';
export const ADD_LIST_FAILURE = 'ADD_LIST_FAILURE';

export const REMOVE_LIST_REQUEST = 'REMOVE_LIST_REQUEST';
export const REMOVE_LIST_SUCCESS = 'REMOVE_LIST_SUCCESS';
export const REMOVE_LIST_FAILURE = 'REMOVE_LIST_FAILURE';

export const EDIT_LIST_TITLE_REQUEST = 'EDIT_LIST_TITLE_REQUEST';

export const ADD_CARD_REQUEST = 'ADD_CARD_REQUEST';
export const ADD_CARD_SUCCESS = 'ADD_CARD_SUCCESS';
export const ADD_CARD_FAILURE = 'ADD_CARD_FAILURE';

// 편의상 배경 바꾸고, 좋아요누르는 액션을 동기로 진행하겠습니당

export const editListTitleAction = (data) => ({
  type: EDIT_LIST_TITLE_REQUEST,
  data,
});

const reducer = (state = initialState, action) => produce(state, (draft) => {
  switch(action.type){
    case ADD_LIST_REQUEST:
      draft.addListLoading = true;
      draft.addListDone = false;
      draft.addListError = null;
      break;
    case ADD_LIST_SUCCESS:
      draft.addListLoading = false;
      draft.addListDone = true;
      draft.addListError = null;
      draft.board.push(action.data);
      break;
    case ADD_LIST_FAILURE:
      draft.addListDone.Loading = false;
      draft.addListLoading = false;
      draft.addListError = action.error;
      break;
    case REMOVE_LIST_REQUEST:
      draft.removeListLoading = true;
      draft.removeListDone = false;
      draft.removeListError = null;
      break;
    case REMOVE_LIST_SUCCESS:
      draft.removeListLoading = false;
      draft.removeListDone = true;
      draft.removeListError = null;
      draft.board = draft.board.lists.filter( v => v.id !== action.data);
      break;
    case REMOVE_LIST_FAILURE:
      draft.removeListDone.Loading = false;
      draft.removeListLoading = false;
      draft.removeListError = action.error;
      break;
    case EDIT_LIST_TITLE_REQUEST: {
      const list = draft.board.lists.find(v => v.id === action.data.id);
      list.title = action.data.data;
      // console.log(draft.lists);
      break;
    }
    default:
      break;
  }
})

export default reducer;