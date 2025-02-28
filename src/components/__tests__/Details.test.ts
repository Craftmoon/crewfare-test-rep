import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Details from "../organisms/Details.vue";

describe("Details", () => {
  const defaultProps = {
    subdomain: "",
    eventAddress: "",
    venueName: "",
    featuredHotelsTitle: "Featured Hotels",
    minimumNights: 1,
  };

  it("emits update events when form fields change", async () => {
    const wrapper = mount(Details, {
      props: defaultProps,
    });

    await wrapper
      .findComponent({ name: "TextInput", props: { placeholder: "Type here" } })
      .vm.$emit("update:modelValue", "test-subdomain");
    expect(wrapper.emitted("update:subdomain")?.[0]).toEqual([
      "test-subdomain",
    ]);

    const inputs = wrapper.findAllComponents({ name: "TextInput" });
    await inputs[1].vm.$emit("update:modelValue", "123 Test St");
    expect(wrapper.emitted("update:eventAddress")?.[0]).toEqual([
      "123 Test St",
    ]);
  });

  it("handles minimum nights updates", async () => {
    const wrapper = mount(Details, {
      props: defaultProps,
    });

    await wrapper
      .findComponent({ name: "NumberInput" })
      .vm.$emit("update:modelValue", 2);
    expect(wrapper.emitted("update:minimumNights")?.[0]).toEqual([2]);
  });
});
