<template>
  <div class="w-full px-2 sm:px-4">
    <Text
      color="text-white"
      size="text-sm"
      weight="font-medium"
      class="mb-2 sm:mb-4"
    >
      Taxes & Fees
    </Text>
    <div
      v-for="(item, index) in taxesAndFees"
      :key="index"
      class="flex flex-wrap gap-2 sm:gap-4 mb-2 sm:mb-4"
      data-test="tax-fee-row"
    >
      <div class="w-full sm:flex-1 min-w-[200px]">
        <LabelledFormComp label="Name" class="mb-0">
          <TextInput
            :model-value="item.name"
            @update:model-value="updateTaxName(index, $event)"
            placeholder="Type here"
            class="h-[36px] sm:h-[42px]"
          />
        </LabelledFormComp>
      </div>
      <div class="w-full sm:flex-1 min-w-[150px]">
        <LabelledFormComp label="Amount" class="mb-0">
          <TextInput
            type="number"
            :model-value="String(item.amount)"
            @update:model-value="updateTaxAmount(index, $event)"
            placeholder="0"
            class="pr-8 h-[36px] sm:h-[42px]"
            @keypress="validateNumberInput"
          />
          <div
            v-if="item.type === TaxFeeTypes.PERCENTAGE"
            class="absolute right-3 -translate-y-7 sm:-translate-y-8"
          >
            <Text color="text-white" size="text-sm">%</Text>
          </div>
        </LabelledFormComp>
      </div>
      <div class="w-full sm:flex-1 min-w-[150px] flex">
        <div class="flex-1">
          <LabelledFormComp label="Type" class="mb-0">
            <TypeSelect
              :model-value="item.type"
              :options="Object.values(TaxFeeTypes)"
              @update:model-value="selectType(index, $event)"
              class="h-[36px] sm:h-[42px]"
            />
          </LabelledFormComp>
        </div>
        <div class="ml-2 sm:ml-4 content-end">
          <LabelledFormComp label=" " class="mb-0">
            <div class="flex items-center justify-center h-[36px] sm:h-[42px]">
              <img
                src="/src/assets/trash-can.svg"
                alt="Delete"
                class="w-6 h-6 cursor-pointer"
                data-test="delete-tax"
                @click="removeTax(index)"
              />
            </div>
          </LabelledFormComp>
        </div>
      </div>
    </div>

    <button
      class="flex items-center mt-2 text-cfGreen"
      @click="addNewTax"
      data-test="add-tax"
    >
      <span class="text-xl mr-2">+</span>
      <Text color="text-cfGreen" size="text-sm" weight="font-medium">
        Add New Tax/Fee
      </Text>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, watch } from "vue";
import Text from "../atoms/Text.vue";
import TextInput from "../atoms/TextInput.vue";
import TypeSelect from "../atoms/TypeSelect.vue";
import LabelledFormComp from "../molecules/LabelledFormComp.vue";
import { TaxFeeTypes } from "../domain/constants";
import { TaxFee } from "../domain/interfaces";

const props = defineProps<{
  modelValue: TaxFee[];
}>();

const emit = defineEmits<{
  "update:modelValue": [value: TaxFee[]];
}>();

const taxesAndFees = ref<TaxFee[]>([]);

watch(
  () => props.modelValue,
  (newValue) => {
    if (newValue) {
      taxesAndFees.value = newValue;
    }
  }
);

const addNewTax = () => {
  const newTaxes = [
    ...taxesAndFees.value,
    { name: "", amount: 0, type: TaxFeeTypes.FIXED },
  ];
  taxesAndFees.value = newTaxes;
  emit("update:modelValue", newTaxes);
};

const removeTax = (index: number) => {
  const newTaxes = [...taxesAndFees.value];
  newTaxes.splice(index, 1);
  taxesAndFees.value = newTaxes;
  emit("update:modelValue", newTaxes);
};

const updateTaxName = (index: number, value: string) => {
  const newTaxes = [...taxesAndFees.value];
  newTaxes[index].name = value;
  taxesAndFees.value = newTaxes;
  emit("update:modelValue", newTaxes);
};

const updateTaxAmount = (index: number, value: string) => {
  const newTaxes = [...taxesAndFees.value];
  const numValue = parseFloat(value);
  newTaxes[index].amount = isNaN(numValue) ? 0 : numValue;
  taxesAndFees.value = newTaxes;
  emit("update:modelValue", newTaxes);
};

const selectType = (index: number, type: string) => {
  const newTaxes = [...taxesAndFees.value];
  newTaxes[index].type = type as TaxFeeTypes;
  taxesAndFees.value = newTaxes;
  emit("update:modelValue", newTaxes);
};

const validateNumberInput = (event: KeyboardEvent) => {
  const key = event.key;
  const target = event.target as HTMLInputElement;
  const value = target.value;

  // Allow numbers, decimal point (only one), and backspace
  if (!/^\d$/.test(key) && key !== "." && key !== "Backspace") {
    event.preventDefault();
  }

  // Prevent multiple decimal points
  if (key === "." && value.includes(".")) {
    event.preventDefault();
  }
};
</script>
