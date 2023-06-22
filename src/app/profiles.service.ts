import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfilesService {

  constructor(private http: HttpClient) { }
  url = 'http://localhost:8000/api/profiles/';


  getAPI(): Observable<any> {
    return this.http.get<any>(this.url);
  }

  getAPIFromId(id: number): Observable<any> {
    return this.http.get<any>(this.url + `${id}`);
  }
}
