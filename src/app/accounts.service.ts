import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor(private http: HttpClient) { }
  url = 'http://localhost:8000/dj-rest-auth';

  private login$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  
  postAPI(data: any, type: string): Observable<any>  {
    // Define la URL de la API
  
    // Define los encabezados de la solicitud (opcional)
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
  
    // Realiza la solicitud POST
    return this.http.post(`${this.url}/${type}/`, data, { headers })
  }

  getAPI(token:string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Token ${token}`
    });
    return this.http.get<any>(`${this.url}/user/`, {headers});
  }

  getAPIFromId(id: number): Observable<any> {
    return this.http.get<any>(this.url + `${id}`);
  }

  // login 

  getLogin(): Observable<any> {
    return this.login$.asObservable();
  }

  setLogin(login: boolean): void {
    this.login$.next(login);
  } 

  
}
