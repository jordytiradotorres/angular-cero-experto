import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})

export class MainPageComponent {
    // inyeccion de dependencias, habilitara en este archivo toda la informacion que esta siendo utilizada en este servicio
    constructor(private dbzService: DbzService) { }

    get characters(): Character[] {
        return [...this.dbzService.characters]
    }

    onDeleteId(index: string): void {
        this.dbzService.deletedCharacterById(index)
    }

    onNewCharacter(character: Character): void {
        this.dbzService.addCharacter(character)
    }

}