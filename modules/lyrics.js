//import
import PptxGenJS from "pptxgenjs";

// action
const DOWNLOAD_PPT = "lyrics/DOWNLOAD_PPT";
const CHANGE_HANDLER = "lyrics/CHANGE_HANDLER";

//action creator
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

// 값이 변경될 때마다 값에 대한 내용을 넣어줌 // 사용안할듯
const onChangeHandler = (state, e) => {
  e.target && (state = { ...state, [e.target.name]: e.target.value });
  if (e.target.value === "") {
    delete state[e.target.name];
  }
  return state;
};

export default lyrics;
