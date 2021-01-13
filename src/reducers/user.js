import produce from 'immer';

const initialState = {
  user: "initial",

  loginLoading: false,
  loginDone: false,
  loginError: null
}

export const TEST = 'TEST';
export const TEST_SUCCESS = 'TEST_SUCCESS';
export const TEST_FAILURE = 'TEST_FAILURE';

export const testRequestAction = () => ({
  type: TEST
});

const reducer = (state=initialState, action) => produce(state, (draft) => {
  switch(action.type){
    case TEST:
      draft.user = "ing";
      break;
    case TEST_SUCCESS:
      draft.user = "trolls";
      break;
    case TEST_FAILURE:
      draft.user = "error";
      break;
    default:
      return state;
  }
});

export default reducer;