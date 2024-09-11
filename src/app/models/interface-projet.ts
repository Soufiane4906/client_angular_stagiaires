import { InterfaceStagiaire } from "./interface-stagiaire";

export interface InterfaceProjet {
  id: number;
  titre: string;
  description: string;
  datedebut: string;
  datefin: string;
  etat: string;
  sheeturl: string;
  encadrant: {
    id: number;
    nom: string;
    prenom: string;
    email: string;
  };
  stagiaires: InterfaceStagiaire[]; // List of stagiaires
}