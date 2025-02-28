import type { Meta, StoryObj } from "@storybook/vue3";
import Background from "../components/atoms/Background.vue";

const meta = {
  title: "Atoms/Background",
  component: Background,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Background>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { Background },
    setup() {
      return { args };
    },
    template: `
      <Background v-bind="args">
        <div class=" text-white h-[600px] w-[960px] mx-auto">
          <h1 class="text-xl font-bold">White text in background </h1>
        </div>
      </Background>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: `
          Default usage of the Background component. 
          It just sets the background color to cfDarkGray.
        `,
      },
    },
  },
};
