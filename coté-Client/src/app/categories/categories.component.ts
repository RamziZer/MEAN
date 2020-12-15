import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../authentification.service';
import { ProduitsService } from '../produits.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  private connexion: boolean = false;
  private categories: String[] = new Array();

  constructor(private authService: AuthentificationService,
              private produitsService: ProduitsService) { }

  ngOnInit() {
    this.authService.get().subscribe(res => {console.log("MAJ avec "+res);
         if (res != undefined && res != '') this.connexion = true;
    });
    this.produitsService.getCategories().subscribe(categories => {
         this.categories = categories;
    });
  }
}
