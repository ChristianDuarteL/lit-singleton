# \<lit-singleton>

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