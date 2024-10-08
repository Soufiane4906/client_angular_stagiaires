import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { StagiairesComponent } from './stagiaires/stagiaires.component';
import { HomeComponent } from './home/home.component';
import { FilieresComponent } from './filieres/filieres.component';
import { EditerComponent } from './editer/editer.component';
import { AddStagiaireComponent } from './add-stagiaire/add-stagiaire.component';
import { AddFiliereComponent } from './add-filiere/add-filiere.component';
import { EditFiliereComponent } from './edit-filiere/edit-filiere.component';
import {FormsModule} from '@angular/forms'
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import {MatButtonModule} from '@angular/material/button';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import {MatDialogModule} from '@angular/material/dialog';
import { CardsComponent } from './cards/cards.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminTemplateComponent } from './admin-template/admin-template.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';
import { AddEncadrantComponent } from './add-encadrant/add-encadrant.component';
import { EncadrantsComponent } from './encadrants/encadrants.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AddProjetComponent } from './add-projet/add-projet.component';
import { ProjetsComponent } from './projets/projets.component';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StagiairesComponent,
    HomeComponent,
    FilieresComponent,
    EditerComponent,
    AddStagiaireComponent,
    AddFiliereComponent,
    EditFiliereComponent,
    UtilisateurComponent,
    LoginComponent,
    FooterComponent,
    CardsComponent,
    AdminTemplateComponent,
    AddEncadrantComponent,
    EncadrantsComponent,
    AddProjetComponent,
    ProjetsComponent,




  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatBadgeModule,
    MatIconModule,
    MatSnackBarModule,
    MatSelectModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
