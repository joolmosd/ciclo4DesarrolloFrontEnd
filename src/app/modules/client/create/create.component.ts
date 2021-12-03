import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Client } from 'src/app/Class Entities/client/client';
import { ClientService } from 'src/app/Services/client.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  client: Client = new Client();
  constructor(private fb: FormBuilder,
    private router: Router, private clientService: ClientService) { }

  fgValidacion = this.fb.group({
    identification: ['', [Validators.required]],
    names: ['', [Validators.required]],
    lastNames: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required]],
    country: ['', [Validators.required]],
    city: ['', [Validators.required]],
    departament: ['', [Validators.required]],
    address: ['', [Validators.required]]

  });

  ngOnInit(): void {
  }


  registrarCliente() {

    this.client.identification = this.fgValidacion.controls["identification"].value;
    this.client.name = this.fgValidacion.controls["names"].value;
    this.client.lastNames = this.fgValidacion.controls["lastNames"].value;
    this.client.phone = this.fgValidacion.controls["phone"].value;
    this.client.email = this.fgValidacion.controls["email"].value;
    this.client.country = this.fgValidacion.controls["country"].value;
    this.client.city = this.fgValidacion.controls["city"].value;
    this.client.departament = this.fgValidacion.controls["departament"].value;
    this.client.address = this.fgValidacion.controls["address"].value;

    
    this.clientService.store(this.client).subscribe
      ((data) => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Registro Satisfactorio',
          showConfirmButton: false,
          timer: 1500
        }).then(() => {
          this.router.navigate(['/client/get']);
        })
      },
        (error) => {
          Swal.fire({
            title: 'Error!',
            text: 'Error en el Registro',
            icon: 'error',
            confirmButtonText: 'Cool'
          })
        })
  }

}
