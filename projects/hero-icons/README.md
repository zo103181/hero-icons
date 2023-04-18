# twng-hero-icons

**twng-hero-icons** is a collection of hero icons in SVG format, based on the [Heroicons](https://heroicons.com/) project, and ready to be used in your Angular projects. These icons are designed with a clean, modern aesthetic, and are great for adding visual interest to your user interfaces.

## Installation

To install **twng-hero-icons** in your Angular project, simply run:

`npm install twng-hero-icons`

## Usage

To use an icon from **twng-hero-icons**, import it into your Angular component or module, register it with `HeroIconsRegistry`, and use it in your HTML code. For example, to use the "x-mark" icon:

```typescript
import { HeroIconsModule, HeroIconsRegistry, XMark } from "twng-hero-icons";

@NgModule({
    declarations: [MyComponent],
    imports: [
        HeroIconsModule
    ],
    exports: [MyComponent]
})
export class Module {
    constructor(
        private heroIconsRegistry: HeroIconsRegistry
    ) {
        this.heroIconsRegistry.registerIcons({ XMark })
    }
}
```

```html
<hero-icon name="x-mark" type="outline" class="h-6 w-6 text-white"></hero-icon>
```

## Icons

This first version only includes all of the "outline" icons from [Heroicons](https://heroicons.com/)

## License

**twng-hero-icons** is licensed under the [MIT License](https://opensource.org/license/mit/), the same license used by the Heroicons project. You are free to use these icons in both personal and commercial projects, as long as you include the license file in your project. For more information, please refer to the [Heroicons license page](https://github.com/refactoringui/heroicons/blob/master/LICENSE.md).
