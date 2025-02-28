import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import ToggleButton from "../atoms/ToggleButton.vue";

describe("ToggleButton", () => {
  it("renders with initial enabled state", () => {
    const wrapper = mount(ToggleButton, {
      props: {
        active: "enable",
      },
    });

    expect(wrapper.text()).toContain("Enable Event");
    const enableButton = wrapper.find('[data-testid="enable-button"]');
    expect(enableButton.exists()).toBe(true);
  });

  it("renders with initial disabled state", () => {
    const wrapper = mount(ToggleButton, {
      props: {
        active: "disable",
      },
    });

    expect(wrapper.text()).toContain("Disable Event");
    const disableButton = wrapper.find('[data-testid="disable-button"]');
    expect(disableButton.exists()).toBe(true);
  });

  it("emits toggle event when clicked", async () => {
    const wrapper = mount(ToggleButton, {
      props: {
        active: "enable",
      },
    });

    await wrapper.find('[data-testid="disable-button"]').trigger("click");
    expect(wrapper.emitted("toggle")?.[0]).toEqual(["disable"]);
  });
});
