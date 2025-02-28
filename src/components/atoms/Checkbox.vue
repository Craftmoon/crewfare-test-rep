<script setup lang="ts">
import Text from "./Text.vue";

defineProps<{
  modelValue: boolean;
  label: string;
  class?: string;
}>();

const emit = defineEmits<{
  "update:modelValue": [value: boolean];
}>();
</script>

<template>
  <label class="flex items-center cursor-pointer">
    <div class="relative">
      <input
        type="checkbox"
        :checked="modelValue"
        @input="
          emit('update:modelValue', ($event.target as HTMLInputElement).checked)
        "
        class="sr-only"
      />
      <div
        :class="[
          'w-5 h-5 border-2 rounded flex items-center justify-center transition-colors',
          modelValue
            ? 'bg-[#4FF6B1] border-[#4FF6B1]'
            : 'bg-[#1A1A1A] border-white',
        ]"
        :data-testid="modelValue ? 'checkbox-checked' : 'checkbox-unchecked'"
      >
        <div v-if="modelValue" class="w-3 h-6 text-black">✓</div>
      </div>
    </div>
    <Text class="ml-3" size="text-sm" weight="font-medium" color="text-white">
      {{ label }}
    </Text>
  </label>
</template>
