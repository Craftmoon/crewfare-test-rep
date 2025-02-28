import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Checkbox from "../atoms/Checkbox.vue";
import Text from "../atoms/Text.vue";

describe("Checkbox", () => {
  it("renders properly with label", () => {
    const wrapper = mount(Checkbox, {
      props: {
        label: "Test Checkbox",
        modelValue: false,
      },
      global: {
        components: { Text },
      },
    });

    expect(wrapper.text()).toContain("Test Checkbox");
    expect(wrapper.find('input[type="checkbox"]').exists()).toBe(true);
  });

  it("emits update:modelValue event when clicked", async () => {
    const wrapper = mount(Checkbox, {
      props: {
        label: "Test Checkbox",
        modelValue: false,
      },
      global: {
        components: { Text },
      },
    });

    await wrapper.find('input[type="checkbox"]').setValue(true);
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual([true]);
  });

  it("displays correct checked state", () => {
    const wrapper = mount(Checkbox, {
      props: {
        label: "Test Checkbox",
        modelValue: true,
      },
      global: {
        components: { Text },
      },
    });

    expect(
      (wrapper.find('input[type="checkbox"]').element as HTMLInputElement)
        .checked
    ).toBe(true);
    expect(wrapper.find('[data-testid="checkbox-checked"]').exists()).toBe(
      true
    );
  });
});
