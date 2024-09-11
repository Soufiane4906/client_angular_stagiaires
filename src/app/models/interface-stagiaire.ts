export interface InterfaceStagiaire {
    id: number;
    nom: String;
    prenom: String;
    email: String;
    telephone: String;

    filiere: {
      id: any;
    };
    photo: any;
  }