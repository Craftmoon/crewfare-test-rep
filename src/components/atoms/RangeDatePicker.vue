<template>
  <div class="relative mb-5">
    <div class="flex items-center">
      <div
        class="w-full bg-cfLightGray rounded-lg"
        :class="[disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer']"
        @click="!disabled && (open = true)"
      >
        <VueDatePicker
          v-model="localDate"
          :enable-time-picker="false"
          :range="true"
          :auto-apply="true"
          :clickable="!disabled"
          :teleport="true"
          :teleport-to="'.relative'"
          v-model:is-open="open"
          format="MM/dd/yyyy"
          :disabled="disabled"
        >
          <template #dp-input>
            <div class="flex items-center justify-between px-4 py-2 w-full">
              <span class="text-white">{{
                formattedDateRange || placeholder
              }}</span>
              <img
                src="../../assets/calendar.svg"
                alt="Calendar"
                class="w-5 h-5 ml-2"
              />
            </div>
          </template>
        </VueDatePicker>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

const props = defineProps<{
  modelValue: [Date, Date] | null;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
}>();

const emit = defineEmits<{
  "update:model-value": [value: [Date, Date] | null];
}>();

const open = ref(false);

const localDate = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:model-value", value),
});

const formattedDateRange = computed(() => {
  if (!localDate.value || !Array.isArray(localDate.value)) return "";
  const [start, end] = localDate.value;
  if (!start || !end) return "";
  return `${start.toLocaleDateString()} - ${end.toLocaleDateString()}`;
});
</script>

<style>
.dp__theme_light {
  --dp-background-color: #2f2f31;
  --dp-text-color: #ffffff;
  --dp-hover-color: #3d3d3d;
  --dp-hover-text-color: #ffffff;
  --dp-hover-icon-color: #ffffff;
  --dp-primary-color: #00c092;
  --dp-primary-text-color: #ffffff;
  --dp-secondary-color: #3d3d3d;
  --dp-border-color: #3d3d3d;
  --dp-menu-border-color: #3d3d3d;
  --dp-border-color-hover: #00c092;
  --dp-disabled-color: #737373;
  --dp-scroll-bar-background: #212121;
  --dp-scroll-bar-color: #484848;
  --dp-success-color: #00c092;
  --dp-success-color-disabled: #428f7c;
  --dp-icon-color: #ffffff;
  --dp-danger-color: #ff6b6b;
}

.dp--clear-btn {
  display: none !important;
}

.dp__action_buttons {
  display: none !important;
}

.dp__input {
  background-color: #2f2f31 !important;
  border: none !important;
  color: white !important;
}

.dp__input:focus {
  border: 1px solid #00c092 !important;
}

.dp__calendar_header {
  color: white !important;
}

.dp__calendar_item {
  color: white !important;
}
</style>
