import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { buttonStyles } from "./button-styles.ts";

@customElement("syl-element")
export class SylElement extends LitElement {
  @property({ type: Number })
  primary?: boolean;

  @property({ type: String })
  backgroundColor?: string;

  @property()
  size?: "small" | "medium" | "large";

  @property({ type: String })
  label?: string;

  static styles = [
    buttonStyles,
    css`
      :host {
        display: block;
        border: 1px solid black;
      }
    `,
  ];

  render() {
    return html`
      <button
        type="button"
        class=${["my-button", `my-button--${size || "medium"}`, mode].join(" ")}
        style=${styleMap({ backgroundColor })}
        @click=${onClick}
      >
        ${label}
      </button>
    `;
  }
}

/*
declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement
  }
}
*/
