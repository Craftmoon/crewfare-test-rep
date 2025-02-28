<script setup lang="ts">
import { computed } from "vue";
import Text from "./Text.vue";

const props = defineProps<{
  modelValue?: string;
  placeholder?: string;
  class?: string;
  error?: string;
  required?: boolean;
}>();

defineEmits<{
  "update:modelValue": [value: string];
}>();

const inputClass = computed(() => {
  const baseClasses =
    "appearance-none w-full px-4 py-[9px] text-white rounded-lg focus:outline-none";
  const borderClasses = props.error
    ? "border-2 border-cfRed bg-cfRed bg-opacity-10"
    : "border border-cfLightGray bg-cfLightGray focus:border-cfPurple";
  return `${baseClasses} ${borderClasses} ${props.class || ""}`;
});
</script>
<template>
  <div class="flex flex-col gap-1">
    <input
      type="text"
      :value="modelValue"
      :placeholder="placeholder"
      @input="
        $emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
      :class="[inputClass, 'placeholder:text-sm placeholder:font-normal']"
      :required="required"
    />
    <Text
      v-if="error"
      color="text-cfRed"
      size="text-sm"
      weight="normal"
      class="h-5"
    >
      {{ error || "Error" }}
    </Text>
  </div>
</template>
