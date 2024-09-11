import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddProjetService } from '../services/add-projet.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AddEncadrantServiceService } from '../services/add-encadrant-service.service';
import { AddStagiaireServiceService } from '../services/add-stagiaire-service.service';

@Component({
  selector: 'app-add-projet',
  templateUrl: './add-projet.component.html',
  styleUrls: ['./add-projet.component.css']
})
export class AddProjetComponent implements OnInit {
  List: any = [];
  encadrants: any[] = [];
  stagiaires: any[] = []; // List of stagiaires

  projet: any = {
    id: 0,
    titre: '',
    description: '',
    datedebut: '',
    datefin: '',
    etat: '',
    sheeturl: '',
    encadrant: {
      id: null,
    },
    stagiaires: [] // List of selected stagiaires
  };

  constructor(
    private projetService: AddProjetService,
    private router: Router,
    private snackBar: MatSnackBar,
    private encadrantService: AddEncadrantServiceService,
    private stagiaireService: AddStagiaireServiceService
  ) {}

  ngOnInit(): void {
    this.loadEncadrants();
    this.loadStagiaires(); // Load stagiaires
  }

  loadEncadrants() {
    this.encadrantService.getAll().subscribe((result: any[]) => {
      this.encadrants = result;
    });
  }

  loadStagiaires() {
    this.stagiaireService.getStagiaire().subscribe((result: any[]) => {
      this.stagiaires = result;
    });
  }

  postProject() {
    this.projetService.postProjet(this.projet).subscribe((item) => {
      this.List = [item, ...this.List];
      this.clearInput();
      this.snackBar.open('Projet ajouté avec succès!', 'Fermer', {
        duration: 3000,
      });
      this.router.navigate(['admin/projet']);
    });
  }

  clearInput() {
    this.projet = {
      id: 0,
      titre: '',
      description: '',
      datedebut: '',
      datefin: '',
      etat: '',
      sheeturl: '',
      encadrant: {
        id: null,
      },
      stagiaires: [] // Reset stagiaires selection
    };
  }
}
