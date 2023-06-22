import { Component } from '@angular/core';
import { DataService } from 'src/app/servises/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  constructor(private data:DataService){}
  article:any;

  ngOnInit():void{
    this.data.getAll().subscribe(
      res=>{
        this.article=res
      },err=>{
        console.log(err);
        
      }
    )
  }

}
