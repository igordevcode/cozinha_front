import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { appConfig } from './app/app.config';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppComponent)
  .catch(err => console.error(err));
