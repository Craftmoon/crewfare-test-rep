<template>
  <button
    :class="[
      'inline-flex bg-cfPurple px-[42px] py-[14px] rounded-lg outline-none focus:outline-none focus:ring-0 active:outline-none',
      { 'animate-wiggle': shouldAnimate },
      props.class,
    ]"
    type="button"
    @click="handleClick"
    @animationend="handleAnimationEnd"
  >
    <Text size="text-sm" weight="font-bold" color="text-white">
      <slot></slot>
    </Text>
  </button>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import Text from "./Text.vue";

const props = withDefaults(
  defineProps<{
    animated?: boolean;
    class?: string;
  }>(),
  {
    animated: false,
    class: "",
  }
);

const emit = defineEmits<{
  click: [];
}>();

const shouldAnimate = ref(false);

watch(
  () => props.animated,
  (newValue) => {
    if (newValue) {
      shouldAnimate.value = false;
      void document.body.offsetHeight;
      shouldAnimate.value = true;
    }
  }
);

const handleClick = () => {
  emit("click");
};

const handleAnimationEnd = () => {
  shouldAnimate.value = false;
};
</script>

<style>
@keyframes wiggle {
  0%,
  100% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-16px);
  }
  75% {
    transform: translateX(16px);
  }
}

.animate-wiggle {
  animation: wiggle 0.4s ease-in-out;
  animation-iteration-count: 1;
}

.animate-wiggle:active {
  animation: none;
}
</style>
