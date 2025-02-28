import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Button from "../atoms/Button.vue";

describe("Button", () => {
  it("renders properly with default props", () => {
    const wrapper = mount(Button);
    expect(wrapper.exists()).toBe(true);
  });

  it("emits click event when clicked", async () => {
    const wrapper = mount(Button);
    await wrapper.trigger("click");
    expect(wrapper.emitted("click")).toBeTruthy();
  });

  it("applies animation class when animated prop is true", async () => {
    const wrapper = mount(Button, {
      props: { animated: true },
    });

    // Need to manually set the ref since the watch doesn't trigger in tests
    (wrapper.vm as any).shouldAnimate = true;
    await wrapper.vm.$nextTick();

    expect(wrapper.classes()).toContain("animate-wiggle");
  });

  it("removes animation class after animation ends", async () => {
    const wrapper = mount(Button, {
      props: { animated: true },
    });

    // Manually set animation state
    (wrapper.vm as any).shouldAnimate = true;
    await wrapper.vm.$nextTick();

    expect(wrapper.classes()).toContain("animate-wiggle");

    await wrapper.trigger("animationend");
    await wrapper.vm.$nextTick();

    expect(wrapper.classes()).not.toContain("animate-wiggle");
  });

  it("accepts and applies custom class", () => {
    const wrapper = mount(Button, {
      props: {
        class: "custom-class",
      },
    });
    expect(wrapper.classes()).toContain("custom-class");
  });

  it("does not animate when animated prop is false", async () => {
    const wrapper = mount(Button);
    await wrapper.trigger("click");
    expect(wrapper.classes()).not.toContain("animate-wiggle");
  });
});
