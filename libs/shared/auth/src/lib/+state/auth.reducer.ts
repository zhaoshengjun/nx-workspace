import { Action } from '@ngrx/store';
import { AuthActions, AuthActionTypes } from './auth.actions';

/**
 * Interface for the 'Auth' data used in
 *  - AuthState, and
 *  - authReducer
 */
export interface AuthData {
  auth: any;
  loading: boolean;
}

/**
 * Interface to the part of the Store containing AuthState
 * and other information related to AuthData.
 */
export interface AuthState {
  readonly auth: AuthData;
}

export const initialState: AuthData = {
  auth: null,
  loading: false
};

export function authReducer(
  state = initialState,
  action: AuthActions
): AuthData {
  switch (action.type) {
    case AuthActionTypes.LoginSuccess:
      return { ...state, auth: action.payload };

    default:
      return state;
  }
}
