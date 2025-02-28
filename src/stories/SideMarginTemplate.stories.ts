import type { Meta, StoryObj } from "@storybook/vue3";
import SideMarginTemplate from "../components/templates/SideMarginTemplate.vue";

const meta = {
  title: "Templates/SideMarginTemplate",
  component: SideMarginTemplate,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "A template component that provides a consistent layout structure with a header and background. The component automatically applies a 180px margin from the left side and a 20px margin from the right side of the viewport.",
      },
    },
  },
  argTypes: {},
  args: {},
} satisfies Meta<typeof SideMarginTemplate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { SideMarginTemplate },
    setup() {
      return { args };
    },
    template: `
      <SideMarginTemplate v-bind="args">
        <div class="p-4">
          <h3 class="font-medium mb-2">Content</h3>
          <p class="text-gray-600">This is a simple padded text content example.</p>
        </div>
      </SideMarginTemplate>
    `,
  }),
};
