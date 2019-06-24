//import
import PptxGenJS from "pptxgenjs";

// action
const DOWNLOAD_PPT = "lyrics/DOWNLOAD_PPT";

export const downloadPPT = () => ({ type: DOWNLOAD_PPT });

// initialState
const initialState = {};

//Reducers
const lyrics = (state = initialState, action) => {
  switch (action.type) {
    case DOWNLOAD_PPT:
      download_ppt(state);
      return state;

    default:
      return state;
  }
};

// create functions
const download_ppt = state => {
  let pptx = new PptxGenJS();
  pptx.setTitle("Hello world Title");
  pptx.setLayout({ name: "A3", width: 16.5, height: 11.7 });
  let slide = pptx.addNewSlide("MASTER");
  slide.back = "000000";
  slide.color = "FFFFFF";
  pptx.save(`가사모음_20190619`);
};

export default lyrics;
