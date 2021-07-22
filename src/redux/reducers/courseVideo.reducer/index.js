import {
  GET_COURSE_VIDEO_FAIL,
  GET_COURSE_VIDEO_START,
  GET_COURSE_VIDEO_SUCCESS,
} from "../../actions/courseVideo.action/courseVideo.type";

const initialState = { loading: false, videos: [], error: '', courseTitle: '',  };

const courseVideoReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_COURSE_VIDEO_START:
      return {
        ...state,
        loading: true,
      };

    case GET_COURSE_VIDEO_FAIL:
      return {
        ...state,
        loading: false,
        error: payload.error,
      };

    case GET_COURSE_VIDEO_SUCCESS:
      return {
        ...state,
        loading: false,
        videos: payload.videos,
        title: payload.title,
        total: payload.total
      };
    default:
      return state
  }
};

export default courseVideoReducer;
