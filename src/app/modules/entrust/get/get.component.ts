import { Component, OnInit } from '@angular/core';
import { Entrust } from 'src/app/Class Entities/entrust/entrust';
import { EntrustService } from 'src/app/Services/entrust.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {

  constructor(private entrustService: EntrustService) { }

  listado: Entrust[] = []

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.entrustService.getAll().subscribe((data: Entrust[]) => {
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
        this.entrustService.delete(id).subscribe((data: any) => {
          Swal.fire('¡Eliminado correctamente!', '', 'success')
          this.getAll();
        })
      }
    })
  }

}
