import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import TextInput from "../atoms/TextInput.vue";

describe("TextInput", () => {
  it("renders with initial value", () => {
    const wrapper = mount(TextInput, {
      props: {
        modelValue: "test value",
        placeholder: "Type here",
      },
    });

    const input = wrapper.find("input");
    expect(input.exists()).toBe(true);
    expect(input.element.value).toBe("test value");
    expect(input.element.placeholder).toBe("Type here");
  });

  it("emits update:modelValue when input changes", async () => {
    const wrapper = mount(TextInput, {
      props: {
        modelValue: "",
        placeholder: "Type here",
      },
    });

    const input = wrapper.find("input");
    await input.setValue("new value");
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual(["new value"]);
  });

  it("applies custom classes when provided", () => {
    const wrapper = mount(TextInput, {
      props: {
        modelValue: "",
        class: "custom-class",
      },
    });

    expect(wrapper.find("input").classes()).toContain("custom-class");
  });
});
