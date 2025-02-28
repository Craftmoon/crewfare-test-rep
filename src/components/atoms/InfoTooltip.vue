<template>
  <div class="relative inline-block">
    <img
      src="../../assets/info-icon.svg"
      alt="Info"
      class="w-4 h-4 cursor-pointer"
      @mouseenter="showTooltip = true"
      @mouseleave="showTooltip = false"
    />
    <div
      v-if="showTooltip"
      class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 p-3 bg-white text-black rounded-lg shadow-lg w-80 z-10"
    >
      <div class="relative">
        <p class="text-sm font-medium">{{ text }}</p>
      </div>
      <div
        class="absolute w-3 h-3 bg-white transform rotate-45 left-1/2 -translate-x-1/2 -bottom-1.5"
        style="box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1)"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

defineProps<{
  text: string;
}>();

const showTooltip = ref(false);
</script>
