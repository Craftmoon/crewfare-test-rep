import type { Meta, StoryObj } from "@storybook/vue3";
import Checkbox from "../components/atoms/Checkbox.vue";

const meta = {
  title: "Atoms/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  args: {
    label: "Overlay Title on Banner",
    modelValue: false,
  },
  argTypes: {
    modelValue: {
      control: "boolean",
      description: "The checked state of the checkbox",
    },
    label: {
      control: "text",
      description: "Text label displayed next to the checkbox",
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Unchecked: Story = {
  args: {
    label: "Overlay Title on Banner",
    modelValue: false,
  },
};

export const Checked: Story = {
  args: {
    label: "Overlay Title on Banner",
    modelValue: true,
  },
};

export const LongLabel: Story = {
  args: {
    label:
      "This is a checkbox with a very long label that might wrap to multiple lines",
    modelValue: false,
  },
};
