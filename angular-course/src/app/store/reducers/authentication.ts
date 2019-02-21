import {ActionTypes, Actions} from '../actions/authentication';

export interface State {
  logged: boolean;
}

const initialState: State = {
  logged: false
};

export function reducer(state = initialState, action: Actions): State {
  switch (action.type) {
    case ActionTypes.LOGIN:
      return {
        logged: true
      };
    case ActionTypes.LOGOUT:
      return {
        logged: false
      };
    default:
      return state;
  }
}
