import axios from "axios";
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

export const listLogs = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: LOG_LIST_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/logs`, config);

    dispatch({
      type: LOG_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: LOG_LIST_FAIL,
      payload: message,
    });
  }
};

export const createLogAction =
  (title, destination, category, itinerary, budget, startDate, endDate) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: LOG_CREATE_REQUEST,
      });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.post(
        `/api/logs/create`,
        { title, destination, itinerary, category, budget, startDate, endDate },
        config
      );

      dispatch({
        type: LOG_CREATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: LOG_CREATE_FAIL,
        payload: message,
      });
    }
  };

export const updateLogAction =
  (id, title, destination, itinerary, category, budget, startDate, endDate) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: LOG_UPDATE_REQUEST,
      });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.put(
        `/api/logs/${id}`,
        { title, destination, category, itinerary, budget, startDate, endDate },
        config
      );

      dispatch({
        type: LOG_UPDATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: LOG_UPDATE_FAIL,
        payload: message,
      });
    }
  };

export const deleteLogAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: LOG_DELETE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.delete(`/api/logs/${id}`, config);

    dispatch({
      type: LOG_DELETE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: LOG_DELETE_FAIL,
      payload: message,
    });
  }
};
