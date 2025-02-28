import type { Meta, StoryObj } from "@storybook/vue3";
import { ref } from "vue";
import TaxesAndFees from "../components/organisms/TaxesAndFees.vue";
import { TaxFeeTypes } from "../components/domain/constants";

const meta = {
  title: "Organisms/TaxesAndFees",
  component: TaxesAndFees,
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
} satisfies Meta<typeof TaxesAndFees>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { TaxesAndFees },
    setup() {
      const taxes = ref([
        { name: "Sales Tax", amount: 8.5, type: TaxFeeTypes.PERCENTAGE },
        { name: "Service Fee", amount: 25, type: TaxFeeTypes.FIXED },
      ]);

      return { args, taxes };
    },
    template: `
      <TaxesAndFees
        v-bind="args"
        :model-value="taxes"
        @update:model-value="taxes = $event"
      />
    `,
  }),
  args: {
    modelValue: [
      { name: "Sales Tax", amount: 8.5, type: TaxFeeTypes.PERCENTAGE },
      { name: "Service Fee", amount: 25, type: TaxFeeTypes.FIXED },
    ],
  },
};

export const Empty: Story = {
  render: (args) => ({
    components: { TaxesAndFees },
    setup() {
      const taxes = ref([{ name: "", amount: 0, type: TaxFeeTypes.FIXED }]);
      return { args, taxes };
    },
    template: `
      <TaxesAndFees
        v-bind="args"
        :model-value="taxes"
        @update:model-value="taxes = $event"
      />
    `,
  }),
  args: {
    modelValue: [{ name: "", amount: 0, type: TaxFeeTypes.FIXED }],
  },
};
