import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject, BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  private connected_user: string = '';
  private user:Subject<any> = new BehaviorSubject<any>(undefined);
  private baseURL: string = "http://localhost:8888/";

  constructor(private http: HttpClient) { }
  
  get(){ return this.user.asObservable(); }

  getConnectedUser() {
      return this.connected_user;
  }
  setConnectedUser(data: any) {
      this.user.next(data);
      this.connected_user = data;
  }

  verificationConnexion(identifiants): Observable<any> {
      return this.http.post(this.baseURL+'membre/connexion', JSON.stringify(identifiants), httpOptions);
  }
}
