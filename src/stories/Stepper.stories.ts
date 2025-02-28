import type { Meta, StoryObj } from "@storybook/vue3";
import { ref } from "vue";
import Stepper from "../components/molecules/Stepper.vue";

const meta = {
  title: "Molecules/Stepper",
  component: Stepper,
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
} satisfies Meta<typeof Stepper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    currentStep: 1,
    steps: [
      {
        title: "Basic Information",
        isCompleted: true,
        hasError: false,
      },
      {
        title: "Details",
        isCompleted: false,
        hasError: true,
      },
      {
        title: "Dates",
        isCompleted: false,
        hasError: false,
      },
    ],
  },
  render: (args) => ({
    components: { Stepper },
    setup() {
      const currentStep = ref(args.currentStep);
      const steps = ref(args.steps);
      return { currentStep, steps };
    },
    template: `
      <Stepper 
        v-model:currentStep="currentStep"
        :steps="steps"
      />
    `,
  }),
};
