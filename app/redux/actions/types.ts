export const AUTH_START = 'AUTH_START';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAILURE = 'AUTH_FAILURE';

export type User = {
  name: string;
  description: string;
  rating: string;
  email: string;
  avatar: string;
};

interface AuthStartAction {
  type: typeof AUTH_START;
}

interface AuthSuccessAction {
  type: typeof AUTH_SUCCESS;
}

interface AuthFailureAction {
  type: typeof AUTH_FAILURE;
}

export type UserState = {
  isAuthenticated: boolean;
  isLoading: boolean;
};

export type UserActionTypes =
  | AuthStartAction
  | AuthSuccessAction
  | AuthFailureAction;
