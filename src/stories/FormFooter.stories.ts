import type { Meta, StoryObj } from "@storybook/vue3";
import FormFooter from "../components/molecules/FormFooter.vue";

const meta = {
  title: "Molecules/FormFooter",
  component: FormFooter,
  tags: ["autodocs"],
  argTypes: {
    onSave: { action: "save" },
    onBack: { action: "back" },
    onForward: { action: "forward" },
  },
} satisfies Meta<typeof FormFooter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onSave: () => console.log("save clicked"),
    onBack: () => console.log("back clicked"),
    onForward: () => console.log("forward clicked"),
  },
};
