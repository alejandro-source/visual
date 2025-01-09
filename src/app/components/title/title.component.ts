import { Component, Input, OnChanges, Output, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: false,
  
  templateUrl: './title.component.html',
  styleUrl: './title.component.css'
})
export class TitleComponent implements  OnChanges {
  // Enviar datos desde el componente padre al hijo
  @Input() title = '';

  // Enviar datos desde el componente hijo al padre
  @Output() dataFromChild = new EventEmitter ();

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    this.dataFromChild.emit('data from child component');
  }

}