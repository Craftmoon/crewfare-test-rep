import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import BasicInformation from "../organisms/BasicInformation.vue";
import { EventType } from "../domain/constants";

describe("BasicInformation", () => {
  const defaultProps = {
    eventType: EventType.PUBLIC,
    eventName: "",
    enabled: true,
    overlayTitleOnBanner: false,
    overlayTitle: "",
  };

  it("emits update events when form fields change", async () => {
    const wrapper = mount(BasicInformation, {
      props: defaultProps,
    });

    await wrapper
      .findComponent({ name: "TypeSelect" })
      .vm.$emit("update:modelValue", EventType.PRIVATE);
    expect(wrapper.emitted("update:eventType")?.[0]).toEqual([
      EventType.PRIVATE,
    ]);

    await wrapper
      .findComponent({ name: "TextInput" })
      .vm.$emit("update:modelValue", "New Event");
    expect(wrapper.emitted("update:eventName")?.[0]).toEqual(["New Event"]);
  });

  it("toggles overlay title input visibility", async () => {
    const wrapper = mount(BasicInformation, {
      props: defaultProps,
    });

    expect(
      wrapper
        .findComponent({
          name: "TextInput",
          props: { placeholder: "Type here" },
        })
        .exists()
    ).toBe(true);
    await wrapper.setProps({ overlayTitleOnBanner: true });
    const inputs = wrapper.findAllComponents({
      name: "TextInput",
      props: { placeholder: "Type here" },
    });
    expect(inputs).toHaveLength(2);
  });
});
