import { Component, OnInit } from '@angular/core';
import { products, Product } from "../products";
import { ProdservService } from "../prodserv.service";
import { MessagesService } from "../messages.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private prodServ: ProdservService, private messagesService: MessagesService) { }

  products:Product[] = [];
  selectedProd?: Product;

  getProducts(): void {
    this.prodServ.get_products()
      .subscribe(products => this.products = products)
  }

  onSelect(prod: Product){
    this.selectedProd = prod;
    this.messagesService.add(`Products component: adding product: ${this.selectedProd.name}`);
  }

  ngOnInit(): void {
    this.getProducts();
  }

}
