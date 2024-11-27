import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:5000/api'; // URL de l'API Flask

  constructor(private http: HttpClient) {}

  // Méthode pour récupérer des données de Flask
  getData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/data`);
  }
}
