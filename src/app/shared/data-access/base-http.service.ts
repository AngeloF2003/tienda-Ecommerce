import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BaseHttpService {
  //(HttpClient): módulo en Angular que facilita la realización de solicitudes HTTP

   http = inject(HttpClient);
   apiUrl = 'environment.API_URL';



}
