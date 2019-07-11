// action
const CHANGE_HANDLER = "lyrics/CHANGE_HANDLER";
const CHANGE_DATA = "lyrics/CHANGE_DATA";

//action creator
export const changeHandler = e => ({ type: CHANGE_HANDLER, e });
export const changeData = e => ({ type: CHANGE_DATA, e });

// initialState
const initialState = {};

//Reducers
const lyrics = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_HANDLER:
      return onChangeHandler(state, action.e);
    case CHANGE_DATA:
      return onChangeData(action.e);
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

const onChangeData = e => {
  const obj = {};
  if (e.target.id) {
    const data = e.target.id.split("#");
    obj["main"] = data[0];
    obj["sub"] = data[1];
  }
  return obj;
};

export default lyrics;
