import * as React from "react";
import { CheckIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "../button";

export interface StepperProps extends React.HTMLAttributes<HTMLDivElement> {
  steps: {
    id: number;
    label: string;
  }[];
  activeStep: number;
  renderStep?: (
    step: { id: number; label: string },
    state: { isCompleted: boolean; isCurrent: boolean }
  ) => React.ReactNode;
}

export function Stepper({
  steps,
  activeStep,
  className,
  renderStep,
  ...props
}: StepperProps) {
  return (
    <div className={cn("flex flex-col w-full", className)} {...props}>
      <div className="flex flex-row items-center">
        {steps.map((step, index) => {
          if (renderStep) {
            const isCompleted = index < activeStep;
            const isCurrent = index === activeStep;
            return renderStep(step, { isCompleted, isCurrent });
          }
          return (
            <StepperStep
              key={step.id}
              index={index}
              step={step}
              activeStep={activeStep}
              totalSteps={steps.length}
            />
          );
        })}
      </div>
    </div>
  );
}

interface StepperStepProps {
  index: number;
  step: { id: number; label: string };
  activeStep: number;
  totalSteps: number;
}

function StepperStep({
  index,
  step,
  activeStep,
  totalSteps,
}: StepperStepProps) {
  const isCompleted = index < activeStep;

  const isCurrent = index === activeStep;

  let bulletBg = "bg-neutral-500";

  let bulletBorder = "border-neutral-600";

  let bulletText = "text-foreground";

  let bulletContent = <p>{step.id}</p>;

  if (isCompleted) {
    bulletBg = "bg-success-foreground";

    bulletBorder = "border-success";

    bulletContent = (
      <CheckIcon className="w-4 h-4 stroke-3 text-white" aria-label="Completed" />
    );
  } else if (isCurrent) {
    bulletBg = "bg-primary";

    bulletBorder = "border-yellow-800";

    bulletText = "text-white";
  }

  let leftLineColor = "bg-neutral-500";

  if (index > 0) {
    if (activeStep === index - 1) {
      leftLineColor = "bg-primary";
    } else if (index - 1 < activeStep) {
      leftLineColor = "bg-success-foreground";
    }
  }

  let rightLineColor = "bg-neutral-500";

  if (isCurrent) {
    rightLineColor = "bg-primary";
  } else if (isCompleted) {
    rightLineColor = "bg-success-foreground";
  }

  return (
    <div
      key={step.id}
      className="flex flex-col items-center"
      style={{ width: `${100 / totalSteps}%` }}
    >
      <div className="flex flex-row items-center relative w-full">
        {index !== 0 && (
          <div
            className={cn(
              "h-[2px] absolute left-0 top-1/2 -translate-y-1/2 w-1/2",
              leftLineColor
            )}
          />
        )}
        <div
          className={cn(
            "flex flex-col items-center justify-center h-8 w-8 rounded-full border-4 font-bold z-20 mx-auto",
            bulletBg,
            bulletBorder,
            bulletText
          )}
        >
          {bulletContent}
        </div>
        {index !== totalSteps - 1 && (
          <div
            className={cn(
              "h-[2px] absolute right-0 top-1/2 -translate-y-1/2 w-1/2",
              rightLineColor
            )}
          />
        )}
      </div>
      <p className="mt-3 text-foreground font-normal text-sm">{step.label}</p>
    </div>
  );
}

export interface StepperContentProps
  extends React.HTMLAttributes<HTMLDivElement> {
  step: number;
  activeStep: number;
}

export function StepperContent({
  step,
  activeStep,
  className,
  children,
  ...props
}: StepperContentProps) {
  const isActive = step === activeStep;

  if (!isActive) return null;

  return (
    <div className={cn("mt-8", className)} {...props}>
      {children}
    </div>
  );
}

export interface StepperNavigationProps
  extends React.HTMLAttributes<HTMLDivElement> {
  activeStep: number;
  totalSteps: number;
  onNext?: () => void;
  onBack?: () => void;
  onReset?: () => void;
  nextLabel?: string;
  backLabel?: string;
  resetLabel?: string;
  disableNext?: boolean;
}

export function StepperNavigation({
  activeStep,
  totalSteps,
  onNext,
  onBack,
  onReset,
  nextLabel = "Next",
  backLabel = "Back",
  resetLabel = "Reset",
  disableNext = false,
  className,
  ...props
}: StepperNavigationProps) {
  const isFirstStep = activeStep === 0;

  const isLastStep = activeStep === totalSteps - 1;

  return (
    <div className={cn("flex justify-between mt-6", className)} {...props}>
      <div>
        {!isFirstStep && (
          <Button variant="secondary" onClick={onBack}>
            {backLabel}
          </Button>
        )}
      </div>
      <div>
        {isLastStep ? (
          <Button variant="primary" onClick={onReset}>
            {resetLabel}
          </Button>
        ) : (
          <Button variant="primary" onClick={onNext} disabled={disableNext}>
            {nextLabel}
          </Button>
        )}
      </div>
    </div>
  );
}
