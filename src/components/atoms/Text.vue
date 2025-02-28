<template>
  <component
    :is="tag"
    :class="[
      'font-poppins',
      size,
      weight,
      color,
      align,
      { italic },
      { uppercase },
      { 'line-through': lineThrough },
      { underline },
      props.class,
    ]"
  >
    <slot />
  </component>
</template>

<script setup>
const props = defineProps({
  tag: {
    type: String,
    default: "span",
  },
  size: {
    type: String,
    default: "text-base",
    validator: (value) =>
      [
        "text-xs",
        "text-sm",
        "text-base",
        "text-lg",
        "text-xl",
        "text-2xl",
        "text-3xl",
        "text-4xl",
        "text-5xl",
      ].includes(value),
  },
  weight: {
    type: String,
    default: "font-normal",
    validator: (value) =>
      [
        "font-light",
        "font-normal",
        "font-medium",
        "font-semibold",
        "font-bold",
      ].includes(value),
  },
  color: {
    type: String,
    default: "text-gray-900",
  },
  align: {
    type: String,
    default: "text-left",
    validator: (value) =>
      ["text-left", "text-center", "text-right", "text-justify"].includes(
        value
      ),
  },
  italic: {
    type: Boolean,
    default: false,
  },
  uppercase: {
    type: Boolean,
    default: false,
  },
  lineThrough: {
    type: Boolean,
    default: false,
  },
  underline: {
    type: Boolean,
    default: false,
  },
  class: {
    type: String,
    default: "",
  },
});
</script>
