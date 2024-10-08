import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { InterfaceFiliere } from '../models/interface-filiere';

@Injectable({
  providedIn: 'root',
})
export class EditFiliereService {
  API = environment.API_EDIT_Filiere;
  constructor(private httpclient: HttpClient) {}

  getFiliere(id: number) {
    return this.httpclient.get<InterfaceFiliere>(`${this.API}/${id}`);
  }
  MethodeUpdate(filiere: any) {
    console.log(typeof filiere);

    const body = {
      id_Filiere: 1,
      filiere: 'kkkk',
      niveau: 'T',
    };

    return this.httpclient.put<InterfaceFiliere>(
      `${this.API}/${filiere.id_Filiere}`,
      filiere
    );
  }
}
