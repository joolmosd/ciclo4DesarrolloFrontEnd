import { User } from 'src/app/Class Entities/user/user';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user:User = new User();

  constructor(private fb: FormBuilder,
    private router: Router,private userService: UserService) { }


    fgValidacion = this.fb.group({
      names: ['', [Validators.required]],
      lastNames: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]]

    });

  ngOnInit(): void {
  }

  registrarUsusario(){
    this.user.nombre = this.fgValidacion.controls["names"].value;
    this.user.apellidos = this.fgValidacion.controls["lastNames"].value;
    this.user.correo = this.fgValidacion.controls["email"].value;
    this.user.telefono = this.fgValidacion.controls["phone"].value;
    
    this.userService.store(this.user).subscribe
    ((data)=>{
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Registro Satisfactorio',
        showConfirmButton: false,
        timer: 1500
      }).then(() =>{
        this.router.navigate(['/security/login']);
      })
    },
    (error)=>{
      Swal.fire({
        title: 'Error!',
        text: 'Error en el Registro',
        icon: 'error',
        confirmButtonText: 'Cool'
      })
    })
  }

}
