import { describe, it, expect } from "vitest";
import { useStepNavigation } from "../../composables/useStepNavigation";

describe("useStepNavigation", () => {
  it("initializes with correct starting step", () => {
    const { currentStep } = useStepNavigation(3);
    expect(currentStep.value).toBe(0);
  });

  it("navigates to next step", () => {
    const { currentStep, goToNext } = useStepNavigation(3);
    goToNext();
    expect(currentStep.value).toBe(1);
  });

  it("navigates to previous step", () => {
    const { currentStep, goToNext, goToPrevious } = useStepNavigation(3);
    goToNext();
    goToNext();
    goToPrevious();
    expect(currentStep.value).toBe(1);
  });

  it("prevents navigation beyond bounds", () => {
    const { currentStep, goToNext, goToPrevious } = useStepNavigation(3);

    // Test lower bound
    goToPrevious();
    expect(currentStep.value).toBe(0);

    // Test upper bound
    goToNext();
    goToNext();
    goToNext();
    goToNext();
    expect(currentStep.value).toBe(2);
  });

  it("allows direct navigation to step", () => {
    const { currentStep, goToStep } = useStepNavigation(3);
    goToStep(1);
    expect(currentStep.value).toBe(1);
  });

  it("prevents direct navigation to invalid steps", () => {
    const { currentStep, goToStep } = useStepNavigation(3);
    goToStep(-1);
    expect(currentStep.value).toBe(0);
    goToStep(3);
    expect(currentStep.value).toBe(0);
  });
});
