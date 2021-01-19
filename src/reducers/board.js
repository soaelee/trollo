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
//   like: boolean
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
      draft.board.lists.push({id: getNewId(), title: '', like: false});
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
    case EDIT_LIST_TITLE_REQUEST: {
      const list = draft.board.lists.find(v => v.id === action.data.id);
      list.title = action.data.data;
      console.log(action.data.id);
      break;
    }
    default:
      break;
  }
})

export default reducer;