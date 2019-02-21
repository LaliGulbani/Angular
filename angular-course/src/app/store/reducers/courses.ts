import {ActionTypes, Actions} from '../actions/courses';
import {Course} from '../../courses/entities/course';

export interface State {
  list: Course[];
  canLoadMore: boolean;
}
export const initialState: State = {
  list: [],
  canLoadMore: true
};

export function reducer(state = initialState, action: Actions): State {
  switch (action.type) {
    case ActionTypes.SET_COURSES:
      return {
        ...state,
        list: action.payload.courses,
        canLoadMore: action.payload.canLoadMore
      };
    case ActionTypes.LOAD_MORE:
      return {
        ...state,
        list: [...state.list, ...action.payload.courses],
        canLoadMore: action.payload.canLoadMore
      };
    default:
      return state;
  }
}

export const getCoursesList = (state: State) => state.list;
export const canLoadMore = (state: State) => state.canLoadMore;
