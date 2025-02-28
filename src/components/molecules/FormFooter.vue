<template>
  <div class="w-full flex justify-end">
    <div class="flex flex-col gap-12 items-end">
      <BackForwardButtons @back-click="onBack" @forward-click="onForward" />
      <Button @click="onSave" variant="primary" :animated="animated">
        Save
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import BackForwardButtons from "../atoms/BackForwardButtons.vue";
import Button from "../atoms/Button.vue";
import { ref } from "vue";

const props = defineProps<{
  onSave: () => boolean;
  onBack: () => void;
  onForward: () => void;
}>();

const animated = ref(false);

const onSave = () => {
  animated.value = false;

  const success = props.onSave();

  if (!success) {
    setTimeout(() => {
      animated.value = true;
    }, 0);
  }
};

const onBack = () => props.onBack();
const onForward = () => props.onForward();
</script>
