# NestJS with Angular

Everybody knows about MEAN stack (**M**ongo, **E**xpress, **A**ngular, **N**ode.js). Main problem of this stack, as for me, is that you have to use vanilla JavaScript for back-end and holy TypeScript for Angular's front-end.  
Kind people created [NestJS](https://nestjs.com/), which inspired by [Angular](https://angular.io/) and fully written on TypeScript.  
This project combines NestJS and Angular into a single codebase, so that you can share your code across back-end and front-end (see [shared](https://github.com/Ant0nRocket/NestJS-With-Angular/tree/master/src/shared) folder).  
  
## Installation

First of all you should install Angular and NestJS CLI's:

```console
npm install -g @angular/cli
npm install -g @nestjs/cli
```

Then clone this repository:

```console
git clone https://github.com/Ant0nRocket/NestJS-With-Angular
cd NestJS-With-Angular
```

## Development

To start Angular development server use:

```console
ng serve
```

To start NestJS back-end in development mode:

```console
nest start --watch
```

Both previous commands could be (and should be :)) called semultaniously (VS Code allows you to open as many terminals as you need).

## Build

To build project use commands:

```console
nest build
ng build --prod
```

All output code (js and map files) could be found in **[dist]** folder.

## Bonus

I've already implement JWT-based user authorization and add WebSockets support.

## Links

Compiled code is [here](https://github.com/Ant0nRocket/Deploy-NestJS-With-Angular).  
Working example deployed on [Heroku](https://nestjs-with-angular.herokuapp.com/).  

While playing with working app perform quick registration (with fake data, no verification required). You will see that authorization works. After sucessful login you will be able to perform WebSockets tests. For doing this enter any message and click "Send" button. Your message will be pushed to server via WebSockets and response will be added on form.
