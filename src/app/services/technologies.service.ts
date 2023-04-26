import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TechnologiesService {
  Base_URL: string = environment.URL;
  constructor(private http: HttpClient) { }

  getDatos(): Observable<any> {
    return this.http.get<any>(this.Base_URL);
  }

  // Base_URL: string = environment.URL;
  // private apiKey = '1';

  // constructor(private http: HttpClient) { }

  // getCocktails() {
  //   return this.http.get(`${this.Base_URL}?api_key=${this.apiKey}`);
  // }
}
