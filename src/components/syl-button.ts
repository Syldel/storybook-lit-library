import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { buttonStyles } from "./button-styles.ts";

@customElement("syl-button")
export class SylButton extends LitElement {
  @property()
  size?: "small" | "medium" | "large" = "medium";

  @property()
  mode?: "primary" | "secondary" = "primary";

  @property({ type: Boolean })
  outlined: boolean = false;

  @property({ type: Boolean }) // , reflect: true
  disabled: boolean = false;

  static styles = [
    buttonStyles,
    css`
      :host {
        display: block;
        border: 1px solid black;
      }
    `,
  ];

  hostclass = "syl-button";

  render() {
    const classList = [
      this.hostclass,
      `${this.hostclass}--${this.size}`,
      `${this.hostclass}--${this.mode}`,
    ];
    if (this.outlined) {
      classList.push(`${this.hostclass}--outlined`);
    }
    if (this.disabled) {
      classList.push(`${this.hostclass}--disabled`);
    }

    return html`
      <button
        type="button"
        ?disabled=${this.disabled}
        class=${classList.join(" ")}
      >
        <slot></slot>
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "syl-button": SylButton;
  }
}
