// src/app/services/add-projet.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { InterfaceProjet } from '../models/interface-projet';

@Injectable({
  providedIn: 'root',
})
export class AddProjetService {
  API = environment.API_Projet;  // Add this URL in your environment file

  constructor(private httpclient: HttpClient) {}

  getAllProjets() {
    return this.httpclient.get<InterfaceProjet[]>(this.API);
  }

  postProjet(projet: InterfaceProjet) {
    return this.httpclient.post<InterfaceProjet>(this.API, projet);
  }

  deleteProjet(id: number) {
    return this.httpclient.delete<InterfaceProjet>(`${this.API}/${id}`);
  }
}
