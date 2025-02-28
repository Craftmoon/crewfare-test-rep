import type { Preview } from "@storybook/vue3";
import { fn } from "@storybook/test";
import "../src/style.css";
import "./preview.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
