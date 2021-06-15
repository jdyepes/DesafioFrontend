import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServicePath } from 'src/app/common/const/path';


@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  getHouseCharacters(house: string): Observable<any> { // obtener lista de personajes con su nombre de Casa
    return this.http.get(ServicePath.HOUSE + house, { responseType: 'json' });
  }

  getStudent(): Observable<any> { // lista de estudiantes
    return this.http.get(ServicePath.STUDENT, { responseType: 'json' });
  }

  getStaft(): Observable<any> { // lista de profesores
    return this.http.get(ServicePath.STAFF, { responseType: 'json' });
  }

}
