import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../servises/auth.service';
import { DataService } from '../servises/data.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent {
  constructor(private act:ActivatedRoute, private auth:AuthService,private data:DataService){}
  id:any;
  author:any;
  articls:any;
  ngOnInit():void{
    this.id=this.act.snapshot.paramMap.get('id')// na9raw id eli fil author
    this.auth.getById(this.id).subscribe(
      res=>{
        this.author=res;  // 7ata data eli 3ana fil author lkol fi author:any
        console.log(this.author);
      },err=>{
        console.log(err);
        
      }
    );
    this.data.getArticlByIdAuthor(this.id).subscribe(
      res=>{
        this.articls=res;
        console.log(this.articls);
        
      },
      err=>{console.log(err);
      }
    )
  }


}
