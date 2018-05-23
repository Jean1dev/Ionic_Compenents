import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);

/*

https://ionicframework.com/docs/cli/generate/
https://ionicframework.com/docs/
https://gist.github.com/nandomoreirame/2bc8ee67f13672e590ed

$ ionic generate 
$ ionic generate component
$ ionic generate directive
$ ionic generate page
$ ionic generate pipe
$ ionic generate provider
$ ionic generate tabs
$ ionic generate component foo
$ ionic generate page Login
$ ionic generate page Detail --no-module
$ ionic generate page About --constants
$ ionic generate pipe MyFilterPipe

Visualizar o projeto no navegador localhost

ionic serve
ionic serve --labs
Incluir a plataforma Android/iOS ao projeto

ionic platform add android
ionic platform add ios
Compilar e gerar app

ionic build android
ionic build ios
Iniciar o emulador com o aplicativo

ionic cordova emulate android
ionic cordova emulate ios

cordova build --debug plataforma

ionic cordova platform add browser
ionic cordova run browser

ionic cordova resources
*/ 