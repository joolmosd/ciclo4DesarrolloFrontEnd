import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/Class Entities/client/client';
import { Entrust } from 'src/app/Class Entities/entrust/entrust';
import { Service } from 'src/app/Class Entities/service/service';
import { ClientService } from 'src/app/Services/client.service';
import { EntrustService } from 'src/app/Services/entrust.service';
import { ServiceService } from 'src/app/Services/service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  listadoClientes: Client[] = []
  listadoEncomiendas: Entrust[] = []

  constructor(private fb: FormBuilder,
    private serviceService: ServiceService,
    private router: Router,
    private route: ActivatedRoute,
    private clientService: ClientService, 
    private entrustService: EntrustService) { }

    fgValidacion = this.fb.group({
      date: ['', [Validators.required]],
      time: ['', [Validators.required]],
      value: ['', [Validators.required]],
      origin: ['', [Validators.required]],
      destiny: ['', [Validators.required]],
      entrust: ['', [Validators.required]],
  
    });

    id: string=''

  ngOnInit(): void {this.id = this.route.snapshot.params["id"]
  this.buscarRegistro(this.id);
  this.getAllClients();
  this.getAllEntrust();
  }


  buscarRegistro(id: string){
    this.serviceService.getWithId(id).subscribe((data) => {
      console.log(data)
      this.fgValidacion.controls["date"].setValue(data.date)
      this.fgValidacion.controls["time"].setValue(data.time)
      this.fgValidacion.controls["value"].setValue(data.value)
      this.fgValidacion.controls["origin"].setValue(data.origin)
      this.fgValidacion.controls["destiny"].setValue(data.destiny)
      this.fgValidacion.controls["entrust"].setValue(data.entrust)
    })
  }

  edit(){
    let service = new Service();
    service.date = this.fgValidacion.controls["date"].value;
    service.time = this.fgValidacion.controls["time"].value;
    service.value = this.fgValidacion.controls["value"].value;
    service.origin = this.fgValidacion.controls["origin"].value;
    service.destiny = this.fgValidacion.controls["destiny"].value;
    service.entrust = this.fgValidacion.controls["entrust"].value;
 
    this.serviceService.update(service).subscribe((data: Service)=> {
      Swal.fire('Editado Correctamente!', '', 'success')
      this.router.navigate(['/admin/get']);
    },
    (error: any) => {
      console.log(error)
      alert("Error en el envio");
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
