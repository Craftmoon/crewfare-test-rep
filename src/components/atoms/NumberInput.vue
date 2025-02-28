<script setup lang="ts">
import { computed } from "vue";
import Text from "./Text.vue";

const props = defineProps<{
  modelValue?: number;
  min?: number;
  max?: number;
  class?: string;
  error?: string;
}>();

const emit = defineEmits<{
  "update:modelValue": [value: number];
}>();

const inputClass = computed(() => {
  const baseClasses =
    "appearance-none w-full px-4 py-[9px] text-white rounded-lg focus:outline-none";
  const borderClasses = props.error
    ? "border-2 border-cfRed bg-cfRed bg-opacity-10"
    : "border border-cfLightGray bg-cfLightGray focus:border-cfPurple";
  return `${baseClasses} ${borderClasses} ${props.class || ""}`;
});

const validateNumberInput = (event: KeyboardEvent) => {
  // Allow only number keys
  if (!/^\d$/.test(event.key)) {
    event.preventDefault();
  }
};

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  let value = parseInt(target.value);

  if (isNaN(value)) {
    value = props.min ?? 0;
  }

  if (props.min !== undefined && value < props.min) {
    value = props.min;
  }

  if (props.max !== undefined && value > props.max) {
    value = props.max;
  }

  emit("update:modelValue", value);
};

const increment = () => {
  const currentValue = props.modelValue ?? props.min ?? 0;
  const newValue = currentValue + 1;
  if (props.max === undefined || newValue <= props.max) {
    emit("update:modelValue", newValue);
  }
};

const decrement = () => {
  const currentValue = props.modelValue ?? props.min ?? 0;
  const newValue = currentValue - 1;
  if (props.min === undefined || newValue >= props.min) {
    emit("update:modelValue", newValue);
  }
};
</script>

<template>
  <div class="flex flex-col gap-1 min-h-[70px]">
    <div class="relative">
      <input
        type="number"
        :value="modelValue"
        @input="handleInput"
        @keypress="validateNumberInput"
        :min="min"
        :max="max"
        :class="[inputClass, 'pr-12']"
      />
      <div
        class="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col gap-1"
      >
        <img
          src="../../assets/arrow-up.svg"
          alt="Increment"
          class="w-6 h-3 cursor-pointer"
          @click.prevent="increment"
        />
        <img
          src="../../assets/arrow-down.svg"
          alt="Decrement"
          class="w-6 h-3 cursor-pointer"
          @click.prevent="decrement"
        />
      </div>
    </div>
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

<style scoped>
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}
</style>
