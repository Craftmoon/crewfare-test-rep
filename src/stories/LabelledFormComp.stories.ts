import type { Meta, StoryObj } from "@storybook/vue3";
import LabelledFormComp from "../components/molecules/LabelledFormComp.vue";
import TextInput from "../components/atoms/TextInput.vue";

const meta = {
  title: "Molecules/LabelledFormComp",
  component: LabelledFormComp,
  tags: ["autodocs"],
  args: {
    label: "Form Label",
  },
} satisfies Meta<typeof LabelledFormComp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithTextInput: Story = {
  args: {
    label: "Event Name",
  },
  render: (args) => ({
    components: { LabelledFormComp, TextInput },
    setup() {
      return { args };
    },
    template: `
      <div class="w-64 bg-black p-4">
        <LabelledFormComp v-bind="args">
          <TextInput model-value="" placeholder="Type here..." />
        </LabelledFormComp>
      </div>
    `,
  }),
};

export const WithCustomContent: Story = {
  args: {
    label: "Custom Content",
  },
  render: (args) => ({
    components: { LabelledFormComp },
    setup() {
      return { args };
    },
    template: `
      <div class="w-64 bg-black p-4">
        <LabelledFormComp v-bind="args">
          <div class="bg-cfLightGray text-white p-2 rounded">
            Custom content goes here
          </div>
        </LabelledFormComp>
      </div>
    `,
  }),
};
