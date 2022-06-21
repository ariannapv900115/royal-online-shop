import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";

@Injectable()
export class DataService {

  closeDetail: boolean;
  private closeDetail$: Subject<boolean> = new Subject<boolean>();

  constructor() {
    this.closeDetail = false;
  }

  getClose(): boolean {
    return this.closeDetail;
  }
  changeCloseDetails(): void {
    this.closeDetail = !this.closeDetail;
    this.closeDetail$.next(this.closeDetail);
  }
  getCloseDetails(): Observable<boolean> {
    return this.closeDetail$.asObservable();
  }
}
