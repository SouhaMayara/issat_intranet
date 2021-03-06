import { Component, OnInit } from '@angular/core';
import {user} from 'node/models/user';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-liste-presence',
  templateUrl: './liste-presence.component.html',
  styleUrls: ['./liste-presence.component.css']
})
export class ListePresenceComponent implements OnInit {
  today= new Date();
  jstoday = '';
  time = '';
  test = '';
  constructor() { 
    this.jstoday = formatDate(this.today, 'dd-MM-yyyy', 'en-UTC');
    this.time = formatDate(this.today, ' hh:mm ', 'en-UTC');
    if(this.time >= ' 8:30 ' && this.time <= ' 10:00 ' )
        this.test ='S1';
    else
        this.test ='S2';


  }
  absent;
  User
  users = [
    {"id":0,"firstname":"Licensed Frozen Hat","lastname":"Incidunt et magni","price":"170.00","quantity":false},
    {"id":1,"firstname":"Rustic Concrete Chicken","lastname":"Sint libero mollitia","price":"302.00","quantity":false},
    {"id":2,"firstname":"Fantastic Metal Computer","lastname":"In consequuntur cupiditat","price":"279.00","quantity":false},
    {"id":3,"firstname":"Refined Concrete Chair","lastname":"Saepe nemo praesentium","price":"760.00","quantity":false},
    {"id":4,"firstname":"Refined Concrete Chair","lastname":"Saepe nemo praesentium","price":"760.00","quantity":false},
    {"id":5,"firstname":"Refined Concrete Chair","lastname":"Saepe nemo praesentium","price":"760.00","quantity":false},
    {"id":6,"firstname":"Refined Concrete Chair","lastname":"Saepe nemo praesentium","price":"760.00","quantity":false},
    {"id":7,"firstname":"Refined Concrete Chair","lastname":"Saepe nemo praesentium","price":"760.00","quantity":false},
    {"id":8,"firstname":"Refined Concrete Chair","lastname":"Saepe nemo praesentium","price":"760.00","quantity":false}
];
  ngOnInit(): void {
    // this.User.getAll()
    // .subscribe(res=>{
    //     console.log(res);
    //     this.users = res;
    // });
    console.log('today: ',this.test);
    console.log('jstoday: ',this.jstoday);
  }
  ajouter(id,test){
    console.log(this);
      this.users[id].quantity = test;
      console.log(this.users[id]);

      console.log(test);
    
  }

}
