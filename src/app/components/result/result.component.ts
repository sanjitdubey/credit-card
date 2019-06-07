import { Component, OnInit, Input, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit{
  d: User[];



@Input('userData')
set userData(value:User) {
 this.d=this.users;
    console.log(value)
    if(value){
      this.users=this.users.filter(data=>{
        let fn = new RegExp(value.firstName, 'i');
        let ln = new RegExp(value.lastName, 'i');
        return(fn.exec(data.firstName)&&ln.exec(data.lastName));
      })
    }
    else this.users=this.d;
    
    
  

}


  title = 'credit-card-search';
  users : User[]=[];
  headings:string[]=['CardNumber','Name','CreditLimit','AvailableLimit','CardType','ExpiryDate'];
  constructor(private userService : UserService){}
  terms=["creditCardNumber","firstName","creditLimit","availableLimit","cardType","expiryDate"];
  ngOnInit(){
    this.users=this.userService.getUsers();

  }
}


