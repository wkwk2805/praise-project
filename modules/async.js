// action
const AXIOS_RESULT = "lyrics/AXIOS_RESULT";
const AXIOS_ERROR = "lyrics/AXIOS_ERROR";

// action creator
export const axiosResult = res => ({ type: AXIOS_RESULT, res: res });
export const axiosError = () => ({ type: AXIOS_ERROR });

// initialState
const initialState = {};

// reducer
const async = (state = initialState, action) => {
  switch (action.type) {
    case AXIOS_RESULT:
      return onAxiosResult(action.res);
    case AXIOS_ERROR:
      return onAxiosError();
    default:
      return state;
  }
};

// functions
const onAxiosResult = res => res;

const onAxiosError = () => "에러가 발생하였습니다.";

// export
export default async;
