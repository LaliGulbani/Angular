import {ActionReducerMap, ActionReducer, MetaReducer, createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromCourses from './courses';
import * as fromAuthentication from './authentication';


export interface State {
  courses: fromCourses.State;
  authentication: fromAuthentication.State;
}

export const reducers: ActionReducerMap<State> = {
  courses: fromCourses.reducer,
  authentication: fromAuthentication.reducer
};

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return function (state: State, action: any): State {
    console.log('state', state);
    console.log('action', action);
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<State>[] = [logger];


export const getCoursesState = createFeatureSelector<fromCourses.State>('courses');

export const getCoursesList = createSelector(
  getCoursesState,
  fromCourses.getCoursesList
);

export const canLoadMore = createSelector(
  getCoursesState,
  fromCourses.canLoadMore
);
