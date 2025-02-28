import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import CreateEvent from "../pages/CreateEvent.vue";
import { EventType } from "../domain/constants";

describe("CreateEvent", () => {
  it("initializes with correct default values", () => {
    const wrapper = mount(CreateEvent);
    const formData = (wrapper.vm as any).formData;
    expect(formData.eventType).toBe(EventType.PUBLIC);
    expect(formData.enabled).toBe(true);
    expect(formData.minimumNights).toBe(1);
    expect(formData.featuredHotelsTitle).toBe("Featured Hotels");
  });

  it("renders stepper with correct number of steps", () => {
    const wrapper = mount(CreateEvent);
    const steps = wrapper.findComponent({ name: "Stepper" }).props("steps");
    expect(steps).toHaveLength(3);
  });
});
