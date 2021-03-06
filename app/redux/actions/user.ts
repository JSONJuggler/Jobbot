import {Dispatch} from 'redux';
// import {ApiResponse, create} from 'apisauce';
import {User, AUTH_START, AUTH_SUCCESS, AUTH_FAILURE} from './types';
// import Config from 'react-native-config';

// const baseUrl = __DEV__ ? Config.DEV_BASE_URL : Config.PROD_BASE_URL;

// const api = create({
//   baseURL: baseUrl,
// });

export const authenticateUser = (user: User) => async (dispatch: Dispatch) => {
  try {
    dispatch({
      type: AUTH_START,
    });

    console.log(user);

    dispatch({
      type: AUTH_SUCCESS,
    });
  } catch (err) {
    console.error(err);

    dispatch({
      type: AUTH_FAILURE,
    });
  }
};
