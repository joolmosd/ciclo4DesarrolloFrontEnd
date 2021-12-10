import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/Class Entities/client/client';
import { ClientService } from 'src/app/Services/client.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private clientService: ClientService,
    private router: Router,
    private route: ActivatedRoute) { }

    fgValidacion = this.fb.group({
      identification: ['', [Validators.required]],
      name: ['', [Validators.required]],
      lastNames: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      country: ['', [Validators.required]],
      city: ['', [Validators.required]],
      departament: ['', [Validators.required]],
      address: ['', [Validators.required]]
  
    });
 
    identification: string=''

  ngOnInit(): void {
    this.identification = this.route.snapshot.params["id"]
    this.buscarRegistro(this.identification);
  }

  buscarRegistro(identification: string){
    this.clientService.getWithId(identification).subscribe((data) => {
      console.log(data)
      this.fgValidacion.controls["identification"].setValue(identification)
      this.fgValidacion.controls["name"].setValue(data.name)
      this.fgValidacion.controls["lastNames"].setValue(data.lastNames)
      this.fgValidacion.controls["email"].setValue(data.email)
      this.fgValidacion.controls["phone"].setValue(data.phone)
      this.fgValidacion.controls["country"].setValue(data.country)
      this.fgValidacion.controls["city"].setValue(data.city)
      this.fgValidacion.controls["departament"].setValue(data.departament)
      this.fgValidacion.controls["address"].setValue(data.address)
    })
  }

  edit(){
    let client = new Client();
    client.identification = this.fgValidacion.controls["identification"].value;
    client.name = this.fgValidacion.controls["name"].value;
    client.lastNames = this.fgValidacion.controls["lastNames"].value;
    client.email = this.fgValidacion.controls["email"].value;
    client.phone = this.fgValidacion.controls["phone"].value;
    client.country = this.fgValidacion.controls["country"].value;
    client.city = this.fgValidacion.controls["city"].value;
    client.departament = this.fgValidacion.controls["departament"].value;
    client.address = this.fgValidacion.controls["address"].value;
 
    this.clientService.update(client).subscribe((data: Client)=> {
      Swal.fire('Editado Correctamente!', '', 'success')
      this.router.navigate(['/admin/get']);
    },
    (error: any) => {
      console.log(error)
      alert("Error en el envio");
    })
  }

}
