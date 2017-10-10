import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
    selector: 'hero-detail',
    template: `
    <div *ngIf="hero">
        <h2>--- {{hero.name}} Info ---</h2>
        <div>
            <label>ID#: </label>{{hero.id}}
        </div>
        <div>
            <label>Name: </label>
            <input [(ngModel)]="hero.name" placeholder="Name"/>
        </div>
        <div>
            <label>Type: </label>{{hero.type}}
        </div>
    </div>
    `
})

export class HeroDetailComponent { 
    @Input() hero: Hero;
}