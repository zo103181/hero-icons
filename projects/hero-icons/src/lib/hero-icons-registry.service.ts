import { Injectable } from '@angular/core';
import { HeroIcon } from './hero-icons';

@Injectable({ providedIn: 'root' })
export class HeroIconsRegistry {
    private registry: Record<string, HeroIcon> = {};

    public registerIcons(icons?: Record<string, HeroIcon>): void {
        if (icons) {
            Object.keys(icons).forEach(iconName => {
                const icon = icons[iconName];
                const fullIconName = `${icon.name}-${icon.styles}`;
                this.registry[fullIconName] = icon;
            });
        }
    }

    public getIcon(iconName: string, styleName: string): string | undefined {
        const fullIconName = `${iconName}-${styleName}`;
        const icon = this.registry[fullIconName];
        if (!icon) {
            console.error(`Sorry, we could not find the icon "${iconName}" with a style of "${styleName}", verify the spelling is correct and the icon was added to the registry.`);
            return;
        }
        return icon.data;
    }
}