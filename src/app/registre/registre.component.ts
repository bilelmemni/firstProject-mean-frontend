import { Component } from '@angular/core';
import { AuthService } from '../servises/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css']
})
export class RegistreComponent {
  constructor(private auth:AuthService,private router:Router){}
  validation=false;
  author={
    name:'',
    lastname:'',
    email:'',
    password:'',
    about:'',
  }
  image:any;
  select(e:any){
    this.image=e.target.files[0]
  }
  

add(){
  let fd=new FormData() //bech najmou n3adou image 3la 5ater manjmouch n3adiw image fost object nesta3mlou formdata
    fd.append('name',this.author.name)
    fd.append('lastname',this.author.lastname)
    fd.append('email',this.author.email)
    fd.append('password',this.author.password)
    fd.append('about',this.author.about)
    fd.append('iamge',this.image)

    this.auth.addregistre(fd).subscribe(
      res=>{
        this.router.navigate(['/login'])
      }
    );
  

}

}