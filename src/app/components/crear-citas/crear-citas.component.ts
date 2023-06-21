import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Citas } from 'src/app/models/citas';
import { CitaService } from 'src/app/services/cita.service';

@Component({
  selector: 'app-crear-citas',
  templateUrl: './crear-citas.component.html',
  styleUrls: ['./crear-citas.component.css']
})
export class CrearCitasComponent implements OnInit {

  citaForm:  FormGroup;
  titulo = "AGENDAR CITAS";
  id: string | null;
  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _citaService: CitaService,
              private aRouter: ActivatedRoute){
    this.citaForm = this.fb.group({
      nombre:['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      numeroTelefono:['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      fechaCita:['', Validators.required],
      identificacion:['', [Validators.required, Validators.minLength(7), Validators.maxLength(10)]]
    })
    this.id = this.aRouter.snapshot.paramMap.get('id')

  }
  ngOnInit(): void {
    this.esEditar();
  }

  agendarCita(){
  
    const CITA: Citas = {
      nombre: this.citaForm.get('nombre')?.value,
      numeroTelefono: this.citaForm.get('numeroTelefono')?.value,
      fechaCita: this.citaForm.get('fechaCita')?.value,
      identificacion: this.citaForm.get('identificacion')?.value
    }
    if(this.id !== null){
      //editamos las citas
      this._citaService.editarCita(this.id, CITA).subscribe(data => {
        this.toastr.info('Su cita fue actualizada con éxito', 'CITA ACTUALIZADA');
        this.router.navigate(['/'])
      }, error => {
        this.toastr.error('Ha ocurrido un error', 'ERROR')
        this.citaForm.reset()
      })
    }else{
      //argregamos cita
      this._citaService.guardarCita(CITA).subscribe(data =>{
        this.toastr.success('Su cita fue regristada con éxito', 'CITA REGISTRADA');
        this.router.navigate(['/'])
      },error => {
        this.toastr.error('Ha ocurrido un error', 'ERROR')
        this.citaForm.reset()
      })
    }


    
    

  }

  esEditar(){
    if(this.id !== null){
      this.titulo = 'Editar cita' ;
      this._citaService.obtenerCita(this.id).subscribe(data => {
        this.citaForm.setValue({
          nombre: data.nombre,
          numeroTelefono:data.numeroTelefono,
          fechaCita:data.fechaCita,
          identificacion:data.identificacion})
      })
    }
  }



}
