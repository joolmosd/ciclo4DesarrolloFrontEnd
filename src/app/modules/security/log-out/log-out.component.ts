import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SecurityService } from 'src/app/Services/security.service';

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.css']
})
export class LogOutComponent implements OnInit {

  constructor(private securityService: SecurityService,
    private router: Router) { }

  ngOnInit(): void {
    this.securityService.eliminarSesion();
    this.router.navigate(['/security/login']);
  }

}
