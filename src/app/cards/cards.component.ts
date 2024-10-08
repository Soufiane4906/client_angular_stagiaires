import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddStagiaireServiceService } from '../services/add-stagiaire-service.service';
import { AddfiliereService } from '../services/addfiliere.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
  animations: [
    trigger('cardHover', [
      transition('void => *', [
        style({ transform: 'scale(1)' }),
        animate('300ms ease-in', style({ transform: 'scale(1.05)' })),
      ]),
      transition('* => void', [
        animate('300ms ease-out', style({ transform: 'scale(1)' })),
      ]),
    ]),
  ],
})
export class CardsComponent implements OnInit {
  constructor(
    private router: Router,
    public stagiaire: AddStagiaireServiceService,
    public filiere: AddfiliereService
  ) {}

  niveauStudentsN: number = 5;
  usersN: number = 3;
  projectN: number = 3;
  List: any = [];
  ListF: any = [];

  ngOnInit(): void {
    this.getData();
    this.getDataFiliere();
  }

  getData() {
    this.stagiaire.getStagiaire().subscribe((result: any) => {
      this.List = result;
    });
  }

  get totalF(): Number {
    return this.ListF.length;
  }

  get total(): Number {
    return this.List.length;
  }

  getDataFiliere() {
    this.filiere.Get().subscribe((result: any) => {
      this.ListF = result;
    });
  }

  event() {
    this.router.navigate(['admin/stagiaire']);
  }

  event1() {
    this.router.navigate(['admin/filieres']);
  }

  event2() {
    this.router.navigate(['admin/filieres']);
  }
  event4() {
    this.router.navigate(['admin/filieres']);
  }

  event3() {
    this.router.navigate(['utilisateur']);
  }
}
