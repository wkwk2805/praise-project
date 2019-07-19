// action
const GET_DATA = "select/GET_DATA";

// action creator
export const getData = res => ({ type: GET_DATA, res });

// initalState
const initalState = [];

// reducer
const select = (state = initalState, action) => {
  switch (action.type) {
    case GET_DATA:
      return action.res.data;
    default:
      return state;
  }
};
// functions

// export
export default select;
