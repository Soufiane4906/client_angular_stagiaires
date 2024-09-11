import { Component, OnInit } from '@angular/core';
import { AddProjetService } from '../services/add-projet.service';
import { InterfaceProjet } from '../models/interface-projet';

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.css']
})
export class ProjetsComponent implements OnInit {
  apiProjects: InterfaceProjet[] = [];
  staticProjects: InterfaceProjet[] = [
 
  ];
  searchText: string = '';
  currentPage: number = 1;
  pageSize: number = 5;

  constructor(private projetService: AddProjetService) { }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects() {
    this.projetService.getAllProjets().subscribe((projects) => {
      this.apiProjects = projects;
      console.log(projects);

    });
  }

  deleteProjet(id: number) {
    this.projetService.deleteProjet(id).subscribe(() => {
      this.apiProjects = this.apiProjects.filter(p => p.id !== id);
      alert('Le projet a été supprimé avec succès');
    });
  }
}
