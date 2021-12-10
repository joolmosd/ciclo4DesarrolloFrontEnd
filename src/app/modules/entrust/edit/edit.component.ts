import { Entrust } from './../../../Class Entities/entrust/entrust';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EntrustService } from 'src/app/Services/entrust.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private entrustService: EntrustService,
    private router: Router,
    private route: ActivatedRoute) { }

    fgValidacion = this.fb.group({
      description: ['', [Validators.required]],
      size: ['', [Validators.required]],
      type: ['', [Validators.required]],
      presentation: ['', [Validators.required]]
    });

    id: string=''

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"]
    this.buscarRegistro(this.id);
  }


  buscarRegistro(id: string){
    this.entrustService.getWithId(id).subscribe((data) => {
      console.log(data)
      this.fgValidacion.controls["description"].setValue(data.description)
      this.fgValidacion.controls["size"].setValue(data.size)
      this.fgValidacion.controls["type"].setValue(data.type)
      this.fgValidacion.controls["presentation"].setValue(data.presentation)
    })
  }

  edit(){
    let entrust = new Entrust();
    entrust.id = this.fgValidacion.controls["id"].value;
    entrust.description = this.fgValidacion.controls["description"].value;
    entrust.size = this.fgValidacion.controls["size"].value;
    entrust.type = this.fgValidacion.controls["type"].value;
    entrust.presentation = this.fgValidacion.controls["presentation"].value;
    
 
    this.entrustService.update(entrust).subscribe((data: Entrust)=> {
      Swal.fire('Editado Correctamente!', '', 'success')
      this.router.navigate(['/admin/get']);
    },
    (error: any) => {
      console.log(error)
      alert("Error en el envio");
    })
  }

}
