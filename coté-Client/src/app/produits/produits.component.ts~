import { Component, OnInit } from '@angular/core';
import { ProduitsService } from '../produits.service';
// import { Observable } from 'rxjs';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {

    private produits: Object[] = new Array();
    
    constructor(private produitsService: ProduitsService) { }

    ngOnInit() {
        this.produitsService.getProduits().subscribe(produits => {
            this.produits = produits;
        });
    }

}
