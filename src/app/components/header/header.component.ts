import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent /*implements OnInit,AfterContentInit,AfterViewInit,OnDestroy, OnChanges, DoCheck ,AfterContentChecked, AfterViewChecked*/{
  pageTitle = 'MY APP';
  
  userInfo = {
    image: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
    role: 'SALES',
  }
  constructor(){
    console.log('constructor ejecutado');
  }

  onDataCheck(e: any) {
    console.log(e);
    
  }

  /*
  // Va a detectar cuando venga nueva informacion a nuestro componente
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges ejecutado');
  }

  ngOnInit(): void {
    console.log('ngOnInit ejecutado');
  }
  // Se va a ejecutar cuando algo pase o cambie dentro de nuestra interfaz y cada vez que esto ocurra se va a ejecutar los siguientes " ngAfterContentChecked " y " ngAfterViewChecked "
  ngDoCheck(): void {
    console.log('ngDoCheck ejecutado');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit ejecutado');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked ejecutado');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit ejecutado');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked ejecutado');
  }

  // Este evento no aparece ya que no hay ningun evento que nos permita destruir algun componente
  ngOnDestroy(): void {
    console.log('ngOnDestroy ejecutado');
  }*/

}
