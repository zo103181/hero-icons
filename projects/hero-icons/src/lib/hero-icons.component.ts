import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, Inject, Input, Optional, Renderer2 } from '@angular/core';
import { HeroIconsRegistry } from './hero-icons-registry.service';

@Component({
  selector: 'hero-icon',
  template: `<ng-content></ng-content>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroIconsComponent {

  private svgIcon: SVGElement | undefined

  @Input() name!: string;
  @Input() class?: string;
  @Input() type: string | undefined;
  @Input() defaultClass = 'block h-6 w-6';
  @Input() attr: { [key: string]: string } = {};

  constructor(
    private element: ElementRef,
    private heroIconRegistry: HeroIconsRegistry,
    private renderer: Renderer2,
    @Optional() @Inject(DOCUMENT) private document: any
  ) { }

  ngOnInit() {
    const typeKey = this.type ? this.type : 'outline';
    const svgData = this.heroIconRegistry.getIcon(this.name, typeKey);
    this.svgIcon = this.svgElementFromString(svgData);
    this.setAttributes();
    this.setClass();
    this.element.nativeElement.appendChild(this.svgIcon);
  }

  ngOnChanges() {
    this.setAttributes();
    this.setClass();
  }

  private setAttributes() {
    if (this.svgIcon) {
      Object.keys(this.attr).forEach((key) => {
        this.renderer.setProperty(this.svgIcon, key, this.attr[key]);
      });
    }
  }

  private setClass() {
    if (this.svgIcon) {
      const currentClasses = (this.class || '').split(' ');
      const defaultClasses = this.defaultClass.split(' ');

      // Filter out the default classes that are already included in this.class
      const filteredDefaultClasses = defaultClasses.filter(
        (defaultClass) => !currentClasses.some((currentClass) => currentClass.startsWith(defaultClass.replace(/-6/g, '-')))
      );

      const classes = [...currentClasses, ...filteredDefaultClasses];
      this.renderer.setAttribute(this.svgIcon, 'class', classes.join(' '));
    }
  }

  private svgElementFromString(svgContent: string | undefined): SVGElement {
    const div = this.document.createElement('DIV');
    div.innerHTML = svgContent;
    return div.querySelector('svg') ||
      this.document.createElementNS('http://www.w3.org/2000.svg', 'path');
  }

}
