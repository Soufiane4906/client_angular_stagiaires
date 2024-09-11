import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddStagiaireServiceService } from '../services/add-stagiaire-service.service';
import { AddfiliereService } from '../services/addfiliere.service';
import { HttpClient } from '@angular/common/http'; // Import HttpClient for Google Sheets API
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-stagiaire',
  templateUrl: './add-stagiaire.component.html',
  styleUrls: ['./add-stagiaire.component.css'],
})
export class AddStagiaireComponent implements OnInit {
  List: any = []; // Pour stocker la liste des filières

  stagiaire: any = {
    id: 0,
    nom: '',
    prenom: '',
    telephone: '',
    email: '',
    filiere: null, // L'objet complet de la filière sera ici
    photo: '',
  };

  constructor(
    private dataADD: AddStagiaireServiceService,
    private router: Router,
    private snackBar: MatSnackBar, // Inject MatSnackBar

    private dataF: AddfiliereService, // Injecter le service pour les filières
    private http: HttpClient // HttpClient for Google Sheets API
  ) {}

  ngOnInit(): void {
    this.GetFiliere(); // Récupérer la liste des filières au chargement
  }

  GetFiliere() {
    this.dataF.Get().subscribe((result) => {
      this.List = result;
    });
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.stagiaire.photo = file;
    }
  }

  // Save to Database Only
  PostSta() {
    this.dataADD.PostStagiaire(this.stagiaire).subscribe((item) => {
      this.List = [item, ...this.List];
      this.EmptyInput();
      this.snackBar.open('Encadrant ajouté avec succès!', 'Fermer', {
        duration: 3000, // Duration in milliseconds
      });
      this.router.navigate(['admin/stagiaire']);
    });
  }

  // Save to Database and Google Sheets
  PostStaToGoogleSheet() {
    // Step 1: Save to Database
    this.dataADD.PostStagiaire(this.stagiaire).subscribe((item) => {
      // Step 2: Save to Google Sheets after DB save is successful
      const googleSheetData = {
        id: this.stagiaire.id,
        nom: this.stagiaire.nom,
        prenom: this.stagiaire.prenom,
        email: this.stagiaire.email,
        telephone: this.stagiaire.telephone,
        filiere: this.stagiaire.filiere ? this.stagiaire.filiere.filiere : '',
        photo: this.stagiaire.photo.name,
      };

      // HTTP request to the backend API that interacts with Google Sheets
      this.http.post('https://your-backend-api.com/save-to-sheet', googleSheetData)
        .subscribe(
          (response) => {
            console.log('Successfully saved to Google Sheets!', response);
            this.EmptyInput();
            this.router.navigate(['admin/stagiaire']);
          },
          (error) => {
            console.error('Error saving to Google Sheets', error);
          }
        );
    });
  }

  EmptyInput() {
    this.stagiaire = {
      id: '',
      nom: '',
      prenom: '',
      telephone: '',
      email: '',
      filiere: null,
      photo: '',
    };
  }
}
