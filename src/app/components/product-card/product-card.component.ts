import { Component, Input } from '@angular/core';
import { Console } from 'console';
// import { console } from 'node:inspector';

@Component({
  selector: 'app-product-card',
  standalone: false,
  
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})

export class ProductCardComponent {
  @Input() product: any
  
  productImageStyle = {
      border: '1px solid black',
      filter: 'sepia(0)'
  }

  formState = false;

  address = ''
  postalCode = 0

  buyProduct() {
    console.log('compraremos un producto');
    this.formState = true;
  }

  orderProduct(){
    console.log(`Direccion de usuario: ${this.address}`);
    console.log(`Codigo postal: ${this.postalCode}`);

  }
  
  addToCar() {
    console.log('agregaremos un producto al carrito de compra');
  }

  onMouseEnter() {
    console.log('mouse enter');
    this.productImageStyle = {...this.productImageStyle, filter: 'sepia(0.3)'}
  }

  onMouseleave(){
    console.log('mouse leave');
    this.productImageStyle = {...this.productImageStyle, filter: 'sepia(0)'}

  }
}
