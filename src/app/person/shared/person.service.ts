import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class ServiceNameService {

  constructor(private http: Http) { }

  getPerson()

  getPerson(): Observable<Comment[]> {
  return this.http.get('http://localhost:8081/chef-challenge-service/person')
    .map((res: Response) => res.json())
    .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

}
