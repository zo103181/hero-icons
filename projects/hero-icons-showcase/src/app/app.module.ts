import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeroIconsRegistry } from 'projects/hero-icons/src/lib/hero-icons-registry.service';
import { HeroIconsModule, heroIconsOutlineAcademicCap } from 'projects/hero-icons/src/public-api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeroIconsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private heroIconsRegistry: HeroIconsRegistry) {
    this.heroIconsRegistry.registerIcons({
      heroIconsOutlineAcademicCap
    });
  }

}