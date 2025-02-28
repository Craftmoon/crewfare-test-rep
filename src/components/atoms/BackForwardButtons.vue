<template>
  <div class="flex gap-6">
    <button
      :disabled="backDisabled"
      :class="[
        'p-3 rounded-lg bg-cfMediumGray disabled:opacity-50 disabled:cursor-not-allowed',
        { 'hover:bg-cfLightGray': !backDisabled },
      ]"
      @click="onBackClick"
    >
      <img src="../../assets/back-button.svg" alt="Back" class="w-6 h-6" />
    </button>

    <button
      :disabled="forwardDisabled"
      :class="[
        'p-3 rounded-lg bg-cfMediumGray disabled:opacity-50 disabled:cursor-not-allowed',
        { 'hover:bg-cfLightGray': !forwardDisabled },
      ]"
      @click="onForwardClick"
    >
      <img
        src="../../assets/forward-button.svg"
        alt="Forward"
        class="w-6 h-6"
      />
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  backDisabled?: boolean;
  forwardDisabled?: boolean;
  onBackClick: () => void;
  onForwardClick: () => void;
}>();
</script>
