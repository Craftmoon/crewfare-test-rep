import { describe, it, expect, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import Header from "../atoms/Header.vue";
import type { VueWrapper } from "@vue/test-utils";

describe("Header", () => {
  let wrapper: VueWrapper;

  beforeEach(() => {
    wrapper = mount(Header);
  });

  it("renders header with correct base styles", () => {
    const header = wrapper.find("header");
    expect(header.classes()).toContain("bg-black");
    expect(header.classes()).toContain("p-5");
    expect(header.classes()).toContain("min-w-full");
    expect(header.classes()).toContain("w-full");
  });

  it("has centered logo container", () => {
    const container = wrapper.find("div");
    expect(container.classes()).toContain("w-full");
    expect(container.classes()).toContain("flex");
    expect(container.classes()).toContain("justify-center");
  });

  it("renders logo with correct attributes and styles", () => {
    const logo = wrapper.find("img");
    expect(logo.attributes("src")).toBe("/src/assets/crewfare-logo.svg");
    expect(logo.attributes("alt")).toBe("Crewfare All Access");
    expect(logo.classes()).toContain("h-10");
    expect(logo.classes()).toContain("w-auto");
  });
});
