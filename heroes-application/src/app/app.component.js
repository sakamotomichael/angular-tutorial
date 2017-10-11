"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tip The Scales';
        this.characters = Characters;
    }
    AppComponent.prototype.onSelect = function (character) {
        this.selectedCharacter = character;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n  <h1>Welcome to {{ title }}!</h1>\n  <h2>Gauntlet Character List</h2>\n  <ul class=\"characters\">\n    <li *ngFor=\"let character of characters\" \n      (click)=\"onSelect(character)\" \n      [class.selected]=\"character === selectedCharacter\" >\n    <span class=\"badge\"><b>{{character.id}}</b></span> {{character.name}}\n        <label><b>(Bracket: </b></label>\n        {{character.bracket}})\n    </li>\n  </ul>\n  <hr />\n  <div *ngIf=\"selectedCharacter\">\n  <h2>{{ selectedCharacter.name }} Information</h2>\n  <div><label>Bracket: </label>{{ selectedCharacter.bracket }}</div>\n  <div>\n    <label>Name: </label>\n    <input [(ngModel)]=\"selectedCharacter.name\" placeholder=\"Character Name\" />\n  </div>\n  </div>\n  ",
        styles: ["\n  .selected {\n    background-color: #CFD8DC !important;\n    color: white;\n  }\n  .characters {\n    margin: 0 0 2em 0;\n    list-style-type: none;\n    padding: 0;\n    width: 15em;\n  }\n  .characters li {\n    cursor: pointer;\n    position: relative;\n    left: 0;\n    background-color: #EEE;\n    margin: .5em;\n    padding: .3em 0;\n    height: 1.6em;\n    border-radius: 4px;\n  }\n  .characters li.selected:hover {\n    background-color: #BBD8DC !important;\n    color: white;\n  }\n  .characters li:hover {\n    color: #607D8B;\n    background-color: #DDD;\n    left: .1em;\n  }\n  .characters .text {\n    position: relative;\n    top: -3px;\n  }\n  .characters .badge {\n    display: inline-block;\n    font-size: small;\n    color: white;\n    padding: 0.8em 0.7em 0 0.7em;\n    background-color: #607D8B;\n    line-height: 1em;\n    position: relative;\n    left: -1px;\n    top: -4px;\n    height: 1.8em;\n    margin-right: .8em;\n    border-radius: 4px 0 0 4px;\n  }\n"]
    })
], AppComponent);
exports.AppComponent = AppComponent;
var Character = (function () {
    function Character() {
    }
    return Character;
}());
exports.Character = Character;
var Characters = [
    { id: 1, name: 'Corrin (M)', bracket: 'A' },
    { id: 2, name: 'Tiki (Y)', bracket: 'A' },
    { id: 3, name: 'Ninian', bracket: 'A' },
    { id: 4, name: 'Fae', bracket: 'A' },
    { id: 5, name: 'Tiki (O)', bracket: 'B' },
    { id: 6, name: 'Nowi', bracket: 'B' },
    { id: 7, name: 'Corrin (F)', bracket: 'B' },
    { id: 8, name: 'Sophia', bracket: 'B' }
];
//# sourceMappingURL=app.component.js.map