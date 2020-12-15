import { Component, OnInit } from '@angular/core';
import { ProduitsService } from '../produits.service';
import { AuthentificationService } from '../authentification.service';
import { Router } from '@angular/router';
// import { Observable } from 'rxjs';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {

    public produits: any[] = new Array();
    public connected_user: string = '';
    
    constructor(private produitsService: ProduitsService, private authService: AuthentificationService,
    private router: Router) { }

    ngOnInit() {
        this.produitsService.getProduits().subscribe(produits => {
            this.produits = produits;
        
        });
        this.authService.get().subscribe(res => {
            if (res != undefined) this.connected_user = res;
        })
  }
    public identification(): Boolean {
        if (this.connected_user != '' ) return true;
    else return false;
  }

    

}
