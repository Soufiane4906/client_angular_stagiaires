import { Component, OnInit } from '@angular/core';
import { AddStagiaireServiceService } from '../services/add-stagiaire-service.service';
import { AuthenticationService } from '../services/authentication.service';
import { DeleteStagiaireService } from '../services/delete-stagiaire.service';
import { AddEncadrantServiceService } from '../services/add-encadrant-service.service';

@Component({
  selector: 'app-encadrants',
  templateUrl: './encadrants.component.html',
  styleUrls: ['./encadrants.component.css'],
})
export class EncadrantsComponent implements OnInit {
  List: any = [];
  searchText: any;
  searchSelect: any;

  p: number = 1;
  count: number = 5;

  pageSize = 0;
  parePage = 3;

  constructor(
    private data: AddEncadrantServiceService,
    private dataDelete: DeleteStagiaireService,
    public authservices: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.Get();
  }

  Get() {
    this.data.getAll().subscribe((result) => {
      this.List = result;
      console.log(result);
    });
  }

  DeleteEncadrant(id: number) {
    this.data.Deletemethod(id).subscribe(() => {
      this.List = this.List.filter((item: { id: number }) => item.id !== id);
      alert(' are you sure  you want to delete it');
      console.log('from delete');
    });
  }
}
