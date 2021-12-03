import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Class Entities/user/user';
import { UserService } from 'src/app/Services/user.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {

  constructor(private userService: UserService) { }

  listado: User[] = []

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.userService.getAll().subscribe((data: User[]) => {
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
        this.userService.delete(id).subscribe((data: any) => {
          Swal.fire('¡Eliminado correctamente!', '', 'success')
          this.getAll();
        })
      }
    })
  }



}
