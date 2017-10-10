import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeroesComponent }  from './heroes.component';
import { HeroService } from './hero.service';
import { HeroDetailComponent } from './hero-detail.component';



// Declarations to include components, pipes, directives in module.
@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    /* Router Module Declaration
    * .forRoot() - configured router provided at app root.
    * This method supplies service providers & directives needed for routing.
    * Performs initial navigation based on current browser URL
    */
    RouterModule.forRoot([
      {
        path: 'heroes',
        component: HeroesComponent
      }
    ])
  ],
  providers: [HeroService],
  declarations: [ AppComponent, HeroDetailComponent, HeroesComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }