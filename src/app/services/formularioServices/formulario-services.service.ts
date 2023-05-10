import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FormularioServicesService {
private url: string = ''
  constructor(private http: HttpClientModule) { }
  
  obtenerMedicos():Observable

}
