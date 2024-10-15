import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
    selector: 'dbz-list',
    templateUrl: './list.component.html',
    styleUrl: './list.component.css',
})
export class ListComponent {
    @Input()
    public characterList: Character[] = []

    @Output()
    public onDeleteId: EventEmitter<number> = new EventEmitter()

    onDeleteCharacter(index: number): void {
        console.log("index en listcomponent", index)
        // emitir el id del personaje
        this.onDeleteId.emit(index)
    }
}
