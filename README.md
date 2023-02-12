# Lit Singleton

A library to make singleton-like elements in lit

## The issue

It's known that in a web page there are components that might only be required once at the time(e.g. alerts, snackbars)

And, by their nature, they need to be accesible in all parts of the code. 

This library, helps you make singleton-like web components, ina fairly easy way

## Installation

```bash
npm i lit-singleton
```

## Usage

```ts
import { Singleton } from 'lit-singleton';
@customElement('web-component')
class WebComponent extends Singleton{
    static generator?: (() => LitElement) = () => (document.createElement('web-component') as LitElement);
}
```