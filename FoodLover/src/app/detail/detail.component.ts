import { Component, OnInit } from '@angular/core';
import { ApiPlacesService } from '../api-places.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class detailComponent implements OnInit {
  CurResDetail: any;
  constructor(private pApi: ApiPlacesService) { }
  ngOnInit() {
    
    this.CurResDetail = this.pApi.detail; 

    console.log(this.CurResDetail.name+"namenamename");
    console.log(this.CurResDetail.photo_reference);
    console.log(this.CurResDetail.rating);
    
  }
}