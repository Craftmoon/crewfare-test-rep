import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import NumberInput from "../atoms/NumberInput.vue";

describe("NumberInput", () => {
  it("renders properly with default props", () => {
    const wrapper = mount(NumberInput, {
      props: {
        modelValue: 5,
      },
    });

    expect(wrapper.find("input").exists()).toBe(true);
    expect(wrapper.find("input").element.value).toBe("5");
  });

  it("emits update:modelValue when input changes", async () => {
    const wrapper = mount(NumberInput, {
      props: {
        modelValue: 5,
      },
    });

    const input = wrapper.find("input");
    await input.setValue("10");

    expect(wrapper.emitted("update:modelValue")).toBeTruthy();
    expect(wrapper.emitted("update:modelValue")![0]).toEqual([10]);
  });

  it("respects min and max constraints", async () => {
    const wrapper = mount(NumberInput, {
      props: {
        modelValue: 5,
        min: 0,
        max: 10,
      },
    });

    const input = wrapper.find("input");

    await input.setValue("15");
    expect(wrapper.emitted("update:modelValue")![0]).toEqual([10]);

    await input.setValue("-5");
    expect(wrapper.emitted("update:modelValue")![1]).toEqual([0]);
  });

  it("increments value when up arrow is clicked", async () => {
    const wrapper = mount(NumberInput, {
      props: {
        modelValue: 5,
      },
    });

    await wrapper.find("img[alt='Increment']").trigger("click");

    expect(wrapper.emitted("update:modelValue")).toBeTruthy();
    expect(wrapper.emitted("update:modelValue")![0]).toEqual([6]);
  });

  it("decrements value when down arrow is clicked", async () => {
    const wrapper = mount(NumberInput, {
      props: {
        modelValue: 5,
      },
    });

    await wrapper.find("img[alt='Decrement']").trigger("click");

    expect(wrapper.emitted("update:modelValue")).toBeTruthy();
    expect(wrapper.emitted("update:modelValue")![0]).toEqual([4]);
  });

  it("displays error message when provided", () => {
    const wrapper = mount(NumberInput, {
      props: {
        modelValue: 5,
        error: "This is an error message",
      },
    });

    expect(wrapper.text()).toContain("This is an error message");
  });

  it("prevents non-numeric input", async () => {
    const wrapper = mount(NumberInput, {
      props: {
        modelValue: 5,
      },
    });

    const input = wrapper.find("input");
    const event = {
      key: "a",
      preventDefault: vi.fn(),
    };

    await input.trigger("keypress", event);

    expect(event.preventDefault).toHaveBeenCalled();
  });
});
