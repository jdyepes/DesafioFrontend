import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServicePath } from '../../common/const/path';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'
                          })
};

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient) { }

  login(credentials: any): Observable<any> 
  {
    console.log(httpOptions);
    return this.http.post(ServicePath.AUTH_API , 
                          {
                            NombreLogin: credentials.NombreLogin,
                            Password: credentials.Password
                          }, 
                          httpOptions);
  }
}
