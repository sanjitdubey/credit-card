import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { User } from 'src/app/model/user';


@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css']
})
export class SearchComponentComponent implements OnInit {

  user:User=new User();
  @Output()
  searchData:EventEmitter<User>=new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  setUserData(){
    this.searchData.emit(this.user);

  }
  
}
