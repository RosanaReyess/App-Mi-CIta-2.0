import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Citas } from 'src/app/models/citas';
import { CitaService } from 'src/app/services/cita.service';

@Component({
  selector: 'app-listar-citas',
  templateUrl: './listar-citas.component.html',
  styleUrls: ['./listar-citas.component.css']
})
export class ListarCitasComponent implements OnInit {
  listCitas: Citas[] = [];

  constructor(private _citaService: CitaService, 
    private toastr: ToastrService,) {}

  ngOnInit(): void {
    this.obtenerCitas();
  }

  obtenerCitas() {
    this._citaService.getCitas().subscribe(
      (data) => {
        console.log(data);
        this.listCitas = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  confirmarEliminacion(id: any) {
    const confirmar = window.confirm('¿Está seguro de eliminar la cita?');
    if (confirmar) {
      this._citaService.eliminarCita(id).subscribe(
        (data) => {
          this.toastr.error('La cita ha sido eliminada con éxito!', 'CITA ELIMINADA');
          this.obtenerCitas();
        },
        (error) => {
          this.toastr.error('Ha ocurrido un error', 'ERROR');
        }
      );
    }
  }
}
