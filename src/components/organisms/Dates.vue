<template>
  <div
    class="border border-cfLightGray rounded-lg p-5 w-full mb-6 mt-5 form-container"
  >
    <div class="flex flex-col">
      <div class="flex items-start">
        <Text
          color="text-white"
          size="text-sm"
          weight="font-medium"
          class="mr-2 mb-2"
        >
          Bookable Start & End Dates
        </Text>

        <InfoTooltip
          :text="'The dates that the property will be bookable. Guests will not be able to book outside of these dates.'"
        />
      </div>
      <RangeDatePicker
        :model-value="bookableDates"
        placeholder="Select date range"
        @update:model-value="updateBookableDates"
      />
    </div>
    <div>
      <div v-for="(date, index) in eventDates" :key="index">
        <LabelledFormComp label="Event Start and End Dates">
          <div class="flex items-center w-full">
            <div class="flex-grow">
              <RangeDatePicker
                :model-value="[date.startDate, date.endDate]"
                placeholder="Select date range"
                @update:model-value="(dates) => updateEventDate(index, dates)"
              />
            </div>
            <div
              v-if="index > 0"
              class="flex items-center justify-center h-[42px] ml-4 mb-auto pb-1"
            >
              <img
                src="../../assets/trash-can.svg"
                alt="Delete"
                class="w-6 h-6 cursor-pointer"
                @click="removeEventDate(index)"
              />
            </div>
          </div>
        </LabelledFormComp>
      </div>
      <button
        class="flex items-center mt-2 text-cfGreen mb-5"
        @click="addEventDate"
      >
        <span class="text-xl mr-2">+</span>
        <Text color="text-cfGreen" size="text-sm" weight="font-medium">
          Add Event Date Range
        </Text>
      </button>
    </div>
    <LabelledFormComp label="Default Check-In & Check-Out Dates">
      <RangeDatePicker
        :model-value="checkInOut"
        placeholder="Select date range"
        @update:model-value="updateCheckInOut"
      />
    </LabelledFormComp>
  </div>
  <div class="grid grid-cols-1 gap-6">
    <TaxesAndFees
      :model-value="localTaxesAndFees"
      @update:model-value="updateTaxesAndFees"
    />
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
import { TaxFee, EventDate } from "../domain/interfaces";
import { TaxFeeTypes } from "../domain/constants";
import TaxesAndFees from "../organisms/TaxesAndFees.vue";
import InfoTooltip from "../atoms/InfoTooltip.vue";
import RangeDatePicker from "../atoms/RangeDatePicker.vue";
import LabelledFormComp from "../molecules/LabelledFormComp.vue";
import Text from "../atoms/Text.vue";

const props = defineProps<{
  taxesAndFees: TaxFee[];
  bookableDates: [Date, Date];
  eventDates: EventDate[];
  checkInOut: [Date, Date];
}>();

const emit = defineEmits<{
  "update:taxes-and-fees": [value: TaxFee[]];
  "update:bookable-dates": [value: [Date, Date]];
  "update:event-dates": [value: EventDate[]];
  "update:check-in-out": [value: [Date, Date]];
  save: [];
  back: [];
  forward: [];
  "error-change": [hasError: boolean];
}>();

const localTaxesAndFees = ref<TaxFee[]>(
  props.taxesAndFees && props.taxesAndFees.length > 0
    ? props.taxesAndFees
    : [{ name: "", amount: 0, type: TaxFeeTypes.FIXED }]
);

const updateTaxesAndFees = (value: TaxFee[]) => {
  localTaxesAndFees.value = value;
  emit("update:taxes-and-fees", value);
};

const updateBookableDates = (dates: [Date, Date] | null) => {
  if (dates) {
    emit("update:bookable-dates", dates);
  }
};

const updateEventDate = (index: number, dates: [Date, Date] | null) => {
  if (dates) {
    const updatedDates = [...props.eventDates];
    updatedDates[index] = { startDate: dates[0], endDate: dates[1] };
    emit("update:event-dates", updatedDates);
  }
};

const addEventDate = () => {
  const newDates = [
    ...props.eventDates,
    {
      startDate: new Date(),
      endDate: new Date(),
    },
  ];
  emit("update:event-dates", newDates);
};

const removeEventDate = (index: number) => {
  const filteredDates = props.eventDates.filter((_, i) => i !== index);
  emit("update:event-dates", filteredDates);
};

const updateCheckInOut = (dates: [Date, Date] | null) => {
  if (dates) {
    emit("update:check-in-out", dates);
  }
};

const handleSave = () => {
  emit("update:taxes-and-fees", localTaxesAndFees.value);

  emit("save");
  return true;
};
</script>
