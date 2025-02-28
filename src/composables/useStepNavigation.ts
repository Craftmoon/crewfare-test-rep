import { ref } from "vue";

export function useStepNavigation(totalSteps: number) {
  const currentStep = ref(0);

  const goToNext = () => {
    if (currentStep.value < totalSteps - 1) {
      currentStep.value++;
    }
  };

  const goToPrevious = () => {
    if (currentStep.value > 0) {
      currentStep.value--;
    }
  };

  const goToStep = (step: number) => {
    if (step >= 0 && step < totalSteps) {
      currentStep.value = step;
    }
  };

  return {
    currentStep,
    goToNext,
    goToPrevious,
    goToStep,
  };
}
