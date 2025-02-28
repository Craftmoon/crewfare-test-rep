import type { Meta, StoryObj } from "@storybook/vue3";
import { ref } from "vue";
import TypeSelect from "../components/atoms/TypeSelect.vue";

const meta = {
  title: "Atoms/TypeSelect",
  component: TypeSelect,
  tags: ["autodocs"],
  parameters: {
    backgrounds: {
      default: "dark",
      values: [
        { name: "light", value: "#FFFFFF" },
        { name: "dark", value: "#1A1A1A" },
      ],
    },
  },
  argTypes: {
    modelValue: { control: "text" },
    options: { control: "object" },
  },
} satisfies Meta<typeof TypeSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { TypeSelect },
    setup() {
      const selected = ref(args.modelValue);
      return { args, selected };
    },
    template: `
      <div class="w-64">
        <TypeSelect
          v-bind="args"
          :model-value="selected"
          @update:model-value="selected = $event"
        />
      </div>
    `,
  }),
  args: {
    modelValue: "Option 1",
    options: ["Option 1", "Option 2", "Option 3"],
  },
};

export const WithCustomClass: Story = {
  render: (args) => ({
    components: { TypeSelect },
    setup() {
      const selected = ref(args.modelValue);
      return { args, selected };
    },
    template: `
      <div class="w-96">
        <TypeSelect
          v-bind="args"
          :model-value="selected"
          @update:model-value="selected = $event"
        />
      </div>
    `,
  }),
  args: {
    modelValue: "Small",
    options: ["Small", "Medium", "Large"],
    class: "w-full",
  },
};
