import type { Meta, StoryObj } from "@storybook/vue3";
import Text from "../components/atoms/Text.vue";

const meta = {
  title: "Atoms/Text",
  component: Text,
  tags: ["autodocs"],
  parameters: {
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#FFFFFF" },
        { name: "dark", value: "#1A1A1A" },
      ],
    },
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Text48Bold: Story = {
  render: (args) => ({
    components: { Text },
    setup() {
      return { args };
    },
    template: '<Text v-bind="args">Text 48px Bold</Text>',
  }),
  args: {
    size: "text-5xl",
    weight: "font-bold",
    color: "dark:text-white text-gray-900",
  },
};

export const Text24Bold: Story = {
  render: (args) => ({
    components: { Text },
    setup() {
      return { args };
    },
    template: '<Text v-bind="args">Text 24px Bold</Text>',
  }),
  args: {
    size: "text-2xl",
    weight: "font-bold",
  },
};

export const Text20Semibold: Story = {
  render: (args) => ({
    components: { Text },
    setup() {
      return { args };
    },
    template: '<Text v-bind="args">Text 20px Semibold</Text>',
  }),
  args: {
    size: "text-xl",
    weight: "font-semibold",
  },
};

export const Text16Semibold: Story = {
  render: (args) => ({
    components: { Text },
    setup() {
      return { args };
    },
    template: '<Text v-bind="args">Text 16px Semibold</Text>',
  }),
  args: {
    size: "text-base",
    weight: "font-semibold",
  },
};

export const Text14Bold: Story = {
  render: (args) => ({
    components: { Text },
    setup() {
      return { args };
    },
    template: '<Text v-bind="args">Text 14px Bold</Text>',
  }),
  args: {
    size: "text-sm",
    weight: "font-bold",
  },
};

export const Text14Semibold: Story = {
  render: (args) => ({
    components: { Text },
    setup() {
      return { args };
    },
    template: '<Text v-bind="args">Text 14px Semibold</Text>',
  }),
  args: {
    size: "text-sm",
    weight: "font-semibold",
  },
};

export const Text14Medium: Story = {
  render: (args) => ({
    components: { Text },
    setup() {
      return { args };
    },
    template: '<Text v-bind="args">Text 14px Medium</Text>',
  }),
  args: {
    size: "text-sm",
    weight: "font-medium",
  },
};

export const Text14Normal: Story = {
  render: (args) => ({
    components: { Text },
    setup() {
      return { args };
    },
    template: '<Text v-bind="args">Text 14px Normal</Text>',
  }),
  args: {
    size: "text-sm",
    weight: "font-normal",
  },
};

export const Text12Semibold: Story = {
  render: (args) => ({
    components: { Text },
    setup() {
      return { args };
    },
    template: '<Text v-bind="args">Text 12px Semibold</Text>',
  }),
  args: {
    size: "text-xs",
    weight: "font-semibold",
  },
};
