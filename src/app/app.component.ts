import { Component, OnInit } from '@angular/core';
import { products } from './pages/products/products.component';  // Import the 'products' array

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrls: ['./app.component.css']  // Corrected to styleUrls (plural)
})
export class AppComponent implements OnInit {
  title = 'myapp';
  styles = {
    display: 'flex',
    'flex-direction': 'column',
    'align-items': 'center',
    padding: '20px',
    width: '200px',
  };

  products: any[] = [];

  ngOnInit(): void {
    this.products = products;  // Assign the imported products array to this.products
  }
}
// Comentario de prueba para nueva rama
