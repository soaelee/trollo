import produce from 'immer';
import boardDummyData from '../data/board';
import moment from 'moment';
import 'moment/locale/ko';

// board data 구조
// {
//   id: 1,
//   name: 'board_name',
//   members: [],
//   auth: 'board_creator'
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

  inviteLoading: false,
  inviteDone: false,
  inviteError: null,
  // 배경바꾸기와 좋아요와 타이틀바꾸기는 saga거치지 않고 바로

}

export const ADD_LIST_REQUEST = 'ADD_LIST_REQUEST';
export const ADD_LIST_SUCCESS = 'ADD_LIST_SUCCESS';
export const ADD_LIST_FAILURE = 'ADD_LIST_FAILURE';

export const REMOVE_LIST_REQUEST = 'REMOVE_LIST_REQUEST';
export const REMOVE_LIST_SUCCESS = 'REMOVE_LIST_SUCCESS';
export const REMOVE_LIST_FAILURE = 'REMOVE_LIST_FAIㅏLURE';

export const EDIT_LIST_TITLE_REQUEST = 'EDIT_LIST_TITLE_REQUEST';

export const ADD_CARD_REQUEST = 'ADD_CARD_REQUEST';
export const ADD_CARD_SUCCESS = 'ADD_CARD_SUCCESS';
export const ADD_CARD_FAILURE = 'ADD_CARD_FAILURE';

export const EDIT_CARD_REQUEST = "EDIT_CARD_REQUEST";
export const EDIT_CARD_SUCCESS = "EDIT_CARD_SUCCESS";
export const EDIT_CARD_FAIL = "EDIT_CARD_FAIL";
export const INVITE_REQUEST = 'INVITE_REQUEST';
export const INVITE_SUCCESS = 'INVITE_SUCCESS';
export const INVITE_FAILURE = 'INVITE_FAILURE';

export const CHANGE_LIST_INDEX = 'CHANGE_LIST_INDEX';

export const CHANGE_BOARD_BACKGROUND = 'CHANGE_BOARD_BACKGROUND';

export const addListRequestAction = () => ({
  type: ADD_LIST_REQUEST,
});

export const removeListRequestAction = (data) => ({
  type: REMOVE_LIST_REQUEST,
  data,
});

export const addCardRequestAction = (data) => ({
  type: ADD_CARD_REQUEST,
  data,
}) 
// 편의상 배경 바꾸고, 좋아요누르는 액션을 동기로 진행하겠습니당
export const editListTitleAction = (data) => ({
  type: EDIT_LIST_TITLE_REQUEST,
  data,
});

export const editCardInfoAction = ({ClckedNum,editTarget,data})=>({
  type: EDIT_CARD_REQUEST,
  ClckedNum,
  editTarget,
  data
});

export const inviteRequestAction = (data) => ({
  type: INVITE_REQUEST,
  data,
});

export const changeListIndexAction = (data) => ({
  type: CHANGE_LIST_INDEX,
  data,
});

export const changeBoardBgAction = (data) => ({
  type: CHANGE_BOARD_BACKGROUND,
  data,
})

const getNewId = () => {
  const newId = moment().format('YYYYMMDDHHmmss');
  return parseInt(newId);
}

const reducer = (state = initialState, action) => produce(state, (draft) => {
  switch(action.type){
    case ADD_LIST_REQUEST:
      draft.addListLoading = true;
      draft.addListDone = false;
      draft.addListError = null;
      break;
    case ADD_LIST_SUCCESS:{
      draft.addListLoading = false;
      draft.addListDone = true;
      draft.addListError = null;
      draft.board.lists.push({id: getNewId(), title: '', like: false, cards: []});
      break;
    }
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
      draft.board.lists = draft.board.lists.filter( v => v.id !== action.data);
      break;
    case REMOVE_LIST_FAILURE:
      draft.removeListDone.Loading = false;
      draft.removeListLoading = false;
      draft.removeListError = action.error;
      break;
    case ADD_CARD_REQUEST:
      draft.addCardLoading = true;
      draft.addCardDone = false;
      draft.addCardError = null;
      break;
    case ADD_CARD_SUCCESS:{
      const list = draft.board.lists.find( v => v.id === action.data);
      draft.addCardLoading = false;
      draft.addCardDone = true;
      draft.addCardError = null;
      list.cards.push({id: getNewId(), title: '', description: ''});
      break;
    }
    case ADD_CARD_FAILURE:
        draft.addCardDone.Loading = false;
        draft.addCardLoading = false;
        draft.addCardError = action.error;
        break;
    case INVITE_REQUEST:
      draft.inviteLoading = true;
      draft.inviteDone = false;
      draft.inviteError = null;
      break;
    case INVITE_SUCCESS:{
      draft.inviteLoading = false;
      draft.inviteDone = true;
      draft.inviteError = null;
      draft.board.members.push(action.data);
      break;
    }
    case INVITE_FAILURE:
        draft.inviteDone.Loading = false;
        draft.inviteLoading = false;
        draft.inviteError = action.error;
        break;
    case EDIT_LIST_TITLE_REQUEST: {
      const list = draft.board.lists.find(v => v.id === action.data.id);
      list.title = action.data.data;
      break;
    }
    case CHANGE_LIST_INDEX: {
      const destIdx = action.data.destIdx;
      const srcIdx = action.data.srcIdx;
      
      const source = draft.board.lists[srcIdx];
      draft.board.lists.splice(srcIdx, 1);
      draft.board.lists.splice(destIdx, 0, source);
      break;
    }
    case EDIT_CARD_REQUEST:{
      draft.board.lists.forEach(list=>{
        let selectedcard = list.cards.find(card=>+action.ClckedNum===card.id);
        if(selectedcard){
          selectedcard[action.editTarget]=action.data;
          return
        };
      })
      break;
    }
    case CHANGE_BOARD_BACKGROUND:
      draft.board.background = action.data;
      break;
    default:
      break;
  }
})

export default reducer;