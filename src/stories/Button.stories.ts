import type { Meta, StoryObj } from "@storybook/vue3";
import { fn } from "@storybook/test";
import Button from "../components/atoms/Button.vue";

const meta = {
  title: "Atoms/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Button component with white text (14px, bold weight). No focus outline on click. Can include a 32px wide wiggle animation on click.",
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args">Button</Button>',
  }),
  args: {
    onClick: fn(),
    animated: false,
  },
};

export const CustomClasses: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args">Button</Button>',
  }),
  args: {
    onClick: fn(),
    animated: false,
    class: "px-[42px] py-[14px]",
  },
};

export const LongText: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args">A Longer Button Text</Button>',
  }),
  args: {
    onClick: fn(),
    animated: false,
  },
};

export const AnimatedButton: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args">Click me!</Button>',
  }),
  args: {
    onClick: fn(),
    animated: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Button with a 32px wide wiggle animation on click (16px each side)",
      },
    },
  },
};
