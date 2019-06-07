import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from './model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  userData:User ;
  ngOnInit(){}

  getUser(e:User){ 
    this.userData=e;
    console.log(this.userData)   
  }
}
