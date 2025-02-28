import type { Meta, StoryObj } from "@storybook/vue3";
import Step from "../components/atoms/Step.vue";

const meta = {
  title: "Atoms/Step",
  component: Step,
  tags: ["autodocs"],
  argTypes: {
    number: {
      control: { type: "number" },
    },
    title: {
      control: { type: "text" },
    },
    isActive: {
      control: { type: "boolean" },
    },
    isCompleted: {
      control: { type: "boolean" },
    },
    hasError: {
      control: { type: "boolean" },
    },
    isDisabled: {
      control: { type: "boolean" },
    },
  },
} satisfies Meta<typeof Step>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    number: 1,
    title: "Step Title",
  },
};

export const Active: Story = {
  args: {
    number: 2,
    title: "Active Step",
    isActive: true,
  },
};

export const Completed: Story = {
  args: {
    number: 3,
    title: "Completed Step",
    isCompleted: true,
  },
};
