import { Client } from 'src/app/Class Entities/client/client';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Service } from 'src/app/Class Entities/service/service';
import { ServiceService } from 'src/app/Services/service.service';
import Swal from 'sweetalert2';
import { Entrust } from 'src/app/Class Entities/entrust/entrust';
import { ClientService } from 'src/app/Services/client.service';
import { EntrustService } from 'src/app/Services/entrust.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  service:Service = new Service();
  listadoClientes: Client[] = []
  listadoEncomiendas: Entrust[] = []

  constructor(private fb: FormBuilder,
    private router: Router, private serviceService: ServiceService,
    private clientService: ClientService, private entrustService: EntrustService) { }

    fgValidacion = this.fb.group({
      date: ['', [Validators.required]],
      time: ['', [Validators.required]],
      value: ['', [Validators.required]],
      origin: ['', [Validators.required]],
      destiny: ['', [Validators.required]],
      entrust: ['', [Validators.required]]
    });

  ngOnInit(): void {
    this.getAllClients();
    this.getAllEntrust();
  }

  registrarServicio() {

    this.service.date = this.fgValidacion.controls["date"].value;
    this.service.time = this.fgValidacion.controls["time"].value;
    this.service.value = this.fgValidacion.controls["value"].value;
    this.service.origin = this.fgValidacion.controls["origin"].value;
    this.service.destiny = this.fgValidacion.controls["destiny"].value;
    this.service.entrust = this.fgValidacion.controls["entrust"].value;

    console.log(this.service)
    
    this.serviceService.store(this.service).subscribe
      ((data) => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Registro Satisfactorio',
          showConfirmButton: false,
          timer: 1500
        }).then(() => {
          this.router.navigate(['/service/get']);
        })
      },
        (error) => {
          Swal.fire({
            title: 'Error!',
            text: 'Error en el Registro',
            icon: 'error',
            confirmButtonText: 'Accept'
          })
        })
  }

  getAllClients(){
    this.clientService.getAll().subscribe
    ((data:Client[]) =>{
      console.log(data);
      this.listadoClientes = data
    })
  }

  getAllEntrust(){
    this.entrustService.getAll().subscribe
    ((data:Entrust[]) =>{
      console.log(data);
      this.listadoEncomiendas = data
    })
  }

}

