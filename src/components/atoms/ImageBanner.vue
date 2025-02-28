<template>
  <div
    class="relative w-full h-[200px] rounded-lg overflow-hidden"
    :class="{ 'bg-cfMediumGray': !imageUrl }"
  >
    <input
      type="file"
      ref="fileInput"
      class="hidden"
      accept=".jpg,.png"
      @change="handleImageUpload"
    />

    <div
      v-if="!imageUrl"
      class="flex flex-col items-center justify-center h-full cursor-pointer"
      @click="() => fileInput?.click()"
    >
      <img
        src="/src/assets/upload-image.svg"
        alt="Upload"
        class="w-12 h-12 mb-4"
      />
      <Text size="text-base" weight="font-semibold" color="text-white"
        >Click or drop image</Text
      >
    </div>

    <template v-else>
      <img
        :src="imageUrl"
        class="w-full h-full object-cover cursor-pointer"
        alt="Banner"
        @click="() => fileInput?.click()"
      />
      <div
        v-if="showOverlay"
        class="absolute inset-0 flex items-center justify-center bg-cfDarkGray/50 z-20"
      >
        <Text
          tag="h1"
          size="text-[48px]"
          weight="font-bold"
          color="text-white"
          >{{ overlayText || "" }}</Text
        >
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import Text from "./Text.vue";

const props = defineProps<{
  showOverlay?: boolean;
  overlayText?: string;
}>();

const emit = defineEmits<{
  "update:image": [File];
  "update:overlayText": [string];
}>();

const imageUrl = ref<string>("");
const fileInput = ref<HTMLInputElement | null>(null);

watch(
  () => props.showOverlay,
  (newValue) => {
    if (!newValue) {
      emit("update:overlayText", "");
    }
  }
);

const handleImageUpload = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (!target.files?.length) return;

  const file = target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      imageUrl.value = e.target?.result as string;
      emit("update:image", file);
    };
    reader.readAsDataURL(file);
  }
};
</script>
