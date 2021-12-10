import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/Class Entities/user/user';
import { UserService } from 'src/app/Services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute) { }

    fgValidacion = this.fb.group({
      id: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      apellidos: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
      correo: ['', [Validators.required, Validators.email]],
    });
 
    id: string=''

  ngOnInit(): void {
    // se captura el id desde la URL
    this.id = this.route.snapshot.params["id"]
    this.buscarRegistro(this.id);
  }


  buscarRegistro(id: string){
    this.userService.getWithId(id).subscribe((data) => {
      console.log(data)
      this.fgValidacion.controls["id"].setValue(id)
      this.fgValidacion.controls["nombre"].setValue(data.names)
      this.fgValidacion.controls["apellidos"].setValue(data.lastNames)
      this.fgValidacion.controls["correo"].setValue(data.email)
      this.fgValidacion.controls["telefono"].setValue(data.phone)
    })
  }

  edit(){
    let user = new User();
    user.id = this.fgValidacion.controls["id"].value;
    user.nombre = this.fgValidacion.controls["nombre"].value;
    user.apellidos = this.fgValidacion.controls["apellidos"].value;
    user.correo = this.fgValidacion.controls["correo"].value;
    user.telefono = this.fgValidacion.controls["telefono"].value;
 
    this.userService.update(user).subscribe((data: User)=> {
      Swal.fire('Editado Correctamente!', '', 'success')
      this.router.navigate(['/admin/get']);
    },
    (error: any) => {
      console.log(error)
      alert("Error en el envio");
    })
  }



}
