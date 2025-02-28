import type { Meta, StoryObj } from "@storybook/vue3";
import { ref } from "vue";
import Dates from "../components/organisms/Dates.vue";
import { TaxFeeTypes } from "../components/domain/constants";

const meta = {
  title: "Organisms/Dates",
  component: Dates,
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
} satisfies Meta<typeof Dates>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { Dates },
    setup() {
      const bookableDates = ref<[Date, Date]>([new Date(), new Date()]);
      const eventDates = ref([{ startDate: new Date(), endDate: new Date() }]);
      const checkInAndOut = ref<[Date, Date]>([new Date(), new Date()]);
      const taxesAndFees = ref([
        { name: "Tax", amount: 10, type: TaxFeeTypes.PERCENTAGE },
      ]);

      return {
        args,
        bookableDates,
        eventDates,
        checkInAndOut,
        taxesAndFees,
      };
    },
    template: `
      <Dates
        v-bind="args"
        :bookable-dates="bookableDates"
        :event-dates="eventDates"
        :check-in-and-out="checkInAndOut"
        :taxes-and-fees="taxesAndFees"
        @update:bookable-dates="bookableDates = $event"
        @update:event-dates="eventDates = $event"
        @update:check-in-out="checkInAndOut = $event"
        @update:taxes-and-fees="taxesAndFees = $event"
      />
    `,
  }),
  args: {
    taxesAndFees: [{ name: "Tax", amount: 10, type: TaxFeeTypes.PERCENTAGE }],
    bookableDates: [new Date(), new Date()],
    eventDates: [{ startDate: new Date(), endDate: new Date() }],
    checkInAndOut: [new Date(), new Date()],
  },
};
