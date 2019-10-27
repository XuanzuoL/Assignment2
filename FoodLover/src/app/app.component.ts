import { Component, Input } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { ApiPlacesService } from './api-places.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'service-demo';
  value ="";
  places="";
  onEnter(value:string){this.value = value}

  searchNow(value:string){
    console.log(this.value);
  }
}