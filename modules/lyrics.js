//import
import PptxGenJS from "pptxgenjs";

// action
const DOWNLOAD_PPT = "lyrics/DOWNLOAD_PPT";
const AXIOS_RESULT = "lyrics/AXIOS_RESULT";
const AXIOS_ERROR = "lyrics/AXIOS_ERROR";
const CHANGE_HANDLER = "lyrics/CHANGE_HANDLER";

//action creator
export const axiosResult = res => ({ type: AXIOS_RESULT, res: res });
export const axiosError = () => ({ type: AXIOS_ERROR });
export const downloadPPT = () => ({ type: DOWNLOAD_PPT });
export const changeHandler = e => ({ type: CHANGE_HANDLER, e: e });

// initialState
const initialState = {};

//Reducers
const lyrics = (state = initialState, action) => {
  switch (action.type) {
    case DOWNLOAD_PPT:
      return onDownloadPpt(state);
    case CHANGE_HANDLER:
      return onChangeHandler(state, action.e);
    case AXIOS_RESULT:
      return onAxiosResult(state, action.res);
    case AXIOS_ERROR:
      return onAxiosError();
    default:
      return state;
  }
};

// create functions

// PPT 다운로드 함수
const onDownloadPpt = state => {
  let pptx = new PptxGenJS();
  pptx.setTitle("Hello world Title");
  pptx.setLayout({ name: "A3", width: 16.5, height: 11.7 });
  let slide = pptx.addNewSlide("MASTER");
  slide.back = "000000";
  slide.color = "FFFFFF";
  pptx.save(`가사모음_20190619`);
  return "다운로드 성공";
};

// 값이 변경될 때마다 값에 대한 내용을 넣어줌
const onChangeHandler = (state, e) => {
  delete state["axiosData"];
  e.target && (state = { ...state, [e.target.name]: e.target.value });
  if (e.target.value === "") {
    delete state[e.target.name];
  }
  return state;
};

// redux-saga를 위한 사전준비
const onAxiosResult = (state, data) => {
  return { ...state, axiosData: data };
};

const onAxiosError = () => {
  return "에러가 발생하였습니다.";
};

export default lyrics;
