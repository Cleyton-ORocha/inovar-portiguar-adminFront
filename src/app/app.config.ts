import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { WINDOW_PROVIDER } from './providers/window.provider';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideClientHydration(), 
    WINDOW_PROVIDER,
    BrowserAnimationsModule
  ]
};
