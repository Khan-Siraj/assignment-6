import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  productList:Product[];
  product:Product|any; 
  constructor(private activatedRoute:ActivatedRoute,private productService:ProductService) { 
    this.productList=this.productService.getProducts();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param=>{
      this.product = this.productList.filter((e:any)=>e.id == param.id); 
    })
  }

}
