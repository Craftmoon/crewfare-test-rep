<script setup lang="ts">
import Text from "../atoms/Text.vue";
import { computed } from "vue";

const props = defineProps<{
  label: string;
  class?: string;
}>();

const containerClass = computed(() => {
  return `flex flex-col ${props.class || ""}`;
});
</script>

<template>
  <div :class="containerClass">
    <Text color="text-white" size="text-sm" weight="font-medium">{{
      label
    }}</Text>
    <div class="mt-3">
      <slot></slot>
    </div>
  </div>
</template>
