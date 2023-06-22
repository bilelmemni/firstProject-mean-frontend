import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../servises/data.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  constructor(private act:ActivatedRoute,private data:DataService){}


  id:any;
  article:any;
  ngOnInit():void{
    this.id=this.act.snapshot.paramMap.get('id');
    this.data.getById(this.id).subscribe(
      res=>{
        this.article=res
        console.log(this.article);
        
      },
      err=>{}
    )

  }

}
