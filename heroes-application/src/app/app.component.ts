import { Component } from '@angular/core';



@Component({
  selector: 'my-app',

  template: `
  <h1>Welcome to {{ title }}!</h1>
  <h2>Gauntlet Character List</h2>
  <ul class="characters">
    <li *ngFor="let character of characters" 
      (click)="onSelect(character)" 
      [class.selected]="character === selectedCharacter" >
    <span class="badge"><b>{{character.id}}</b></span> {{character.name}}
        <label><b>(Bracket: </b></label>
        {{character.bracket}})
    </li>
  </ul>
  <hr />
  <div *ngIf="selectedCharacter">
  <h2>{{ selectedCharacter.name }} Information</h2>
  <div><label>Bracket: </label>{{ selectedCharacter.bracket }}</div>
  <div>
    <label>Name: </label>
    <input [(ngModel)]="selectedCharacter.name" placeholder="Character Name" />
  </div>
  </div>
  `,

  styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .characters {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .characters li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .characters li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .characters li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .characters .text {
    position: relative;
    top: -3px;
  }
  .characters .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`]
})

export class AppComponent  { 
  title = 'Tip The Scales';
  characters = Characters;
  selectedCharacter: Character;
  onSelect(character: Character): void {
    this.selectedCharacter = character;
  }
}

export class Character {
  id: number;
  name: string;
  bracket: string;
}

const Characters: Character[] = [
  { id: 1, name: 'Corrin (M)', bracket: 'A' },
  { id: 2, name: 'Tiki (Y)', bracket: 'A' },
  { id: 3, name: 'Ninian', bracket: 'A' },
  { id: 4, name: 'Fae', bracket: 'A' },
  { id: 5, name: 'Tiki (O)', bracket: 'B' },
  { id: 6, name: 'Nowi', bracket: 'B' },
  { id: 7, name: 'Corrin (F)', bracket: 'B' },
  { id: 8, name: 'Sophia', bracket: 'B' }
];