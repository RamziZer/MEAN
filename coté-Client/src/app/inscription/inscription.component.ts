import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { AuthentificationService } from '../authentification.service';

@Component({
    selector: 'app-inscription',
    templateUrl: './inscription.component.html',
    styleUrls: ['./inscription.component.css']
})




export class InscriptionComponent implements OnInit {


    membres = { "nom": "", "prenom": "", "email": "", "password": "" };
    constructor (private authService: AuthentificationService, private router: Router) { }

  ngOnInit() {

  }

    onSubmit(form: NgForm) {
        console.log(form.value.nom);
        console.log(this.membres.email);
        this.authService.verificationInscription(this.membres);
        this.router.navigate(['/produits']);

}

}
