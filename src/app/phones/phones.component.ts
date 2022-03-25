import { Component, OnInit } from '@angular/core';
import { products, Product } from "../products";

@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.css']
})
export class PhonesComponent implements OnInit {

  constructor() { }

  products = products;
  selectedPhone?: Product;

  onSelect(obj: Product){
    this.selectedPhone = obj;
  }

  ngOnInit(): void {
  }

}
