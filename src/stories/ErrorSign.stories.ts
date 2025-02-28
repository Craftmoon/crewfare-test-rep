import type { Meta, StoryObj } from "@storybook/vue3";
import ErrorSign from "../components/atoms/ErrorSign.vue";

const meta = {
  title: "Atoms/ErrorSign",
  component: ErrorSign,
  tags: ["autodocs"],
} satisfies Meta<typeof ErrorSign>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { ErrorSign },
    setup() {
      return { args };
    },
    template: '<ErrorSign v-bind="args" />',
  }),
};
