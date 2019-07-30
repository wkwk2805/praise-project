// action
const CHANGE_HANDLER = "lyrics/CHANGE_HANDLER";
const LOGIN_HANDLER = "lyrics/LOGIN_HANDLER";
//action creator
export const changeHandler = e => ({ type: CHANGE_HANDLER, e });
export const lognHandler = result => ({ type: LOGIN_HANDLER, result });
// initialState
const initialState = {};

//Reducers
const lyrics = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_HANDLER:
      return onChangeHandler(state, action.e);
    case LOGIN_HANDLER:
      return onLoginHandler(state, action.result);
    default:
      return state;
  }
};

// create functions
// 값이 변경될 때마다 값에 대한 내용을 넣어줌 // 사용안할듯
const onChangeHandler = (state, e) => {
  e.target && (state = { ...state, [e.target.name]: e.target.value });
  if (e.target.value === "") {
    delete state[e.target.name];
  }
  if (e.target.name === "file") {
    let formData = new FormData();
    formData.append("file", e.target.files[0]);
    state = { ...state, formData };
  }
  return state;
};

const onLoginHandler = (state, result) => {
  console.log("onLoginHandler");
  return { result: result };
};
export default lyrics;
