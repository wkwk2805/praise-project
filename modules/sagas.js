import { call, put, takeEvery, all } from "redux-saga/effects";
import axios from "axios";
import { axiosResult, axiosError } from "./async";

const INSERT_DATA = "sagas/INSERT_DATA"; // 이 액션으로 체킹해서 호출
const UPDATE_DATA = "sagas/UPDATE_DATA";
const DELETE_DATA = "sagas/DELETE_DATA";
const UPLOAD_FILE = "sagas/UPLOAD_FILE";

export const insertData = param => ({
  type: INSERT_DATA,
  payload: "put",
  param,
  formData: param.formData
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

export const uploadFile = param => ({
  type: UPLOAD_FILE,
  param
});

const axiosData = (payload, param) =>
  axios[payload](`http://localhost:3001/api`, param);
const axiosFile = param => axios.put(`http://localhost:3001/api/upload`, param);

// dispatch => checking =>
function* onAxiosData(action) {
  try {
    const res = yield axiosData(action.payload, action.param);
    yield axiosFile(action.formData);
    yield put(axiosResult(res));
  } catch (error) {
    yield put(axiosError());
  }
}

function* axiosSaga() {
  yield takeEvery(INSERT_DATA, onAxiosData);
  yield takeEvery(UPDATE_DATA, onAxiosData);
  yield takeEvery(DELETE_DATA, onAxiosData);
}

export function* rootSaga() {
  yield all([axiosSaga()]);
}

export default rootSaga;
