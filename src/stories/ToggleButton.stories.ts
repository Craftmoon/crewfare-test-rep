import type { Meta, StoryObj } from "@storybook/vue3";
import { ref } from "vue";
import ToggleButton from "../components/atoms/ToggleButton.vue";

const meta = {
  title: "Atoms/ToggleButton",
  component: ToggleButton,
  tags: ["autodocs"],
  argTypes: {
    active: {
      control: "select",
      options: ["enable", "disable"],
      description: "Current state of the toggle button",
    },
    onToggle: {
      description: "Event emitted when toggle state changes",
    },
  },
} satisfies Meta<typeof ToggleButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const EnabledState: Story = {
  args: {
    active: "enable",
  },
};

export const DisabledState: Story = {
  args: {
    active: "disable",
  },
};

export const Interactive: Story = {
  args: {
    active: "enable",
  },
  render: () => ({
    components: { ToggleButton },
    setup() {
      const active = ref("enable");
      return {
        active,
        handleToggle: (value: "enable" | "disable") => {
          active.value = value;
        },
      };
    },
    template: '<ToggleButton :active="active" @toggle="handleToggle" />',
  }),
};
