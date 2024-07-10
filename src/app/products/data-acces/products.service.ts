import { Injectable, inject } from '@angular/core';
import { BaseHttpService } from 'src/app/shared/data-access/base-http.service';
import { Observable, map } from 'rxjs';
import { Product } from 'src/app/shared/interfaces/product.interface';


const LIMIT= 5;
@Injectable()
export class ProductsService extends BaseHttpService {
  //(HttpClient): módulo en Angular que facilita la realización de solicitudes HTTP

  getProducts(page: number): Observable<Product[]>{
    return this.http.get<any[]>('https://fakestoreapi.com/products',  {
      headers: {
        "Access-Control-Allow-Origin":"*"
      },
      params: {
        limit: page * LIMIT,
      }
    }).pipe(

    );
  }
  getProduct(id: string): Observable<Product>{
    return this.http.get<Product>('https://fakestoreapi.com/products');

    }
  }
