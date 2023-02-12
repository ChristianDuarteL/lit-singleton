import { LitElement } from "lit";
export class Singleton extends LitElement {
    static getElement() {
        const { generator } = this;
        if (this.__singleton_elem) {
            return this.__singleton_elem;
        }
        const elem = generator ? generator() : null;
        return elem ? this.appender(elem) : null;
    }
    connectedCallback() {
        super.connectedCallback();
        if (this.constructor.__singleton_elem != null) {
            throw new Error(`More than one singleton of class ${this.constructor.name}`);
        }
        if (this.constructor.__singleton_elem == null) {
            this.constructor.__singleton_elem = this;
        }
    }
    disconnectedCallback() {
        if (this.constructor.__singleton_elem === this) {
            this.constructor.__singleton_elem = null;
        }
        super.disconnectedCallback();
    }
}
Singleton.appender = (e) => document.body.appendChild(e);
//# sourceMappingURL=lit-singleton.js.map