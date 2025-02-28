import type { Meta, StoryObj } from "@storybook/vue3";
import { ref } from "vue";
import NumberInput from "../components/atoms/NumberInput.vue";

const meta = {
  title: "Atoms/NumberInput",
  component: NumberInput,
  tags: ["autodocs"],
  argTypes: {
    modelValue: { control: "number" },
    min: { control: "number" },
    max: { control: "number" },
    error: { control: "text" },
  },
  render: (args) => ({
    components: { NumberInput },
    setup() {
      const value = ref(args.modelValue);
      return { args, value };
    },
    template: `
      <NumberInput 
        v-bind="args" 
        :model-value="value" 
        @update:model-value="value = $event" 
      />
    `,
  }),
};

export default meta;

export const Default = {
  args: {
    modelValue: 5,
  },
};

export const WithMinMax = {
  args: {
    modelValue: 5,
    min: 0,
    max: 10,
  },
};

export const WithError = {
  args: {
    modelValue: 5,
    error: "This is an error message",
  },
};

export const WithCustomClass = {
  args: {
    modelValue: 5,
    class: "w-64",
  },
};
