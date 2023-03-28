import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, Inject, Input, Optional } from '@angular/core';
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
  @Input() styles: string | undefined;
  @Input() defaultClass = 'block h-6 w-6';

  constructor(
    private element: ElementRef,
    private heroIconRegistry: HeroIconsRegistry,
    @Optional() @Inject(DOCUMENT) private document: any
  ) { }

  ngOnInit() {
    const styleKey = this.styles ? this.styles : 'unknown-style';
    const svgData = this.heroIconRegistry.getIcon(this.name, styleKey);
    this.svgIcon = this.svgElementFromString(svgData);
    this.setClass();
    this.element.nativeElement.appendChild(this.svgIcon);
  }

  ngOnChanges() {
    this.setClass();
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
      this.svgIcon.setAttribute('class', classes.join(' '));
    }
  }

  private svgElementFromString(svgContent: string | undefined): SVGElement {
    const div = this.document.createElement('DIV');
    div.innerHTML = svgContent;
    return div.querySelector('svg') ||
      this.document.createElementNS('http://www.w3.org/2000.svg', 'path');
  }

}
