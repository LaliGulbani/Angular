import { Action } from '@ngrx/store';
import {Course} from '../../courses/entities/course';

export const ActionTypes = {
  SET_COURSES: 'SET_COURSES',
  LOAD_MORE: 'LOAD_MORE'
};

export class SetCoursesAction implements Action {
  readonly type = ActionTypes.SET_COURSES;

  constructor(readonly payload: {courses: Course[], canLoadMore: boolean}) {}
}

export class LoadMoreAction implements Action {
  readonly type = ActionTypes.LOAD_MORE;

  constructor(readonly payload: {courses: Course[], canLoadMore: boolean}) {}
}

export type Actions = LoadMoreAction & SetCoursesAction;

