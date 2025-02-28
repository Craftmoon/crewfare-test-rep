import type { Meta, StoryObj } from "@storybook/vue3";
import InfoTooltip from "../components/atoms/InfoTooltip.vue";

const meta = {
  title: "Atoms/InfoTooltip",
  component: InfoTooltip,
  tags: ["autodocs"],
  argTypes: {
    text: { control: "text" },
  },
  decorators: [
    () => ({
      template:
        '<div class="h-48 flex items-center justify-center"><story/></div>',
    }),
  ],
} satisfies Meta<typeof InfoTooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "Lorem ipsum dolor sit amet consectetur. Urna ac duis a gravida.",
  },
};

export const LongText: Story = {
  args: {
    text: "Lorem ipsum dolor sit amet consectetur. Urna ac duis a gravida. Lorem ipsum dolor sit amet consectetur. Urna ac duis a gravida.",
  },
};
