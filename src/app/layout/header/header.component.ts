import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servises/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(public auth:AuthService, private router:Router){}
  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login'])

  }

}
