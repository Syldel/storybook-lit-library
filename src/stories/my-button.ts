import { html } from "lit";
import { styleMap } from "lit/directives/style-map.js";
import "./my-button.css";

export interface MyButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  label: string;
  onClick?: () => void;
}

export const MyButton = ({
  primary,
  backgroundColor,
  size,
  label,
  onClick,
}: MyButtonProps) => {
  const mode = primary ? "my-button--primary" : "my-button--secondary";

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
};
