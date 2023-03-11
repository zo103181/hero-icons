import { Injectable } from '@angular/core';
import { HeroIcon } from './hero-icons';

@Injectable({ providedIn: 'root' })
export class HeroIconsRegistry {
    private registry = new Map<string, string>();

    public registerIcons(icons: HeroIcon[]): void {
        icons.forEach((icon: HeroIcon) => this.registry.set(icon.name, icon.data));
    }

    public getIcon(iconName: string): string | undefined {
        if (!this.registry.has(iconName)) {
            console.error(`Sorry, we could not find the icon "${iconName}", verify the spelling is correct and the icon was added to the registry.`);
        }
        return this.registry.get(iconName);
    }
}