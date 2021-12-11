import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Entrust } from 'src/app/Class Entities/entrust/entrust';
import { EntrustService } from 'src/app/Services/entrust.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  entrust:Entrust = new Entrust();

  constructor(private fb: FormBuilder,
    private router: Router, private entrustService: EntrustService) { }

    fgValidacion = this.fb.group({
      description: ['', [Validators.required]],
      size: ['', [Validators.required]],
      type: ['', [Validators.required]],
      presentation: ['', [Validators.required]]
    });

  ngOnInit(): void {
  }

  registrarEncomienda() {

    this.entrust.description = this.fgValidacion.controls["description"].value;
    this.entrust.size = this.fgValidacion.controls["size"].value;
    this.entrust.type = this.fgValidacion.controls["type"].value;
    this.entrust.presentation = this.fgValidacion.controls["presentation"].value;

    
    this.entrustService.store(this.entrust).subscribe
      ((data) => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Registro Satisfactorio',
          showConfirmButton: false,
          timer: 1500
        }).then(() => {
          this.router.navigate(['/entrust/get']);
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

}
