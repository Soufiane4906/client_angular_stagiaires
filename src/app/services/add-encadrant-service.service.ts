import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';  // Import Observable
import { environment } from 'src/environments/environment';
import { InterfaceEncadrant } from '../models/interface-encadrant';

@Injectable({
  providedIn: 'root',
})
export class AddEncadrantServiceService {
  constructor(private httpclient: HttpClient) {}
  API = environment.API_Encadrant;

  getEncadrant(): Observable<InterfaceEncadrant[]> {
    return this.httpclient.get<InterfaceEncadrant[]>(this.API);
  }

  PostEncadrant(encadrant: InterfaceEncadrant): Observable<InterfaceEncadrant> {
    return this.httpclient.post<InterfaceEncadrant>(this.API, encadrant);
  }

  getAll(): Observable<InterfaceEncadrant[]> {
    return this.httpclient.get<InterfaceEncadrant[]>(this.API);
  }

  Deletemethod(id: number): Observable<void> {
    return this.httpclient.delete<void>(`${this.API}/${id}`);
  }
}
