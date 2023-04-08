import { Component, Renderer2 } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { heroIconArray } from 'projects/hero-icons/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger('AnimationTrigger0', [
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('500ms ease-in-out', style({ transform: 'translateX(0)' }))
      ]),
      transition(':leave', [
        style({ transform: 'translateX(0)' }),
        animate('500ms ease-in-out', style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class AppComponent {

  availableHeroIcons: string[];
  isSlideOver = false;
  isSlideOverDialog = false;
  previewIcon!: {
    name: string;
    class: string;
  };
  snippets = {
    heroIcon: `<hero-icon 
    name="academic-cap" 
    styles="outline"></hero-icon>`
  }

  constructor(private renderer: Renderer2) {
    this.availableHeroIcons = heroIconArray;
  }

  onPreviewIcon(icon: string) {
    this.previewIcon = {
      name: icon,
      class: (!this.previewIcon) ? 'h-20 w-20 block' : this.previewIcon.class
    }
    this.toggleSlideOver();
  }

  toggleSlideOver() {
    const delay = this.isSlideOverDialog ? 400 : 0;
    setTimeout(() => {
      this.isSlideOverDialog = !this.isSlideOverDialog;
    }, delay);

    this.isSlideOver = !this.isSlideOver;
  }

  updateIconClass(event: Event) {
    const newClass = event.target as HTMLInputElement;
    const element = document.querySelector('#preview-icon');

    this.renderer.removeAttribute(element, 'class');
    this.renderer.setAttribute(element, 'class', newClass.value);

    this.previewIcon.class = newClass.value;
  }

}
