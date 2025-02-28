import type { Meta, StoryObj } from "@storybook/vue3";
import ImageBanner from "../components/atoms/ImageBanner.vue";

const meta = {
  title: "Atoms/ImageBanner",
  component: ImageBanner,
  tags: ["autodocs"],
  argTypes: {
    showOverlay: { control: "boolean" },
    overlayText: { control: "text" },
  },
} satisfies Meta<typeof ImageBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    showOverlay: false,
  },
};

export const WithOverlay = {
  args: {
    showOverlay: true,
    overlayText: "Event Title",
  },
};
