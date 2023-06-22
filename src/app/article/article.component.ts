import { Component } from '@angular/core';
import { DataService } from '../servises/data.service';
import { Router } from '@angular/router';
import { AuthService } from '../servises/auth.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  constructor(private data:DataService,private router:Router,private auth:AuthService){ }

  article:any={
    title:'',
    content:'',
    tags:[],
    description:'',
  }
  image:any;
  select(e:any){
    this.image=e.target.files[0]
  }
  tag:any;
  create(){
    let fd=new FormData() //bech najmou n3adou image 3la 5ater manjmouch n3adiw image fost object nesta3mlou formdata
    fd.append('title',this.article.title)
    fd.append('content',this.article.content)
    fd.append('description',this.article.description)
    fd.append('tags',this.article.tags.toString())
    fd.append('image',this.image)
    fd.append('idAuthor',this.auth.getAuthorDataFromToken()._id)
    
    this.data.create(fd).subscribe(
      res=>{
       this.article=res;
       console.log(this.article);
       
        
        this.router.navigate(['/home'])
      },err=>{
        console.log(err);
        
      }
    )

  }

}
