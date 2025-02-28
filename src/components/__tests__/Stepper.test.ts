import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Stepper from "../molecules/Stepper.vue";
import Step from "../atoms/Step.vue";

describe("Stepper", () => {
  const steps = [
    {
      title: "Step 1",
      isCompleted: false,
      hasError: false,
    },
    {
      title: "Step 2",
      isCompleted: false,
      hasError: false,
    },
    {
      title: "Step 3",
      isCompleted: false,
      hasError: false,
    },
  ];

  it("renders all steps", () => {
    const wrapper = mount(Stepper, {
      props: {
        steps,
        currentStep: 0,
      },
      global: {
        components: {
          Step,
        },
      },
    });

    expect(wrapper.findAllComponents(Step)).toHaveLength(3);
  });

  it("marks current step as active", () => {
    const wrapper = mount(Stepper, {
      props: {
        steps,
        currentStep: 1,
      },
      global: {
        components: {
          Step,
        },
      },
    });

    const stepComponents = wrapper.findAllComponents(Step);
    expect(stepComponents[1].props("isActive")).toBe(true);
  });

  it("marks previous steps as completed", () => {
    const steps = [
      { title: "Step 1", isCompleted: true, hasError: false },
      { title: "Step 2", isCompleted: true, hasError: false },
      { title: "Step 3", isCompleted: false, hasError: false },
    ];

    const wrapper = mount(Stepper, {
      props: {
        steps,
        currentStep: 2,
      },
      global: {
        components: {
          Step,
        },
      },
    });

    const stepComponents = wrapper.findAllComponents(Step);
    expect(stepComponents[0].props("isCompleted")).toBe(true);
    expect(stepComponents[1].props("isCompleted")).toBe(true);
    expect(stepComponents[2].props("isCompleted")).toBe(false);
  });
});
