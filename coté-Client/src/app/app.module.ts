import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';	

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* import { BsDropdownModule } from 'ngx-bootstrap/dropdown';*/
/* import { TooltipModule } from 'ngx-bootstrap/tooltip';*/
/* import { ModalModule } from 'ngx-bootstrap/modal'; */
/* import { CollapseModule } from 'ngx-bootstrap/collapse'; */

import { AuthentificationService } from './authentification.service';
import { ProduitsService } from './produits.service';

import { ConnexionComponent } from './connexion/connexion.component';
import { ProduitsComponent } from './produits/produits.component';
import { CategoriesComponent } from './categories/categories.component';
import { MenuComponent } from './menu/menu.component';
import { InscriptionComponent } from './inscription/inscription.component'

@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    ProduitsComponent,
    CategoriesComponent,
    MenuComponent,
    InscriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthentificationService, ProduitsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
