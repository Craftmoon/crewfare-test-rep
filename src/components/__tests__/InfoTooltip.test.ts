import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import InfoTooltip from "../atoms/InfoTooltip.vue";

describe("InfoTooltip", () => {
  it("renders properly", () => {
    const wrapper = mount(InfoTooltip, {
      props: {
        text: "Test tooltip",
      },
    });
    expect(wrapper.find("img").exists()).toBe(true);
  });

  it("shows tooltip on mouseenter", async () => {
    const wrapper = mount(InfoTooltip, {
      props: {
        text: "Test tooltip",
      },
    });

    await wrapper.find("img").trigger("mouseenter");
    expect(wrapper.find("p").text()).toBe("Test tooltip");
  });

  it("hides tooltip on mouseleave", async () => {
    const wrapper = mount(InfoTooltip, {
      props: {
        text: "Test tooltip",
      },
    });

    await wrapper.find("img").trigger("mouseenter");
    await wrapper.find("img").trigger("mouseleave");
    expect(wrapper.find("p").exists()).toBe(false);
  });

  it("displays the provided text", async () => {
    const testText = "Custom tooltip text";
    const wrapper = mount(InfoTooltip, {
      props: {
        text: testText,
      },
    });

    await wrapper.find("img").trigger("mouseenter");
    expect(wrapper.find("p").text()).toBe(testText);
  });
});
