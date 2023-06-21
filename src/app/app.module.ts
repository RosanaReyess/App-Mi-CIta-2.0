import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule} from'@angular/common/http'


//componentes
import { AppComponent } from './app.component';
import { CrearCitasComponent } from './components/crear-citas/crear-citas.component';
import { ListarCitasComponent } from './components/listar-citas/listar-citas.component';


@NgModule({
  declarations: [
    AppComponent,
    CrearCitasComponent,
    ListarCitasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
