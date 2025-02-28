import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import RangeDatePicker from "../atoms/RangeDatePicker.vue";

describe("RangeDatePicker", () => {
  it("renders with default props", () => {
    const wrapper = mount(RangeDatePicker, {
      props: {
        modelValue: null,
        placeholder: "Select date range",
      },
      global: {
        components: {
          VueDatePicker: {
            template: '<div class="mock-datepicker"></div>',
          },
        },
      },
    });

    expect(wrapper.find(".bg-cfLightGray").exists()).toBe(true);
    expect(wrapper.text()).toContain("Select date range");
  });

  it("emits update:model-value when date changes", async () => {
    const wrapper = mount(RangeDatePicker, {
      props: {
        modelValue: null,
      },
      global: {
        components: {
          VueDatePicker: {
            template: '<div class="mock-datepicker"></div>',
            props: ["modelValue"],
            emits: ["update:modelValue"],
          },
        },
      },
    });

    const newDates: [Date, Date] = [new Date(), new Date()];
    await wrapper
      .findComponent({ name: "VueDatePicker" })
      .vm.$emit("update:modelValue", newDates);

    expect(wrapper.emitted("update:model-value")?.[0]).toEqual([newDates]);
  });

  it("formats date range correctly", () => {
    const startDate = new Date("2024-01-01T12:00:00Z");
    const endDate = new Date("2024-01-05T12:00:00Z");
    const dates: [Date, Date] = [startDate, endDate];

    const wrapper = mount(RangeDatePicker, {
      props: {
        modelValue: dates,
      },
      global: {
        components: {
          VueDatePicker: {
            template: '<div class="mock-datepicker"></div>',
          },
        },
      },
    });

    const displayedText = wrapper.text();
    const formattedStartDate = startDate.toLocaleDateString();
    const formattedEndDate = endDate.toLocaleDateString();
    const expectedText = `${formattedStartDate} - ${formattedEndDate}`;

    expect(displayedText).toContain(expectedText);
  });
});
