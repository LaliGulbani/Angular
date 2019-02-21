import { Injectable } from '@angular/core';
import { Course } from '../entities/course';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BASE_URL} from '../../app.config';
import {tap} from 'rxjs/internal/operators';
import {LoadMoreAction, SetCoursesAction} from '../../store/actions/courses';
import {Store} from '@ngrx/store';
import * as fromRoot from '../../store/reducers';

@Injectable()
export class CoursesService {

  constructor(private http: HttpClient, private store: Store<fromRoot.State>) {}

  public getCourses(params: HttpParams, loadMore): void {
    this.http.get<Course[]>(`${BASE_URL}/courses`, {params: params})
      .pipe(tap((courses: Course[]) => {
        if (courses.length) {
          courses.forEach((course) => {
            course.date = new Date(course.date);
          });
          if (loadMore) {
            this.store.dispatch(new LoadMoreAction({courses: courses, canLoadMore: true}));
          } else {
            this.store.dispatch(new SetCoursesAction({courses: courses, canLoadMore: true}));
          }
        } else {
          if (loadMore) {
            this.store.dispatch(new LoadMoreAction({courses: [], canLoadMore: false}));
          } else {
            this.store.dispatch(new SetCoursesAction({courses: [], canLoadMore: false}));
          }
        }
      }))
      .subscribe();
  }

  public deleteCourse(id: number): Observable<any> {
    return this.http.delete(`${BASE_URL}/courses/${id}`);
  }

  public addCourse(data): Observable<any> {
    return this.http.post(`${BASE_URL}/courses/`, data);
  }

  public editCourse(id, data): Observable<any> {
    return this.http.patch(`${BASE_URL}/courses/${id}`, data);
  }

  public getCourseById(id: string): Observable<Course> {
    return this.http.get<Course>(`${BASE_URL}/courses/${id}`);
  }
}
