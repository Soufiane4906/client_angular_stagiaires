import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddEncadrantServiceService } from '../services/add-encadrant-service.service';
import { AddfiliereService } from '../services/addfiliere.service';
import { HttpClient } from '@angular/common/http'; // Import HttpClient for Google Sheets API
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-encadrant',
  templateUrl: './add-encadrant.component.html',
  styleUrls: ['./add-encadrant.component.css']
})
export class AddEncadrantComponent implements OnInit {
  List: any = []; // Pour stocker la liste des filières

  encadrant: any = {
    id: 0,
    nom: '',
    prenom: '',
    telephone: '',
    email: '',

  };

  constructor(
    private dataADD: AddEncadrantServiceService,
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
      this.encadrant.photo = file;
    }
  }

// Save to Database Only
PostSta() {
  this.dataADD.PostEncadrant(this.encadrant).subscribe((item) => {
    this.List = [item, ...this.List];
    this.EmptyInput();
    this.snackBar.open('Encadrant ajouté avec succès!', 'Fermer', {
      duration: 3000, // Duration in milliseconds
    });
    this.router.navigate(['admin/encadrant']);
  });
}

// Save to Database and Google Sheets
PostStaToGoogleSheet() {
  // Step 1: Save to Database
  this.dataADD.PostEncadrant(this.encadrant).subscribe((item) => {
    // Step 2: Save to Google Sheets after DB save is successful
    const googleSheetData = {
      id: this.encadrant.id,
      nom: this.encadrant.nom,
      prenom: this.encadrant.prenom,
      email: this.encadrant.email,
      telephone: this.encadrant.telephone,
      filiere: this.encadrant.filiere ? this.encadrant.filiere.filiere : '',
      photo: this.encadrant.photo ? this.encadrant.photo.name : '',
    };

    this.http.post('https://your-backend-api.com/save-to-sheet', googleSheetData)
      .subscribe(
        (response) => {
          console.log('Successfully saved to Google Sheets!', response);
          this.snackBar.open('Encadrant ajouté et sauvegardé dans Google Sheets avec succès!', 'Fermer', {
            duration: 3000, // Duration in milliseconds
          });
          this.EmptyInput();
          this.router.navigate(['admin/encadrant']);
        },
        (error) => {
          console.error('Error saving to Google Sheets', error);
        }
      );
  });
}


  EmptyInput() {
    this.encadrant = {
      id: '',
      nom: '',
      prenom: '',
      telephone: '',
      email: '',

    };
  }
}
