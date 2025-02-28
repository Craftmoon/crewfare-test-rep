import type { Meta, StoryObj } from "@storybook/vue3";
import Header from "../components/atoms/Header.vue";

const meta = {
  title: "Atoms/Header",
  component: Header,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Main header component with Crewfare logo on black background",
      },
    },
    layout: "fullscreen",
    viewport: {
      defaultViewport: "desktop",
    },
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => ({
    components: { Header },
    setup() {
      return { args };
    },
    template: '<Header v-bind="args" />',
  }),
  args: {
    // Add any props that Header component accepts here
  },
};
