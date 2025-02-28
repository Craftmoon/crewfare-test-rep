import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import FormFooter from "../molecules/FormFooter.vue";
import Button from "../atoms/Button.vue";
import BackForwardButtons from "../atoms/BackForwardButtons.vue";

describe("FormFooter", () => {
  const defaultProps = {
    onSave: () => true,
    onBack: () => {},
    onForward: () => {},
  };

  const mountComponent = (props = defaultProps) => {
    return mount(FormFooter, {
      props,
      global: {
        components: {
          Button,
          BackForwardButtons,
        },
      },
    });
  };

  it("renders back/forward and save buttons", () => {
    const wrapper = mountComponent();
    expect(wrapper.findComponent(BackForwardButtons).exists()).toBe(true);
    expect(wrapper.findComponent(Button).exists()).toBe(true);
  });

  it("calls appropriate handlers when buttons are clicked", async () => {
    const onSave = vi.fn(() => true);
    const onBack = vi.fn();
    const onForward = vi.fn();

    const wrapper = mountComponent({ onSave, onBack, onForward });

    await wrapper.findComponent(BackForwardButtons).vm.$emit("back-click");
    await wrapper.findComponent(BackForwardButtons).vm.$emit("forward-click");
    await wrapper.findComponent(Button).trigger("click");

    expect(onBack).toHaveBeenCalled();
    expect(onForward).toHaveBeenCalled();
    expect(onSave).toHaveBeenCalled();
  });

  it("handles save button animation", async () => {
    vi.useFakeTimers();
    const onSave = vi.fn(() => false);
    const wrapper = mountComponent({ ...defaultProps, onSave });

    const saveButton = wrapper.findComponent(Button);
    await saveButton.trigger("click");
    vi.runAllTimers();
    await wrapper.vm.$nextTick();

    expect((wrapper.vm as any).animated).toBe(true);
    vi.useRealTimers();
  });
});
