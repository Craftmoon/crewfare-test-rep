import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Text from "../atoms/Text.vue";

describe("Text", () => {
  // Basic Rendering
  it("renders properly with default slot content", () => {
    const wrapper = mount(Text, {
      slots: {
        default: "Hello World",
      },
    });
    expect(wrapper.text()).toBe("Hello World");
  });

  it("renders empty when no slot content provided", () => {
    const wrapper = mount(Text);
    expect(wrapper.text()).toBe("");
  });

  it("renders HTML content in slot correctly", () => {
    const wrapper = mount(Text, {
      slots: {
        default: '<span class="test">Hello</span>',
      },
    });
    expect(wrapper.find("span.test").exists()).toBe(true);
  });

  // Color Tests
  it("applies the correct default color class", () => {
    const wrapper = mount(Text);
    expect(wrapper.classes()).toContain("text-gray-900");
  });

  it("applies custom color class when color prop is provided", () => {
    const wrapper = mount(Text, {
      props: {
        color: "text-white",
      },
    });
    expect(wrapper.classes()).toContain("text-white");
  });

  it("handles multiple color variations", () => {
    const colors = ["text-white", "text-gray", "text-cfPurple", "text-red"];
    colors.forEach((color) => {
      const wrapper = mount(Text, {
        props: { color },
      });
      expect(wrapper.classes()).toContain(color);
    });
  });

  // Size Tests
  it("applies default size class when no size prop provided", () => {
    const wrapper = mount(Text);
    expect(wrapper.classes()).toContain("text-base");
  });

  it("applies custom size class when size prop is provided", () => {
    const wrapper = mount(Text, {
      props: {
        size: "text-lg",
      },
    });
    expect(wrapper.classes()).toContain("text-lg");
  });

  it("handles all possible size variations", () => {
    const sizes = [
      "text-xs",
      "text-sm",
      "text-base",
      "text-lg",
      "text-xl",
      "text-2xl",
      "text-3xl",
    ];
    sizes.forEach((size) => {
      const wrapper = mount(Text, {
        props: { size },
      });
      expect(wrapper.classes()).toContain(size);
    });
  });

  // Weight Tests
  it("applies default font weight when no weight prop provided", () => {
    const wrapper = mount(Text);
    expect(wrapper.classes()).toContain("font-normal");
  });

  it("applies custom font weight when weight prop is provided", () => {
    const weights = [
      "font-thin",
      "font-light",
      "font-normal",
      "font-medium",
      "font-semibold",
      "font-bold",
      "font-extrabold",
    ];
    weights.forEach((weight) => {
      const wrapper = mount(Text, {
        props: { weight },
      });
      expect(wrapper.classes()).toContain(weight);
    });
  });

  // Alignment Tests
  it("applies default text alignment when no align prop provided", () => {
    const wrapper = mount(Text);
    expect(wrapper.classes()).not.toContain("text-center");
    expect(wrapper.classes()).not.toContain("text-right");
    expect(wrapper.classes()).not.toContain("text-justify");
  });

  it("applies custom text alignment when align prop is provided", () => {
    const alignments = ["center", "right", "justify"];
    alignments.forEach((align) => {
      const wrapper = mount(Text, {
        props: {
          align: `text-${align}`,
        },
      });
      expect(wrapper.classes()).toContain(`text-${align}`);
    });
  });

  // Custom Class Tests
  it("accepts and applies custom class", () => {
    const wrapper = mount(Text, {
      props: {
        class: "custom-class",
      },
    });
    expect(wrapper.classes()).toContain("custom-class");
  });

  it("combines multiple custom classes", () => {
    const wrapper = mount(Text, {
      props: {
        class: "custom-class-1 custom-class-2",
      },
    });
    expect(wrapper.classes()).toContain("custom-class-1");
    expect(wrapper.classes()).toContain("custom-class-2");
  });

  // Combination Tests
  it("correctly combines multiple props", () => {
    const wrapper = mount(Text, {
      props: {
        color: "text-white",
        size: "text-lg",
        weight: "font-bold",
        align: "text-center",
        class: "custom-class",
      },
    });

    expect(wrapper.classes()).toContain("text-white");
    expect(wrapper.classes()).toContain("text-lg");
    expect(wrapper.classes()).toContain("font-bold");
    expect(wrapper.classes()).toContain("text-center");
    expect(wrapper.classes()).toContain("custom-class");
  });

  // Edge Cases
  it("handles undefined props gracefully", () => {
    const wrapper = mount(Text, {
      props: {
        color: undefined,
        size: undefined,
        weight: undefined,
        align: undefined,
      },
    });
    expect(wrapper.classes()).toContain("text-gray-900");
    expect(wrapper.classes()).toContain("text-base");
    expect(wrapper.classes()).toContain("font-normal");
  });

  it("handles invalid prop values without breaking", () => {
    const wrapper = mount(Text, {
      props: {
        color: "invalid-color",
        size: "invalid-size",
      },
    });
    expect(wrapper.exists()).toBe(true);
  });
});
