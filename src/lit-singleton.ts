import { LitElement } from "lit";

export abstract class Singleton extends LitElement {
    static __singleton_elem: LitElement | null;

    static getElement(): (Singleton | null) {
        const { generator } = this;
        if(this.__singleton_elem){
            return this.__singleton_elem;
        }
        const elem = generator ? generator() : null;
        return elem ? this.appender(elem) : null;
    }

    static generator? : (() => (LitElement));

    static appender: (<T extends LitElement>(element: T) => T) = (e) => document.body.appendChild(e);

    connectedCallback(){
        super.connectedCallback();
        if((this.constructor as typeof Singleton).__singleton_elem != null){
            throw new Error(`More than one singleton of class ${this.constructor.name}`)
        }
        if ((this.constructor as typeof Singleton).__singleton_elem == null){
            (this.constructor as typeof Singleton).__singleton_elem = this;
        }
    }

    disconnectedCallback(){
        if ((this.constructor as typeof Singleton).__singleton_elem === this){
            (this.constructor as typeof Singleton).__singleton_elem = null;
        }
        super.disconnectedCallback();
    }
}