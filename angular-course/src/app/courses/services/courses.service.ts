import { Injectable } from '@angular/core';
import { Course } from '../entities/course';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BASE_URL} from "../../app.config";

@Injectable()
export class CoursesService {
  private courses: Course[];

  constructor(private http: HttpClient) { }

  public getCourseIndexById(id: number): number {
    return this.courses.findIndex(course => {
      return course.id === id;
    });
  }

    public getCourses(params: HttpParams): Observable<Course[]> {
      return this.http.get<Course[]>(`${BASE_URL}/courses`, {params: params});
  }

  public getCourseById(id: number): Course {
    const index = this.getCourseIndexById(id);
    return this.courses[index];
  }

  public addCourse(course: Course): void {
    this.courses.push(course);
  }

  public updateCourse(id: number, course: Course): void {
    const index = this.getCourseIndexById(id);
    this.courses[index] = course;
  }

  public removeCourse(id: number): void {
    this.courses.splice(this.getCourseIndexById(id), 1);
  }
}
