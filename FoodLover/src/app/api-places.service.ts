import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppComponent } from './app.component'
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class ApiPlacesService {
  API_KEY:string ="AIzaSyCMOROAoinPqLpMBxqJPN8xKjpckbvF_uc";
  detail: any;
  constructor(private httpClient: HttpClient) { }

  public getDetail (detail: any)
  {
    this.detail = detail;
  }

  public getPlaces(value:string){
    console.log("logging"+value);
    return this.httpClient.get<Config>('places/'+value);
  }
  
}
export interface Config {
  heroesUrl: string;
  textfile: string;
}