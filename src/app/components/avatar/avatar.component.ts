import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/*@Component({
  selector: 'app-avatar',
  standalone: false,
  //Aqui indicaremos que template queremos usar "el que te crea angular por defecto al crear el componente o el que hemos creado personalizado"
  //Si es el nuestro personalizado seria : ./avatar-alt.component.html
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.css'
})*/

@Component({
  standalone: true,
  imports: [CommonModule], // Import CommonModule for ngStyle and other directives
  selector: 'app-avatar',
  template: `
    <img
      class="avatar"
      [ngClass]="userInfo.role === 'ADMIN' ? 'admin' : userInfo.role === 'SALES' ? 'sales' : ''"
      [src]="userInfo.image"
      [ngStyle]="{'border': userInfo.role === 'ADMIN' ? '2px solid cyan' : '2px solid yellow' }"
    >
  `,
  styles: [`
    .avatar {
      height: 50px;
      width: 50px;
      padding: 5px;
      border-radius: 100%;
    }
    .admin {
      border-radius: 100%;
    }
    .sales {
      border-radius: 18px;
    }
  `]
})
export class AvatarComponent {
  @Input() userInfo: any;
}