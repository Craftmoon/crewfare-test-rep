<script setup lang="ts">
import { ref } from "vue";
import Button from "../atoms/Button.vue";
import Text from "../atoms/Text.vue";
import Stepper from "../molecules/Stepper.vue";
import SideMarginTemplate from "../templates/SideMarginTemplate.vue";
import BasicInformation from "../organisms/BasicInformation.vue";
import Dates from "../organisms/Dates.vue";
import Details from "../organisms/Details.vue";
import { useStepNavigation } from "../../composables/useStepNavigation";
import { EventType } from "../domain/constants";
import { FormData, Step } from "../domain/interfaces";
import ErrorSign from "../atoms/ErrorSign.vue";

const steps = ref<Step[]>([
  {
    title: "Basic Information",
    isCompleted: false,
    hasError: false,
  },
  {
    title: "Details",
    isCompleted: false,
    hasError: false,
  },
  {
    title: "Dates",
    isCompleted: false,
    hasError: false,
  },
]);

const formData = ref<FormData>({
  eventType: EventType.PUBLIC,
  eventName: "",
  enabled: true,
  overlayTitleOnBanner: false,
  overlayTitle: "",
  bannerImage: undefined,
  subdomain: "",
  eventAddress: "",
  venueName: "",
  featuredHotelsTitle: "Featured Hotels",
  minimumNights: 1,
  taxesAndFees: [],
  bookableDates: [new Date(), new Date()],
  eventDates: [{ startDate: new Date(), endDate: new Date() }],
  checkInOut: [new Date(), new Date()],
});

const { currentStep, goToNext, goToPrevious, goToStep } = useStepNavigation(
  steps.value.length
);

const handleStepClick = (stepIndex: number) => {
  goToStep(stepIndex);
};

const validateAllSteps = () => {
  if (currentStep.value < steps.value.length - 1) {
    return !steps.value[currentStep.value].hasError;
  }

  const allStepsValid = steps.value.every((step) => !step.hasError);
  return allStepsValid;
};

const handleSave = () => {
  if (currentStep.value === steps.value.length - 1) {
    const allStepsValid = validateAllSteps();
    if (allStepsValid) {
      steps.value.forEach((step) => {
        step.isCompleted = true;
      });
      console.log(formData.value);
      alert(
        "Form submitted successfully!\n" +
          JSON.stringify(formData.value, null, 2)
      );
      return true;
    }
    return false;
  } else {
    if (!steps.value[currentStep.value].hasError) {
      steps.value[currentStep.value].isCompleted = true;
      currentStep.value = currentStep.value + 1;
      return true;
    }
    return false;
  }
};

const handleBack = () => {
  goToPrevious();
};

const handleForward = () => {
  goToNext();
};

const updateFormData = <K extends keyof FormData>(
  field: K,
  value: FormData[K]
) => {
  formData.value[field] = value;
};

const handleStepError = (stepIndex: number, hasError: boolean) => {
  steps.value[stepIndex].hasError = hasError;
};
</script>

<template>
  <div class="h-full w-full">
    <SideMarginTemplate>
      <div class="h-full flex">
        <div class="bg-cfMediumGray flex flex-col p-5">
          <Text
            size="text-2xl"
            weight="font-bold"
            color="text-white"
            class="mb-5"
            >Create Event</Text
          >
          <Stepper
            :current-step="currentStep"
            :steps="steps"
            @step-click="handleStepClick"
          />
        </div>
        <div
          class="p-6 flex flex-col w-full overflow-y-auto custom-scrollbar"
          :class="{ 'pb-[90px]': $el && $el.scrollHeight > $el.clientHeight }"
        >
          <div class="flex justify-between items-center">
            <div class="flex items-center gap-2 mb-4">
              <Text size="text-xl" weight="font-semibold" color="text-white">
                {{ steps[currentStep].title }}
              </Text>
              <ErrorSign v-if="steps[currentStep].hasError" />
            </div>
          </div>
          <div class="w-full">
            <BasicInformation
              v-if="currentStep === 0"
              v-bind="formData"
              :banner-image="formData.bannerImage"
              @error-change="handleStepError(0, $event)"
              @update:eventType="formData.eventType = $event"
              @update:eventName="formData.eventName = $event"
              @update:enabled="formData.enabled = $event"
              @update:overlayTitleOnBanner="
                formData.overlayTitleOnBanner = $event
              "
              @update:overlayTitle="formData.overlayTitle = $event"
              @update:bannerImage="formData.bannerImage = $event"
              @save="handleSave"
              @back="handleBack"
              @forward="handleForward"
            />
            <Details
              v-if="currentStep === 1"
              :subdomain="formData.subdomain"
              :event-address="formData.eventAddress"
              :venue-name="formData.venueName"
              :featured-hotels-title="
                formData.featuredHotelsTitle || 'Featured Hotels'
              "
              :minimum-nights="formData.minimumNights || 1"
              @update:subdomain="formData.subdomain = $event"
              @update:event-address="formData.eventAddress = $event"
              @update:venue-name="formData.venueName = $event"
              @update:featured-hotels-title="
                formData.featuredHotelsTitle = $event
              "
              @update:minimum-nights="formData.minimumNights = $event"
              @error-change="handleStepError(1, $event)"
              @save="handleSave"
              @back="handleBack"
              @forward="handleForward"
            />
            <Dates
              v-if="currentStep === 2"
              :taxes-and-fees="formData.taxesAndFees"
              :bookable-dates="formData.bookableDates"
              :event-dates="formData.eventDates"
              :check-in-out="formData.checkInOut"
              @update:taxes-and-fees="formData.taxesAndFees = $event"
              @update:bookable-dates="formData.bookableDates = $event"
              @update:event-dates="formData.eventDates = $event"
              @update:check-in-out="formData.checkInOut = $event"
              @error-change="handleStepError(2, $event)"
              @save="handleSave"
              @back="handleBack"
              @forward="handleForward"
            />
          </div>
        </div>
      </div>
    </SideMarginTemplate>
  </div>
</template>

<style scoped>
.custom-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: #a3a3a3 transparent;
}

.custom-scrollbar::-webkit-scrollbar {
  width: 8px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background-color: transparent;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: #a3a3a3;
  border: 2px solid #2f2f31;
  border-radius: 20px;
}

.custom-scrollbar::-webkit-scrollbar-button {
  display: none;
}

.custom-scrollbar::-webkit-scrollbar-corner {
  background-color: transparent;
}
</style>
