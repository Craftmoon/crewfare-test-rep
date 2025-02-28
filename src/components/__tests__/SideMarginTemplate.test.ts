import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import SideMarginTemplate from "../templates/SideMarginTemplate.vue";

describe("SideMarginTemplate", () => {
  it("renders slot content", () => {
    const wrapper = mount(SideMarginTemplate, {
      slots: {
        default: '<div class="test-content">Test Content</div>',
      },
    });

    expect(wrapper.find(".test-content").exists()).toBe(true);
    expect(wrapper.text()).toBe("Test Content");
  });

  it("applies correct base classes", () => {
    const wrapper = mount(SideMarginTemplate);

    expect(wrapper.classes()).toContain("flex");
    expect(wrapper.classes()).toContain("flex-col");
    expect(wrapper.classes()).toContain("h-screen");
  });
});
