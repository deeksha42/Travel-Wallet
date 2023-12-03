import {
  LOG_CREATE_FAIL,
  LOG_CREATE_REQUEST,
  LOG_CREATE_SUCCESS,
  LOG_DELETE_FAIL,
  LOG_DELETE_REQUEST,
  LOG_DELETE_SUCCESS,
  LOG_LIST_FAIL,
  LOG_LIST_REQUEST,
  LOG_LIST_SUCCESS,
  LOG_UPDATE_FAIL,
  LOG_UPDATE_REQUEST,
  LOG_UPDATE_SUCCESS,
} from "../constants/logsConstants";

export const logListReducer = (state = { logs: [] }, action) => {
  switch (action.type) {
    case LOG_LIST_REQUEST:
      console.log("Dispatching LOG_LIST_REQUEST action");
      return { loading: true };
    case LOG_LIST_SUCCESS:
      return { loading: false, logs: action.payload };
    case LOG_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const logCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case LOG_CREATE_REQUEST:
      return { loading: true };
    case LOG_CREATE_SUCCESS:
      return { loading: false, success: true };
    case LOG_CREATE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const logUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case LOG_UPDATE_REQUEST:
      return { loading: true };
    case LOG_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case LOG_UPDATE_FAIL:
      return { loading: false, error: action.payload, success: false };

    default:
      return state;
  }
};

export const logDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case LOG_DELETE_REQUEST:
      return { loading: true };
    case LOG_DELETE_SUCCESS:
      return { loading: false, success: true };
    case LOG_DELETE_FAIL:
      return { loading: false, error: action.payload, success: false };

    default:
      return state;
  }
};
