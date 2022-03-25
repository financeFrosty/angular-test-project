import { Injectable } from '@angular/core';
import { Product, products as PRODUCTS } from "./products";
import { Observable, of } from "rxjs";
import { MessagesService } from "./messages.service";

@Injectable({
  providedIn: 'root'
})
export class ProdservService {

  constructor(private messagesService: MessagesService) { }

  get_products(): Observable<Product[]>{
    const products = of(PRODUCTS);
    this.messagesService.add("Products service: fetched products");
    return products;
  }
}
