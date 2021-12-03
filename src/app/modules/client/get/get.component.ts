import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/Class Entities/client/client';
import { ClientService } from 'src/app/Services/client.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {

  constructor(private clientService: ClientService) { }

  listado: Client[] = []

  ngOnInit(): void {
    this.getAll();
  }


  getAll(){
    this.clientService.getAll().subscribe((data: Client[]) => {
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
        this.clientService.delete(id).subscribe((data: any) => {
          Swal.fire('¡Eliminado correctamente!', '', 'success')
          this.getAll();
        })
      }
    })
  }

}
