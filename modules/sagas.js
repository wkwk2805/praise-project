import { put, takeEvery, all } from "redux-saga/effects";
import axios from "axios";
import { axiosResult, axiosError } from "./async";
import { getData } from "./select";

const INSERT_DATA = "sagas/INSERT_DATA"; // 이 액션으로 체킹해서 호출
const UPDATE_DATA = "sagas/UPDATE_DATA";
const DELETE_DATA = "sagas/DELETE_DATA";
const SELECT_DATA = "sagas/SELECT_DATA";

export const insertData = param => ({
  type: INSERT_DATA,
  payload: "put",
  param
});
export const updateData = param => ({
  type: UPDATE_DATA,
  payload: "patch",
  param
});
export const deleteData = param => ({
  type: DELETE_DATA,
  payload: "delete",
  param
});
export const selectData = info => ({
  type: SELECT_DATA,
  payload: "get",
  info
});

const axiosData = (payload, param) =>
  axios[payload](`http://localhost:3001/api`, param);

const serachAxiosData = info => {
  return axios.get("http://localhost:3001/api/search?info=" + info);
};

// dispatch => checking =>
function* onAxiosData(action) {
  try {
    if (action.param.formData) yield axiosData("post", action.param.formData);
    const res = yield axiosData(action.payload, action.param);
    yield put(axiosResult(res));
  } catch (error) {
    yield put(axiosError());
  }
}

function* getAxiosData(action) {
  try {
    const res = yield serachAxiosData(action.info); // select한 데이터 넣어주기
    yield put(getData(res));
  } catch (error) {
    yield put(axiosError());
  }
}

function* axiosSaga() {
  yield takeEvery(INSERT_DATA, onAxiosData);
  yield takeEvery(UPDATE_DATA, onAxiosData);
  yield takeEvery(DELETE_DATA, onAxiosData);
  yield takeEvery(SELECT_DATA, getAxiosData);
}

export function* rootSaga() {
  yield all([axiosSaga()]);
}

export default rootSaga;
