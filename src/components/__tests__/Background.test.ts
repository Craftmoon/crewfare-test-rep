import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Background from "../atoms/Background.vue";

describe("Background", () => {
  it("renders with correct base classes", () => {
    const wrapper = mount(Background);
    const container = wrapper.find("div");
    expect(container.classes()).toContain("bg-cfDarkGray");
    expect(container.classes()).toContain("min-h-inherit");
    expect(container.classes()).toContain("h-full");
  });

  it("renders slot content correctly", () => {
    const wrapper = mount(Background, {
      slots: {
        default: '<div class="test-content">Test Content</div>',
      },
    });

    expect(wrapper.find(".test-content").exists()).toBe(true);
    expect(wrapper.find(".test-content").text()).toBe("Test Content");
  });

  it("maintains proper nesting structure", () => {
    const wrapper = mount(Background);
    const innerDiv = wrapper.find(".relative");

    expect(innerDiv.exists()).toBe(true);
    expect(innerDiv.classes()).toContain("z-10");
    expect(innerDiv.classes()).toContain("h-full");
  });
});
