import produce from 'immer';

const initialState = {
  user: null,

  loginLoading: false,
  loginDone: false,
  loginError: null
}

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const loginRequestAction = data => ({
  type: LOGIN_REQUEST,
  data,
})
const reducer = (state=initialState, action) => produce(state, (draft) => {
  switch(action.type){
    case LOGIN_REQUEST:
      draft.loginLoading = true;
      draft.loginDone = false;
      draft.loginError = null;
      break;
    case LOGIN_SUCCESS:
      draft.user = action.data;
      draft.loginLoading = false;
      draft.loginDone = true;
      draft.loginError = null;
      break;
    case LOGIN_FAILURE:
      draft.loginLoading = false;
      draft.loginDone = false;
      draft.loginError = action.error;
      break;
    default:
      return state;
  }
});

export default reducer;