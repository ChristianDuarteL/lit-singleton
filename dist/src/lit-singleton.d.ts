import { LitElement } from "lit";
export declare abstract class Singleton extends LitElement {
    static __singleton_elem: LitElement | null;
    static getElement(): (Singleton | null);
    static generator?: (() => (LitElement));
    static appender: (<T extends LitElement>(element: T) => T);
    connectedCallback(): void;
    disconnectedCallback(): void;
}
