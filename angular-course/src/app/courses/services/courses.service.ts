import { Injectable } from '@angular/core';
import { Course } from '../entities/course';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BASE_URL} from '../../app.config';

@Injectable()
export class CoursesService {

  constructor(private http: HttpClient) {}

  public getCourses(params: HttpParams): Observable<Course[]> {
    return this.http.get<Course[]>(`${BASE_URL}/courses`, {params: params});
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
