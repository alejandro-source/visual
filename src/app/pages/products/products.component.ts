import { Component, OnInit } from '@angular/core';

export const products = [
  {
    image: 'https://cdn-icons-png.flaticon.com/512/992/992651.png',
    name: 'Stylish Watch',
    description: 'A sleek and modern watch with a durable strap.',
    unitAvailable: '10',
    price: '29.99',
    category: 'home',
  },
  {
    image: 'https://cdn-icons-png.flaticon.com/512/3081/3081972.png',
    name: 'Noise-Cancelling Headphones',
    description: 'Comfortable headphones with advanced noise-cancelling features.',
    unitAvailable: '20',
    price: '79.99',
    category: 'home',

  },
  {
    image: 'https://cdn-icons-png.flaticon.com/512/3370/3370110.png',
    name: 'Smartphone',
    description: 'A high-performance smartphone with a stunning display.',
    unitAvailable: '15',
    price: '699.99',
    category: 'home',

  },
  {
    image: 'https://cdn-icons-png.flaticon.com/512/2917/2917765.png',
    name: 'Gaming Keyboard',
    description: 'RGB backlit mechanical keyboard for gamers.',
    unitAvailable: '35',
    price: '49.99',
    category: 'cosmetics',

  },
  {
    image: 'https://cdn-icons-png.flaticon.com/512/443/443045.png',
    name: 'Wireless Mouse',
    description: 'An ergonomic wireless mouse with a sleek design.',
    unitAvailable: '100',
    price: '19.99',
    category: 'cosmetics',

  },
  {
    image: 'https://cdn-icons-png.flaticon.com/512/1055/1055646.png',
    name: 'Backpack',
    description: 'A spacious and durable backpack, perfect for travel.',
    unitAvailable: '47',
    price: '39.99',
    category: 'technology',

  },
];

@Component({
  selector: 'app-products',
  standalone: false,
  
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  


  styles = {
    display: 'flex',
    'flex-direction': 'column',
    'align-items': 'center',
    padding: '20px',
    width: '200px',
  }

  products: any;

  ngOnInit(): void {

    this.products = products;
  }

}

