import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  productList:Product[] = [
    {
      id:1,
      name:"Nokia 5.1 Plus",
      description:"Nokia 5.1 Plus ; Display. 5.8 HD+ screen with 19:9 aspect ratio and edge-to-edge design ; Design. Premium look and feel with 2.5D curved glass and high-gloss",
      price:8999,
      image:"assets/images/product/nokia.png"
    },
    {
      id:2,
      name:'Samsung A10s',
      description:"Samsung Galaxy A10s · Released 2019, August 27 · 168g, 7.8mm thickness · Android 9.0, up to Android 11, One UI 3.1 · 32GB storage, microSDXC",
      price:10999,
      image:"assets/images/product/samsung.png"
    },
    {
      id:3,
      name:'Redmi Note 5 Pro',
      description:"Redmi Note 5 Pro Specification: ✓5.99 Inch Full HD+ ✓Bright Display Qualcomm Snapdragon 4GB RAM 64 GB Internal Memory Expandable Up to 128 GB and many",
      price:12999,
      image:"assets/images/product/redmi.png"
    },
    {
      id:4,
      name:'Vivo Y2',
      description:"Performance. Vivo Y2 packs Mediatek MT6765 Helio P35 (12nm) processor and it will have Octa-core (4x2.3 GHz Cortex-A53 & 4x1.8 GHz Cortex-A53)",
      price:9500,
      image:"assets/images/product/vivo.png"
    }
  ]
  product:Product|any; 
  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param=>{
      this.product = this.productList.filter((e:any)=>e.id == param.id); 
    })
  }

}
