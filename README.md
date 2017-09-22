<p align="center">
  <img height="256px" width="256px" style="text-align: center;" src="https://cdn.rawgit.com/gwenaellarmet/game-of-thrones/master/demo/src/assets/logo.svg">
</p>

# game-of-thrones - Angular library built with ❤ using ngx-library yeoman generator.

[![npm version](https://badge.fury.io/js/game-of-thrones.svg)](https://badge.fury.io/js/game-of-thrones)
[![Build Status](https://travis-ci.org/gwenaellarmet/game-of-thrones.svg?branch=master)](https://travis-ci.org/gwenaellarmet/game-of-thrones)
[![Coverage Status](https://coveralls.io/repos/github/gwenaellarmet/game-of-thrones/badge.svg?branch=master)](https://coveralls.io/github/gwenaellarmet/game-of-thrones?branch=master)
[![dependency Status](https://david-dm.org/gwenaellarmet/game-of-thrones/status.svg)](https://david-dm.org/gwenaellarmet/game-of-thrones)
[![devDependency Status](https://david-dm.org/gwenaellarmet/game-of-thrones/dev-status.svg?branch=master)](https://david-dm.org/gwenaellarmet/game-of-thrones#info=devDependencies)

## Demo

View all the directives in action at https://gwenaellarmet.github.io/game-of-thrones

## Dependencies
* [Angular](https://angular.io) (*requires* Angular 2 or higher, tested with 2.0.0)

## Installation
Install above dependencies via *npm*. 

Now install `game-of-thrones` via:
```shell
npm install --save game-of-thrones
```

---
##### SystemJS
>**Note**:If you are using `SystemJS`, you should adjust your configuration to point to the UMD bundle.
In your systemjs config file, `map` needs to tell the System loader where to look for `game-of-thrones`:
```js
map: {
  'game-of-thrones': 'node_modules/game-of-thrones/bundles/game-of-thrones.umd.js',
}
```
---

Once installed you need to import the main module:
```js
import { LibModule } from 'game-of-thrones';
```
The only remaining part is to list the imported module in your application module. The exact method will be slightly
different for the root (top-level) module for which you should end up with the code similar to (notice ` LibModule .forRoot()`):
```js
import { LibModule } from 'game-of-thrones';

@NgModule({
  declarations: [AppComponent, ...],
  imports: [LibModule.forRoot(), ...],  
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

Other modules in your application can simply import ` LibModule `:

```js
import { LibModule } from 'game-of-thrones';

@NgModule({
  declarations: [OtherComponent, ...],
  imports: [LibModule, ...], 
})
export class OtherModule {
}
```

## Usage



## License

Copyright (c) 2017 Gwenael LARMET. Licensed under the MIT License (MIT)

