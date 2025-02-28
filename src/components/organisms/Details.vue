<template>
  <div
    class="border border-cfLightGray rounded-lg p-5 w-full mb-6 mt-5 form-container"
  >
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="col-span-1 md:col-span-2">
        <div class="flex items-center mb-3">
          <Text color="text-white" size="text-sm" weight="font-medium"
            >Subdomain</Text
          >
          <Text color="text-cfGray" size="text-sm" class="ml-1"
            >(e.g. crewfare-festival)</Text
          >
        </div>
        <TextInput
          :model-value="subdomain"
          @update:model-value="$emit('update:subdomain', $event)"
          placeholder="Type here"
          :error="errors.subdomain"
        />
      </div>

      <LabelledFormComp label="Event Address">
        <TextInput
          :model-value="eventAddress"
          @update:model-value="$emit('update:eventAddress', $event)"
          placeholder="Type here"
        />
      </LabelledFormComp>

      <LabelledFormComp label="Venue Name">
        <TextInput
          :model-value="venueName"
          @update:model-value="$emit('update:venueName', $event)"
          placeholder="Type here"
        />
      </LabelledFormComp>

      <LabelledFormComp label="Featured Hotels Title">
        <TextInput
          :model-value="featuredHotelsTitle"
          @update:model-value="$emit('update:featuredHotelsTitle', $event)"
          placeholder="Featured Hotels"
        />
      </LabelledFormComp>

      <LabelledFormComp label="Minimum Nights">
        <NumberInput
          :model-value="minimumNights"
          @update:model-value="$emit('update:minimumNights', $event)"
          :min="0"
        />
      </LabelledFormComp>
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
import { ref, watch } from "vue";
import FormFooter from "../molecules/FormFooter.vue";
import LabelledFormComp from "../molecules/LabelledFormComp.vue";
import TextInput from "../atoms/TextInput.vue";
import NumberInput from "../atoms/NumberInput.vue";
import Text from "../atoms/Text.vue";

const props = defineProps<{
  subdomain?: string;
  eventAddress?: string;
  venueName?: string;
  featuredHotelsTitle?: string;
  minimumNights?: number;
  isLastStep?: boolean;
}>();

const emit = defineEmits<{
  "update:subdomain": [value: string];
  "update:eventAddress": [value: string];
  "update:venueName": [value: string];
  "update:featuredHotelsTitle": [value: string];
  "update:minimumNights": [value: number];
  save: [];
  back: [];
  forward: [];
  "error-change": [hasError: boolean];
}>();

const errors = ref({
  subdomain: "",
});

const validateForm = () => {
  let isValid = true;
  errors.value.subdomain = "";

  if (!props.subdomain || props.subdomain.trim() === "") {
    errors.value.subdomain = "Subdomain is required";
    isValid = false;
  } else {
    const subdomainRegex = /^[a-zA-Z0-9-]+$/;
    if (!subdomainRegex.test(props.subdomain)) {
      errors.value.subdomain = "Only letters, numbers, and dashes are allowed";
      isValid = false;
    }
  }

  emit("error-change", !isValid);
  return isValid;
};

const handleSave = () => {
  if (validateForm()) {
    if (props.isLastStep) {
      emit("save");
    } else {
      emit("forward");
    }
    return true;
  }
  return false;
};

// Add a watch to validate on prop changes
watch(
  () => props.subdomain,
  () => {
    validateForm();
  }
);
</script>
