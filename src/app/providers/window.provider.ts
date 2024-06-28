import { InjectionToken } from '@angular/core';

export const WINDOW = new InjectionToken<Window>('Window');

export function windowFactory(): Window {
    if (typeof window !== 'undefined') {
        return window as any; // Cast window as 'any' to avoid type-checking issues
      } else {
        // Fallback implementation for environments without 'window'
        const noopWindow: Partial<Window> = {
          getComputedStyle(element: Element): CSSStyleDeclaration {
            // Implement a minimal 'getComputedStyle' method or a no-op
            return {
              getPropertyValue(prop: string): string {
                return ''; // Return an empty string for any property
              }
            } as CSSStyleDeclaration;
          },
          // Add other methods or properties as needed for your application
        };
        return noopWindow as Window; // Cast to 'Window' type
      }
}

export const WINDOW_PROVIDER = {
  provide: WINDOW,
  useFactory: windowFactory,
  deps: []
};