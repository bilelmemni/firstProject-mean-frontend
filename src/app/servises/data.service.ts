import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
  private url='http://127.0.0.1:3000/article/'


  create(data:any){
return this.http.post(this.url+'create',data)
  }

  getAll(){
    return this.http.get(this.url+'getall')
  }
  getById(id:any){
    return this.http.get(this.url+'getByID/'+id)
  }
  getArticlByIdAuthor(id:any){
    return this.http.get(this.url+'getByIDAuth/'+id)
  }

}
