import type { Meta, StoryObj } from "@storybook/web-components";
import { SylButton } from "../components/syl-button";
import "../components/syl-button";

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta: Meta<SylButton> = {
  title: "Components/SylButton",
  tags: ["autodocs"],
  // component: 'SylButton', // 'syl-button', //
  //render: () => new SylButton(),
  render: (args) => {
    const { slot, ...props } = args;
    return `<syl-button size="${props.size}" mode="${props.mode}" ${
      props.disabled ? "disabled" : null
    } ${props.outlined ? "outlined" : null}>${slot}</syl-button>`;
  },
  args: {
    outlined: false,
    disabled: false,
    mode: "primary",
    size: "medium",
    slot: "text",
  },
  argTypes: {
    outlined: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
    slot: {
      control: "text",
    },
    mode: {
      control: { type: "select" },
      options: ["primary", "secondary"],
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
  },
} as Meta<SylButton>;

export default meta;
type Story = StoryObj<SylButton>;

// More on writing stories with args: https://storybook.js.org/docs/web-components/writing-stories/args
export const Primary: Story = {
  args: {
    mode: "primary",
  },
};

export const Secondary: Story = {
  args: {
    mode: "secondary",
  },
};

export const Large: Story = {
  args: {
    size: "large",
  },
};

export const Small: Story = {
  args: {
    size: "small",
  },
};
