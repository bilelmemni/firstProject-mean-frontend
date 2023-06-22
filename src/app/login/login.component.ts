import { Component } from '@angular/core';
import { AuthService } from '../servises/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private auth:AuthService,private router:Router){}
  author={
    email:'',
    password:''
  }

  token:any;
  login(){

    this.auth.addlogine(this.author).subscribe(
      res=>{
        this.token=res;
        //{myToken:'jnzedjzj'}
        localStorage.setItem('token',this.token.myToken)
        this.router.navigate(['/home'])
      },err=>{
      console.log(err);
      
    }
    )
  }

}
