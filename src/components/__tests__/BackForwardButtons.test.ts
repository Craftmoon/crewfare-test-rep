import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import BackForwardButtons from "../atoms/BackForwardButtons.vue";

describe("BackForwardButtons", () => {
  it("renders both buttons enabled by default", () => {
    const wrapper = mount(BackForwardButtons);
    const buttons = wrapper.findAll("button");

    expect(buttons).toHaveLength(2);
    expect(buttons[0].attributes("disabled")).toBeUndefined();
    expect(buttons[1].attributes("disabled")).toBeUndefined();
  });

  it("disables back button when backDisabled prop is true", () => {
    const wrapper = mount(BackForwardButtons, {
      props: {
        backDisabled: true,
        onBackClick: () => {},
        onForwardClick: () => {},
      },
    });
    const buttons = wrapper.findAll("button");

    expect(buttons[0].attributes("disabled")).toBeDefined();
    expect(buttons[1].attributes("disabled")).toBeUndefined();
  });

  it("disables forward button when forwardDisabled prop is true", () => {
    const wrapper = mount(BackForwardButtons, {
      props: {
        forwardDisabled: true,
        onBackClick: () => {},
        onForwardClick: () => {},
      },
    });
    const buttons = wrapper.findAll("button");

    expect(buttons[0].attributes("disabled")).toBeUndefined();
    expect(buttons[1].attributes("disabled")).toBeDefined();
  });

  it("disables both buttons when both disabled props are true", () => {
    const wrapper = mount(BackForwardButtons, {
      props: {
        backDisabled: true,
        forwardDisabled: true,
        onBackClick: () => {},
        onForwardClick: () => {},
      },
    });
    const buttons = wrapper.findAll("button");

    expect(buttons[0].attributes("disabled")).toBeDefined();
    expect(buttons[1].attributes("disabled")).toBeDefined();
  });

  it("calls onBackClick when back button is clicked", async () => {
    const onBackClick = vi.fn();
    const wrapper = mount(BackForwardButtons, {
      props: {
        onBackClick,
        onForwardClick: () => {},
      },
    });
    const backButton = wrapper.findAll("button")[0];

    await backButton.trigger("click");
    expect(onBackClick).toHaveBeenCalled();
  });

  it("calls onForwardClick when forward button is clicked", async () => {
    const onForwardClick = vi.fn();
    const wrapper = mount(BackForwardButtons, {
      props: {
        onBackClick: () => {},
        onForwardClick,
      },
    });
    const forwardButton = wrapper.findAll("button")[1];

    await forwardButton.trigger("click");
    expect(onForwardClick).toHaveBeenCalled();
  });

  it("does not call handlers when buttons are disabled", async () => {
    const onBackClick = vi.fn();
    const onForwardClick = vi.fn();
    const wrapper = mount(BackForwardButtons, {
      props: {
        backDisabled: true,
        forwardDisabled: true,
        onBackClick: () => {},
        onForwardClick: () => {},
      },
    });
    const [backButton, forwardButton] = wrapper.findAll("button");

    await backButton.trigger("click");
    await forwardButton.trigger("click");

    expect(onBackClick).not.toHaveBeenCalled();
    expect(onForwardClick).not.toHaveBeenCalled();
  });

  it("renders the correct SVG images for both buttons", () => {
    const wrapper = mount(BackForwardButtons);
    const images = wrapper.findAll("img");

    expect(images[0].attributes("src")).toContain("back-button.svg");
    expect(images[1].attributes("src")).toContain("forward-button.svg");
    expect(images[0].attributes("alt")).toBe("Back");
    expect(images[1].attributes("alt")).toBe("Forward");
  });
});
