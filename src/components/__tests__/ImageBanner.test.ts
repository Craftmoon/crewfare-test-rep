import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import ImageBanner from "../atoms/ImageBanner.vue";

describe("ImageBanner", () => {
  beforeEach(() => {
    // Mock FileReader
    global.FileReader = class {
      onload: ((event: any) => void) | null = null;
      readAsDataURL() {
        this.onload?.({ target: { result: "data:image/jpeg;base64,fake" } });
      }
    } as any;
  });

  it("renders empty state correctly", () => {
    const wrapper = mount(ImageBanner);
    expect(wrapper.find('img[alt="Upload"]').exists()).toBe(true);
    expect(wrapper.text()).toContain("Click or drop image");
  });

  it("emits update:image event when file is selected", async () => {
    const wrapper = mount(ImageBanner);
    const file = new File([""], "test.jpg", { type: "image/jpeg" });

    const input = wrapper.find('input[type="file"]');
    Object.defineProperty(input.element, "files", {
      value: [file],
    });

    await input.trigger("change");

    const emitted = wrapper.emitted("update:image");
    expect(emitted).toBeTruthy();
    expect(emitted![0]).toEqual([file]);
  });

  it("shows overlay text when showOverlay and overlayText are provided", async () => {
    const wrapper = mount(ImageBanner);

    // Simulate file upload first
    const file = new File([""], "test.jpg", { type: "image/jpeg" });
    const input = wrapper.find('input[type="file"]');
    Object.defineProperty(input.element, "files", {
      value: [file],
    });
    await input.trigger("change");

    // Then set overlay props
    await wrapper.setProps({
      showOverlay: true,
      overlayText: "Test Overlay",
    });

    const overlayText = wrapper.find('div[class*="absolute"]');
    expect(overlayText.exists()).toBe(true);
    expect(overlayText.text()).toBe("Test Overlay");
  });

  it("accepts only jpg and png files", () => {
    const wrapper = mount(ImageBanner);
    const input = wrapper.find('input[type="file"]');
    expect(input.attributes("accept")).toBe(".jpg,.png");
  });
});
