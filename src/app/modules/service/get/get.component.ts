import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/Class Entities/service/service';
import { ClientService } from 'src/app/Services/client.service';
import { EntrustService } from 'src/app/Services/entrust.service';
import { ServiceService } from 'src/app/Services/service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {

  constructor(private serviceService: ServiceService) { }

  listado: Service[] = []

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.serviceService.getAll().subscribe((data: Service[]) => {
      this.listado = data
      console.log(data)
    })
  }

  delete(id?: any){
    console.log(id)
    Swal.fire({
      title: '¿Esta seguro de eliminar este registro?',
      showCancelButton: true,
      confirmButtonText: 'Acpetar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.serviceService.delete(id).subscribe((data: any) => {
          Swal.fire('¡Eliminado correctamente!', '', 'success')
          this.getAll();
        })
      }
    })
  }

}
