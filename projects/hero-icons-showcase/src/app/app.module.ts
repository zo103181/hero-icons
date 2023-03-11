import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeroIconsRegistry } from 'projects/hero-icons/src/lib/hero-icons-registry.service';
import { heroIconsAcademicCap, HeroIconsModule } from 'projects/hero-icons/src/public-api';

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
    this.heroIconsRegistry.registerIcons([
      heroIconsAcademicCap
    ])
  }

}
