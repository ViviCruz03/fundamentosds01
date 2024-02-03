import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  //Propiedad para que se almacene la dataPhotos
  data:any[] = [];
  constructor(private dataService:DataService) { }
    ngOnInit(): void {
    this.dataService.getPhotos().subscribe((photos:any['']) =>{
      this.data =photos;
    });
  }

}
