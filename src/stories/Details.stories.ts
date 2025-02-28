import type { Meta, StoryObj } from "@storybook/vue3";
import { ref } from "vue";
import Details from "../components/organisms/Details.vue";

const meta = {
  title: "Organisms/Details",
  component: Details,
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
} satisfies Meta<typeof Details>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { Details },
    setup() {
      const subdomain = ref("");
      const eventAddress = ref("");
      const venueName = ref("");
      const featuredHotelsTitle = ref("Featured Hotels");
      const minimumNights = ref(1);

      return {
        args,
        subdomain,
        eventAddress,
        venueName,
        featuredHotelsTitle,
        minimumNights,
      };
    },
    template: `
      <Details
        v-bind="args"
        :subdomain="subdomain"
        :event-address="eventAddress"
        :venue-name="venueName"
        :featured-hotels-title="featuredHotelsTitle"
        :minimum-nights="minimumNights"
        @update:subdomain="subdomain = $event"
        @update:event-address="eventAddress = $event"
        @update:venue-name="venueName = $event"
        @update:featured-hotels-title="featuredHotelsTitle = $event"
        @update:minimum-nights="minimumNights = $event"
      />
    `,
  }),
  args: {
    isLastStep: false,
  },
};
