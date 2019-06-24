import _download_ppt from "./action_function/download_ppt";

// action
const DOWNLOAD_PPT = "lyrics/DOWNLOAD_PPT";

export const downloadPPT = () => ({ type: DOWNLOAD_PPT });

// initialState
const initialState = {};

//Reducers
const lyrics = (state = initialState, action) => {
  switch (action.type) {
    case DOWNLOAD_PPT:
      return _downloadPPT(state);

    default:
      return state;
  }
};

export default lyrics;
