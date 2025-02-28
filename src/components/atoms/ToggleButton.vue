<template>
  <div
    class="relative flex w-fit rounded-lg bg-cfMediumGray border border-[#4323FF66]"
  >
    <div
      class="absolute h-full w-1/2 bg-cfPurple rounded-lg transition-transform duration-200"
      :style="{
        transform: active === 'enable' ? 'translateX(0%)' : 'translateX(100%)',
      }"
    />
    <button
      class="relative z-10 px-[25px] py-2 w-1/2 rounded-lg transition-colors"
      @click="handleToggle('enable')"
      data-testid="enable-button"
    >
      <Text
        size="text-sm"
        weight="font-bold"
        :color="active === 'enable' ? 'text-white' : 'text-cfPurple'"
        class="mt-2 whitespace-nowrap"
      >
        Enable Event
      </Text>
    </button>
    <button
      class="relative z-10 px-[25px] py-2 w-1/2 rounded-lg transition-colors"
      @click="handleToggle('disable')"
      data-testid="disable-button"
    >
      <Text
        size="text-sm"
        weight="font-bold"
        :color="active === 'disable' ? 'text-white' : 'text-cfPurple'"
        class="mt-2 whitespace-nowrap"
      >
        Disable Event
      </Text>
    </button>
  </div>
</template>

<script setup lang="ts">
import Text from "./Text.vue";

type ToggleState = "enable" | "disable";

defineProps<{
  active: ToggleState;
}>();

const emit = defineEmits<{
  (e: "toggle", value: ToggleState): void;
}>();

const handleToggle = (value: ToggleState) => {
  emit("toggle", value);
};
</script>
