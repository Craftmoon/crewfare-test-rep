<template>
  <div
    class="border border-cfLightGray rounded-lg p-5 w-full mb-6 mt-5 form-container"
  >
    <ToggleButton
      :active="enabled ? 'enable' : 'disable'"
      @toggle="$emit('update:enabled', $event === 'enable')"
      class="mb-5 mx-auto"
    />
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <LabelledFormComp label="Event Type">
        <TypeSelect
          :model-value="eventType"
          :options="Object.values(EventType)"
          @update:model-value="$emit('update:eventType', $event)"
        />
      </LabelledFormComp>
      <LabelledFormComp label="Event Name">
        <TextInput
          :model-value="eventName"
          @update:model-value="$emit('update:eventName', $event)"
          placeholder="Type here"
          required
          :error="errors.eventName"
        />
      </LabelledFormComp>
      <div class="flex flex-col gap-4 md:col-span-2">
        <LabelledFormComp label="Banner">
          <ImageBanner
            :show-overlay="overlayTitleOnBanner"
            :overlay-text="overlayTitle"
            :model-value="bannerImage"
            @update:image="$emit('update:bannerImage', $event)"
          />
        </LabelledFormComp>
        <div class="flex flex-col gap-4">
          <Checkbox
            label="Overlay Title on Banner"
            :model-value="overlayTitleOnBanner"
            @update:model-value="$emit('update:overlayTitleOnBanner', $event)"
          />
          <LabelledFormComp
            v-if="overlayTitleOnBanner"
            label="Overlay Title"
            class="mt-[2px]"
          >
            <TextInput
              :model-value="overlayTitle"
              @update:model-value="$emit('update:overlayTitle', $event)"
              placeholder="Type here"
            />
          </LabelledFormComp>
        </div>
      </div>
    </div>
  </div>
  <div>
    <FormFooter
      :on-save="handleSave"
      :on-back="() => $emit('back')"
      :on-forward="() => $emit('forward')"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue";
import { EventType } from "../domain/constants";
import FormFooter from "../molecules/FormFooter.vue";
import ToggleButton from "../atoms/ToggleButton.vue";
import TypeSelect from "../atoms/TypeSelect.vue";
import LabelledFormComp from "../molecules/LabelledFormComp.vue";
import TextInput from "../atoms/TextInput.vue";
import Checkbox from "../atoms/Checkbox.vue";
import ImageBanner from "../atoms/ImageBanner.vue";

const props = defineProps<{
  eventType: EventType;
  eventName: string;
  enabled: boolean;
  overlayTitleOnBanner: boolean;
  overlayTitle: string;
  bannerImage?: File;
  isLastStep?: boolean;
}>();

const emit = defineEmits([
  "update:eventType",
  "update:eventName",
  "update:enabled",
  "update:overlayTitleOnBanner",
  "update:overlayTitle",
  "update:bannerImage",
  "save",
  "back",
  "forward",
  "error-change",
]);

const errors = ref({
  eventName: "",
});

const validateForm = () => {
  let isValid = true;
  errors.value.eventName = "";
  const isEventNameEmpty = !props.eventName?.trim();

  if (isEventNameEmpty) {
    errors.value.eventName = "Please enter the name of the event";
    isValid = false;
  }

  emit("error-change", !isValid);

  return isValid;
};

const handleSave = () => {
  const isFormValid = validateForm();
  if (isFormValid) {
    if (props.isLastStep) {
      alert("Form submitted successfully!\n" + JSON.stringify(props, null, 2));
      emit("save");
    } else {
      emit("forward");
    }
    return true;
  }
  return false;
};

watch(
  () => props.overlayTitleOnBanner,
  (newValue) => {
    if (!newValue) {
      emit("update:overlayTitle", "");
    }
  }
);
</script>

<style scoped></style>
