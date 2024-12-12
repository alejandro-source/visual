import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {
 @Output()
 public onNewCharacter: EventEmitter<Character> = new EventEmitter();

    public character: Character = {
      name:'',
      power: 0
    };

    emitCharacter():void{

      if (this.character.name.length === 0) return;

      this.onNewCharacter.emit(this.character);

      this.character={ name: '', power:0};

    }
}

// @Output(): Define un evento que el componente hijo puede emitir al componente padre. En este caso, se emite el personaje recién creado
// emitCharacter(): Valida que el nombre no esté vacío. Si no lo está, emite el objeto character y luego limpia el formulario
