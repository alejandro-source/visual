import { Character } from './../interfaces/character.interface';
import { Component} from '@angular/core';


@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  public characters: Character[] = [{
    name: 'Krillin',
    power: 1000
  },{
    name:'Goku',
    power: 9500
  },{
    name:"Vegeta",
    power: 7500
  }];

 // onDelete = Index value: number;

  onNewCharacter(character:Character): void{
    this.characters.push(character);
  }

  onDeleteCharacter(index:number){

    //this.characters.splice(1,2)
    this.characters.splice(index,1);
  }

}

//onNewCharacter(): Añade un nuevo personaje a la lista characters
//OnDeleteCharacter(): Elimina un personaje de la lista según el índice proporcionado
