import { Component, OnInit } from '@angular/core';
import { ApiPlacesService } from '../api-places.service';
import { AppComponent } from '../app.component'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {
 
  places;
  value;
  CurResDetail: any;
  showPage: boolean;
  constructor(private placesApi: ApiPlacesService,private PV:AppComponent,private route:ActivatedRoute) { }
  ngOnInit() {
    this.value=this.route.snapshot.paramMap.get('value'); 
    console.log(this.value+" places");
    this.placesApi.getPlaces(this.value).subscribe((data) => {
    console.log(data);
    this.places = data['results'];
    })
  }
  viewDetail(Restruant)
  {
    this.showPage =true;
    this.CurResDetail=Restruant;
    this.placesApi.getDetail(this.CurResDetail);
    console.log(this.CurResDetail.name+"placesssssss");
    
  }
  
}