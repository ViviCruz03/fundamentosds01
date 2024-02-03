import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  //propiedad para almacear la data(post)
  data:any[] = [];
  constructor(private dataService:DataService){}
    ngOnInit(): void{
      this.dataService.getPosts().subscribe((posts:any['']) =>{
      this.data =posts;
      });
    }

}
