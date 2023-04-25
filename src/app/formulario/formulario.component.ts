import { Component } from '@angular/core';
import {DateAdapter} from '@angular/material/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  agendarCita:FormGroup;
  constructor(private dateAdapter:DateAdapter<Date>){
    this.dateAdapter.setLocale('es-ES');
  }
  
}
