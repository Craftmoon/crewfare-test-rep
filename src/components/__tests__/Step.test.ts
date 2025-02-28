import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Step from "../atoms/Step.vue";

describe("Step", () => {
  it("renders properly with default props", () => {
    const wrapper = mount(Step, {
      props: {
        number: 1,
        title: "Step Title",
      },
    });

    expect(wrapper.text()).toContain("1");
    expect(wrapper.text()).toContain("Step Title");
  });

  it("applies active styles when step is active", () => {
    const wrapper = mount(Step, {
      props: {
        number: 1,
        title: "Step Title",
        isActive: true,
      },
    });

    expect(wrapper.find(".bg-cfPurple").exists()).toBe(true);
  });

  it("applies completed styles when step is completed", () => {
    const wrapper = mount(Step, {
      props: {
        number: 1,
        title: "Step Title",
        isCompleted: true,
      },
    });

    expect(wrapper.find(".bg-cfGreen").exists()).toBe(true);
  });
});
