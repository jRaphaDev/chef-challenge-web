import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class PersonService {

  private URL_BASE = "http://localhost:9091/chef-challenge-service/person";

  constructor(private http: Http) { }

  getPerson(): Observable<Comment[]> {
    return this.http.get(this.URL_BASE)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  postPerson(data: any) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post(this.URL_BASE, data, headers)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

}
