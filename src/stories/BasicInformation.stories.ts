import type { Meta, StoryObj } from "@storybook/vue3";
import { ref } from "vue";
import BasicInformation from "../components/organisms/BasicInformation.vue";
import { EventType } from "../components/domain/constants";

const meta = {
  title: "Organisms/BasicInformation",
  component: BasicInformation,
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
} satisfies Meta<typeof BasicInformation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { BasicInformation },
    setup() {
      const eventType = ref(EventType.PUBLIC);
      const eventName = ref("");
      const enabled = ref(true);
      const overlayTitleOnBanner = ref(false);
      const overlayTitle = ref("");

      return {
        args,
        eventType,
        eventName,
        enabled,
        overlayTitleOnBanner,
        overlayTitle,
      };
    },
    template: `
      <BasicInformation
        v-bind="args"
        :event-type="eventType"
        :event-name="eventName"
        :enabled="enabled"
        :overlay-title-on-banner="overlayTitleOnBanner"
        :overlay-title="overlayTitle"
        @update:event-type="eventType = $event"
        @update:event-name="eventName = $event"
        @update:enabled="enabled = $event"
        @update:overlay-title-on-banner="overlayTitleOnBanner = $event"
        @update:overlay-title="overlayTitle = $event"
      />
    `,
  }),
  args: {
    eventType: EventType.PUBLIC,
    eventName: "",
    enabled: true,
    overlayTitleOnBanner: false,
    overlayTitle: "",
    isLastStep: false,
  },
};
