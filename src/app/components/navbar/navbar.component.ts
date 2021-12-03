import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/Class Entities/user/user';
import { SecurityService } from 'src/app/Services/security.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private securityService: SecurityService,private  userService: UserService) { }

  activeSession?:boolean = false;
  subs: Subscription = new Subscription();
  userId?:any
  user?: User;
  userName?: string

  ngOnInit(): void {

    this.subs = this.securityService.datosUsuarioSesion().subscribe((data) => {
      this.userId = data.id;
      this.activeSession = data.isLoggedIn;
      this.getUserById();
    })
    

  }

  getUserById(){

    console.log("ID del USUSARIO ---> : " + this.userId)
    this.userService.getWithId(this.userId).subscribe
    ((data) =>{
      this.userName = data.names
    },
    (error) =>{
      console.log(error);
    })
   }


}
