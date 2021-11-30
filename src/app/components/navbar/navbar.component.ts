import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/Class Entities/user/user';
import { SecurityService } from 'src/app/Services/security.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private securityService: SecurityService) { }

  activeSession?:boolean = false;
  subs: Subscription = new Subscription();

  ngOnInit(): void {

    this.subs = this.securityService.datosUsuarioSesion().subscribe((data: User) => {
      console.log(data)
        this.activeSession = data.isLoggedIn;
    })


  }

}
