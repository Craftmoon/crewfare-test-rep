import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Dates from "../organisms/Dates.vue";
import { TaxFeeTypes } from "../domain/constants";

describe("Dates", () => {
  const defaultProps = {
    taxesAndFees: [{ name: "Tax", amount: 10, type: TaxFeeTypes.PERCENTAGE }],
    bookableDates: [new Date(), new Date()] as [Date, Date],
    eventDates: [{ startDate: new Date(), endDate: new Date() }],
    checkInAndOut: [new Date(), new Date()] as [Date, Date],
  };

  it("emits update events when dates change", async () => {
    const wrapper = mount(Dates, {
      props: defaultProps,
    });

    const newDates: [Date, Date] = [new Date(), new Date()];
    const rangePickers = wrapper.findAllComponents({ name: "RangeDatePicker" });

    await rangePickers[0].vm.$emit("update:modelValue", newDates);
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted("update:bookable-dates")?.[0]).toEqual([newDates]);

    await rangePickers[2].vm.$emit("update:modelValue", newDates);
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted("update:check-in-out")?.[0]).toEqual([newDates]);
  });

  it("handles removing event date ranges", async () => {
    const wrapper = mount(Dates, {
      props: {
        ...defaultProps,
        eventDates: [
          { startDate: new Date(), endDate: new Date() },
          { startDate: new Date(), endDate: new Date() },
        ],
      },
    });

    const deleteButton = wrapper.find('img[alt="Delete"]');
    await deleteButton.trigger("click");
    await wrapper.vm.$nextTick();

    const rangePickers = wrapper.findAllComponents({ name: "RangeDatePicker" });
    expect(rangePickers).toHaveLength(4); // Bookable, 2 Event Dates, CheckIn/Out
  });
});
