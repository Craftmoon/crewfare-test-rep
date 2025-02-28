import type { Meta, StoryObj } from "@storybook/vue3";
import BackForwardButtons from "../components/atoms/BackForwardButtons.vue";

const meta = {
  title: "Atoms/BackForwardButtons",
  component: BackForwardButtons,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
      values: [
        { name: "light", value: "#FFFFFF" },
        { name: "dark", value: "#1A1A1A" },
      ],
    },
  },
  argTypes: {
    onBackClick: { action: "back clicked" },
    onForwardClick: { action: "forward clicked" },
  },
} satisfies Meta<typeof BackForwardButtons>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { BackForwardButtons },
    setup() {
      return { args };
    },
    template: '<BackForwardButtons v-bind="args" />',
  }),
  args: {
    backDisabled: false,
    forwardDisabled: false,
    onBackClick: () => console.log("Back clicked"),
    onForwardClick: () => console.log("Forward clicked"),
  },
};

export const BackDisabled: Story = {
  render: (args) => ({
    components: { BackForwardButtons },
    setup() {
      return { args };
    },
    template: '<BackForwardButtons v-bind="args" />',
  }),
  args: {
    backDisabled: true,
    forwardDisabled: false,
    onBackClick: () => console.log("Back clicked"),
    onForwardClick: () => console.log("Forward clicked"),
  },
};

export const ForwardDisabled: Story = {
  render: (args) => ({
    components: { BackForwardButtons },
    setup() {
      return { args };
    },
    template: '<BackForwardButtons v-bind="args" />',
  }),
  args: {
    backDisabled: false,
    forwardDisabled: true,
    onBackClick: () => console.log("Back clicked"),
    onForwardClick: () => console.log("Forward clicked"),
  },
};

export const BothDisabled: Story = {
  render: (args) => ({
    components: { BackForwardButtons },
    setup() {
      return { args };
    },
    template: '<BackForwardButtons v-bind="args" />',
  }),
  args: {
    backDisabled: true,
    forwardDisabled: true,
    onBackClick: () => console.log("Back clicked"),
    onForwardClick: () => console.log("Forward clicked"),
  },
};
