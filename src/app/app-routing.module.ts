import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArticleComponent } from './article/article.component';
import { DetailComponent } from './detail/detail.component';
import { AboutComponent } from './about/about.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { AuthorComponent } from './author/author.component';
import { LoginComponent } from './login/login.component';
import { RegistreComponent } from './registre/registre.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { Registre1Component } from './registre1/registre1.component';
import { AuthGuard } from './servises/auth.guard';

const routes: Routes = [
  {path:'', redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'create',canActivate:[AuthGuard],component:ArticleComponent},
  {path:'article/:id',component:DetailComponent},
  {path:'about',component:AboutComponent},
  {path:'privacy',component:PrivacyComponent},
  {path:'author/:id',component:AuthorComponent},
  {path:'login',component:LoginComponent},
  {path:'registre',component:RegistreComponent},
  {path:'registre1',component:Registre1Component},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
