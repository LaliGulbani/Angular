import { Action } from '@ngrx/store';

export const ActionTypes = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT'
};

class LoginAction implements Action {
  readonly type = ActionTypes.LOGIN;
}

class LogoutAction implements Action {
  readonly type = ActionTypes.LOGOUT;
}

export type Actions = LoginAction | LogoutAction;
