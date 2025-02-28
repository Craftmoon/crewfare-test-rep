<template>
  <button
    @click="$emit('step-click', number - 1)"
    class="w-full text-left flex items-center gap-3 px-2 py-3 rounded-lg transition-colors focus:outline-none focus:ring-1 focus:ring-cfLightGray"
    :class="[
      isActive
        ? 'bg-cfMediumGray ring-1 ring-cfLightGray'
        : 'hover:bg-cfMediumGray/50',
      { 'cursor-pointer': !isDisabled },
      { 'opacity-50 cursor-not-allowed': isDisabled },
    ]"
    :disabled="isDisabled"
  >
    <div
      class="flex items-center justify-center w-6 h-6 rounded-full text-white font-semibold mr-3"
      :class="[
        isCompleted
          ? 'bg-cfGreen'
          : isActive
            ? 'bg-cfPurple'
            : 'bg-cfLightGray',
      ]"
    >
      <span v-if="!isCompleted" class="text-xs font-semibold">{{
        number
      }}</span>
      <img
        v-else
        src="../../assets/check-mark.svg"
        alt="Completed"
        class="h-4 w-4"
      />
    </div>
    <Text
      size="text-sm"
      weight="font-medium"
      color="text-white"
      class="whitespace-nowrap"
      >{{ title }}</Text
    >
    <div class="w-5 ml-auto">
      <ErrorSign v-if="hasError" />
    </div>
  </button>
</template>

<script setup lang="ts">
import ErrorSign from "./ErrorSign.vue";
import Text from "./Text.vue";

defineProps({
  number: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: false,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
  hasError: {
    type: Boolean,
    default: false,
  },
  isDisabled: {
    type: Boolean,
    default: false,
  },
});

defineEmits(["step-click"]);
</script>
