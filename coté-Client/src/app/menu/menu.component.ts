import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  private connected_user: string = '';

  constructor(private authService: AuthentificationService,
              private router: Router) {}

  ngOnInit() {
        this.authService.get().subscribe(res => {
            if (res != undefined) this.connected_user = res;
        });
	this.router.navigate(['/categories']);
  }

  private identification(): Boolean {
        if (this.connected_user != '' ) return true;
	else return false;
  }

  deconnexion() {
        this.authService.setConnectedUser('');
	this.router.navigate(['/categories']);
  }
}
