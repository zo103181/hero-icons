import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, Inject, Input, Optional } from '@angular/core';
import { HeroIconsRegistry } from './hero-icons-registry.service';

@Component({
  selector: 'hero-icons',
  template: `<ng-content></ng-content>`,
  styles: [`:host::ng-deep svg { width: 24px; height: 24px; }`],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroIconsComponent {

  private svgIcon: SVGElement | undefined

  @Input()
  set name(iconName: string) {
    if (this.svgIcon) {
      this.element.nativeElement.removeChild(this.svgIcon);
    }
    const svgData = this.heroIconRegistry.getIcon(iconName);
    this.svgIcon = this.svgElementFromString(svgData);
    this.element.nativeElement.appendChild(this.svgIcon);
  }

  constructor(
    private element: ElementRef,
    private heroIconRegistry: HeroIconsRegistry,
    @Optional() @Inject(DOCUMENT) private document: any
  ) { }

  private svgElementFromString(svgContent: string | undefined): SVGElement {
    const div = this.document.createElement('DIV');
    div.innerHTML = svgContent;
    return div.querySelector('svg') ||
      this.document.createElementNS('http://www.w3.org/2000.svg', 'path');
  }

}
