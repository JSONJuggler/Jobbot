import {
  UserState,
  UserActionTypes,
  AUTH_START,
  AUTH_SUCCESS,
  AUTH_FAILURE,
} from '../actions/types';

const initialState: UserState = {
  isAuthenticated: false,
  isLoading: false,
};

export default function (
  state = initialState,
  action: UserActionTypes,
): UserState {
  switch (action.type) {
    case AUTH_START:
      return {
        ...state,
        isLoading: true,
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
      };
    case AUTH_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        isLoading: false,
      };
    default:
      return state;
  }
}
