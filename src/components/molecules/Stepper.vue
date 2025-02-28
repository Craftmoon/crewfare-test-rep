<template>
  <div class="flex items-center flex-col gap-2">
    <template v-for="(step, index) in steps" :key="index">
      <Step
        :number="index + 1"
        :title="step.title"
        :is-active="currentStep === index"
        :is-completed="step.isCompleted"
        :has-error="step.hasError"
        @step-click="$emit('step-click', $event)"
      />
      <div
        v-if="index < steps.length - 1"
        class="flex-1 h-[1px] bg-cfLightGray"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import Step from "../atoms/Step.vue";
import { StepItem } from "../domain/interfaces";

defineProps<{
  steps: StepItem[];
  currentStep: number;
}>();

defineEmits<{
  "step-click": [index: number];
}>();
</script>
