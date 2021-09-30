import { FETCH_ALL, UPDATE, CREATE} from '../constants/const';

import * as api from '../api/index.js';

export const createLead = (lead) => async (dispatch) => {
  try {
    const { data } = await api.create(lead);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const fetch_leads = () => async (dispatch) => {
    try {
      const { data } = await api.fetch_all();
      dispatch({ type: FETCH_ALL, payload: data });

    } catch (error) {
      console.log(error.message);
    }
  };
  
export const updateBStatus = (id, status) => async (dispatch) => {
    try {
      const { data } = await api.updateBStatus(id, status);
      dispatch({ type: UPDATE, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  export const updateCStatus = (id, status) => async (dispatch) => {
    try {
      const { data } = await api.updateCStatus(id, status);
      dispatch({ type: UPDATE, payload: data });
    } catch (error) {
      console.log(error);
    }
  };