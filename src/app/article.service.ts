import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
userId:any;
id;
  constructor(private http: HttpClient) { }
  getArticle(id) {
    return this.http.get('http://localhost:3001/article/byUser/'+this.id);
  }

  getOneArticle(id){
    return this.http.get('http://localhost:3001/article/byId/'+id);
  }

  decodeToken() {
    if (localStorage.getItem('token')) {
      const token = localStorage.getItem('token');
      console.log(jwt_decode(token));
      this.userId = jwt_decode(token).data._id;
      console.log(this.userId);
    }
  }

}
