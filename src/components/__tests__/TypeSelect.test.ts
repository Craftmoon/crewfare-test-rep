import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import TypeSelect from "../atoms/TypeSelect.vue";

describe("TypeSelect", () => {
  const defaultProps = {
    modelValue: "Option 1",
    options: ["Option 1", "Option 2", "Option 3"],
  };

  it("renders with provided options", () => {
    const wrapper = mount(TypeSelect, {
      props: defaultProps,
    });

    const options = wrapper.findAll("option");
    expect(options).toHaveLength(3);
    expect(options[0].text()).toBe("Option 1");
    expect(options[1].text()).toBe("Option 2");
    expect(options[2].text()).toBe("Option 3");
  });

  it("emits update:modelValue when selection changes", async () => {
    const wrapper = mount(TypeSelect, {
      props: defaultProps,
    });

    await wrapper.find("select").setValue("Option 2");
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual(["Option 2"]);
  });

  it("applies custom classes when provided", () => {
    const wrapper = mount(TypeSelect, {
      props: {
        ...defaultProps,
        class: "custom-class",
      },
    });

    const select = wrapper.find("select");
    expect(select.classes()).toContain("custom-class");
  });

  it("displays correct selected value", () => {
    const wrapper = mount(TypeSelect, {
      props: defaultProps,
    });

    const select = wrapper.find("select");
    expect(select.element.value).toBe("Option 1");
  });

  it("renders with correct base styling classes", () => {
    const wrapper = mount(TypeSelect, {
      props: defaultProps,
    });

    const select = wrapper.find("select");
    expect(select.classes()).toContain("text-sm");
    expect(select.classes()).toContain("font-medium");
    expect(select.classes()).toContain("bg-cfLightGray");
    expect(select.classes()).toContain("text-white");
  });
});
