import type { Meta, StoryObj } from "@storybook/vue3";
import TextInput from "../components/atoms/TextInput.vue";

const meta = {
  title: "Atoms/TextInput",
  component: TextInput,
  tags: ["autodocs"],
  args: {
    modelValue: "",
    placeholder: "Type here...",
  },
  argTypes: {
    modelValue: {
      control: "text",
      description: "Current input value",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text",
    },
  },
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    modelValue: "",
    placeholder: "Type here...",
  },
  render: (args) => ({
    components: { TextInput },
    setup() {
      return { args };
    },
    template: `
      <div class="w-64">
        <TextInput v-bind="args" />
      </div>
    `,
  }),
};

export const WithValue: Story = {
  args: {
    modelValue: "Sample Text",
    placeholder: "Type here...",
  },
  render: (args) => ({
    components: { TextInput },
    setup() {
      return { args };
    },
    template: `
      <div class="w-64">
        <TextInput v-bind="args" />
      </div>
    `,
  }),
};
