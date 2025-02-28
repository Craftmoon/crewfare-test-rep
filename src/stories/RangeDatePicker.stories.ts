import type { Meta, StoryObj } from "@storybook/vue3";
import { ref } from "vue";
import RangeDatePicker from "../components/atoms/RangeDatePicker.vue";

const meta = {
  title: "Atoms/RangeDatePicker",
  component: RangeDatePicker,
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
    modelValue: { control: "object" },
    label: { control: "text" },
    placeholder: { control: "text" },
  },
} satisfies Meta<typeof RangeDatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { RangeDatePicker },
    setup() {
      const dates = ref<[Date, Date]>([new Date(), new Date()]);
      return { args, dates };
    },
    template: `
      <div class="w-96">
        <RangeDatePicker
          v-bind="args"
          :model-value="dates"
          @update:model-value="dates = $event"
        />
      </div>
    `,
  }),
  args: {
    modelValue: [new Date(), new Date()],
    placeholder: "Select date range",
  },
};

export const WithLabel: Story = {
  render: (args) => ({
    components: { RangeDatePicker },
    setup() {
      const dates = ref<[Date, Date]>([new Date(), new Date()]);
      return { args, dates };
    },
    template: `
      <div class="w-96">
        <RangeDatePicker
          v-bind="args"
          :model-value="dates"
          @update:model-value="dates = $event"
        />
      </div>
    `,
  }),
  args: {
    modelValue: [new Date(), new Date()],
    label: "Event Dates",
    placeholder: "Select date range",
  },
};

export const Empty: Story = {
  render: (args) => ({
    components: { RangeDatePicker },
    setup() {
      const dates = ref<[Date, Date] | null>(null);
      return { args, dates };
    },
    template: `
      <div class="w-96">
        <RangeDatePicker
          v-bind="args"
          :model-value="dates"
          @update:model-value="dates = $event"
        />
      </div>
    `,
  }),
  args: {
    modelValue: null,
    placeholder: "Choose your event dates",
  },
};
