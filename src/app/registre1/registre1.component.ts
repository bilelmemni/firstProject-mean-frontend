import { Component } from '@angular/core';
import { AuthService } from '../servises/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registre1',
  templateUrl: './registre1.component.html',
  styleUrls: ['./registre1.component.css']
})
export class Registre1Component {
  constructor(private auth:AuthService,private router:Router){}
  validation=false
  registre:FormGroup=new FormGroup({
    name:new FormControl("",[Validators.required]),
    lastname:new FormControl("",[Validators.required]),
    email:new FormControl("",[Validators.required,Validators.email]),
    password:new FormControl("",[Validators.required,Validators.minLength(5)]),
    about:new FormControl("",[Validators.required]),
  })

  image:any;
  select(e:any){
    this.image=e.target.files[0]
  }
add(){
  let fd=new FormData()
    fd.append('name',this.registre.value.name)
    fd.append('lastname',this.registre.value.lastname)
    fd.append('email',this.registre.value.email)
    fd.append('password',this.registre.value.password)
    fd.append('about',this.registre.value.about)
    fd.append('iamge',this.image)
this.validation=true
if (this.registre.invalid) {
  return
}
console.log(this.registre.value)
this.auth.addregistre(fd).subscribe(
  res=>{
    console.log(res)
    this.router.navigate(['/login'])
  },err=>{
    console.log(err)
  }
)
}

}
