import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import Mapboxgl from 'mapbox-gl'; // or "const Mapboxgl = require('mapbox-gl');"
import { environment } from './environments/environment';

Mapboxgl.accessToken = environment.apiKey

if (!navigator.geolocation) {
  alert('Adios no puedo trbaajr aqui')
  throw new Error('Adios no puedo trbaajr aqui')
}


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
