<template>
  <div class="relative">
    <select
      :value="modelValue"
      @input="
        (e) => emit('update:modelValue', (e.target as HTMLSelectElement).value)
      "
      :class="selectClass"
    >
      <option
        v-for="option in options"
        :key="option"
        :value="option"
        class="text-sm font-medium"
      >
        {{ option }}
      </option>
    </select>
    <div
      class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2"
    >
      <img
        src="../../assets/down-arrow-big.svg"
        alt="dropdown arrow"
        class="w-6 h-6"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  modelValue: string;
  options: string[];
  class?: string;
}>();

const emit = defineEmits<{
  "update:modelValue": [value: string];
}>();

const selectClass = computed(() => {
  return `text-sm font-medium appearance-none w-full px-4 py-[11px] bg-cfLightGray text-white rounded-lg border border-cfLightGray focus:outline-none focus:border-cfPurple ${props.class || ""}`;
});
</script>
