import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Course} from '../../entities/course';
import {CoursesService} from '../../services/courses.service';
import {fromEvent, Observable, Subscription} from 'rxjs/index';
import {HttpErrorResponse, HttpParams} from '@angular/common/http';
import {COURSES_PER_LOAD} from '../../../app.config';
import {debounceTime, map} from 'rxjs/internal/operators';
import {Store} from '@ngrx/store';
import * as fromRoot from '../../../store/reducers';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit, OnDestroy {
  @Input() searchQuery: string;
  courses$: Observable<Course[]>;
  canLoadMore$: Observable<boolean>;
  coursesPerLoad = COURSES_PER_LOAD;
  loadStart: number;
  noMoreCourses: boolean;
  inputSubscription: Subscription;

  constructor(private store: Store<fromRoot.State>, private coursesService: CoursesService) {
    this.courses$ = store.select(fromRoot.getCoursesList);
    this.canLoadMore$ = store.select(fromRoot.canLoadMore);
  }

  ngOnInit() {
    this.search();
    const input = document.getElementById('search');
    const searchObservable = fromEvent(input, 'keyup').pipe(map(i => (<HTMLTextAreaElement>i.currentTarget).value));
    const debouncedInput = searchObservable.pipe(debounceTime(500));
    this.inputSubscription = debouncedInput.subscribe( (searchQuery) => {
      if (searchQuery.length > 2) {
        this.search();
      }
    });
  }

  search(): void {
    this.loadStart = 0;
    this.noMoreCourses = false;
    this.getCourses(false);
  }

  loadMore(): void {
    this.loadStart += this.coursesPerLoad;
    this.getCourses(true);
  }

  getCourses(loadMore) {
    let params: HttpParams = new HttpParams();
    if (this.searchQuery) {
      params = params.set('textFragment', this.searchQuery);
    }
    // params = params.set('sort', 'date');
    // params = params.set('order', 'asc');
    params = params.set('start', `${this.loadStart}`);
    params = params.set('count', `${this.coursesPerLoad}`);
    this.coursesService.getCourses(params, loadMore);
  }

  deleteCourse(id): void {
    this.coursesService.deleteCourse(id).subscribe(() => {
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }, () => {
        this.search();
      });
  }

  ngOnDestroy() {
    this.inputSubscription.unsubscribe();
  }
}
