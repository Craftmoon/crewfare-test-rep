import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import LabelledFormComp from "../molecules/LabelledFormComp.vue";
import Text from "../atoms/Text.vue";

describe("LabelledFormComp", () => {
  it("renders label correctly", () => {
    const wrapper = mount(LabelledFormComp, {
      props: {
        label: "Test Label",
      },
      global: {
        components: { Text },
      },
    });

    expect(wrapper.text()).toContain("Test Label");
  });

  it("renders slot content", () => {
    const wrapper = mount(LabelledFormComp, {
      props: {
        label: "Test Label",
      },
      slots: {
        default: '<div class="test-content">Content</div>',
      },
      global: {
        components: { Text },
      },
    });

    expect(wrapper.find(".test-content").exists()).toBe(true);
    expect(wrapper.find(".test-content").text()).toBe("Content");
  });

  it("applies custom classes when provided", () => {
    const wrapper = mount(LabelledFormComp, {
      props: {
        label: "Test Label",
        class: "custom-class",
      },
      global: {
        components: { Text },
      },
    });

    expect(wrapper.classes()).toContain("custom-class");
  });
});
