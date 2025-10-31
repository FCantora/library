import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";
import { fn } from "storybook/test";
import {
  Stepper,
  type StepperProps,
  StepperContent,
  StepperNavigation,
} from "./stepper";

// --- Datos de Pasos Compartidos ---
const SAMPLE_STEPS = [
  { id: 1, label: "Información Personal" },
  { id: 2, label: "Configuración de Cuenta" },
  { id: 3, label: "Confirmación y Pago" },
  { id: 4, label: "Finalizado" },
];

// --- Componente Wrapper Interactivo (Stateful) ---

/**
 * Componente Wrapper que gestiona el estado del paso activo.
 * Las funciones de callback (onNext, onBack, onReset) son los mocks 'fn()'.
 */
const InteractiveStepperWrapper: React.FC<
  Omit<StepperProps, "activeStep"> & {
    initialActiveStep: number;
    onNext?: () => void;
    onBack?: () => void;
    onReset?: () => void;
  }
> = ({
  steps,
  initialActiveStep,
  renderStep,
  onNext: onNextMock,
  onBack: onBackMock,
  onReset: onResetMock,
  ...props
}) => {
  const [activeStep, setActiveStep] = React.useState(initialActiveStep);

  const handleNext = () => {
    setActiveStep((prev) => Math.min(prev + 1, steps.length - 1));
    onNextMock?.();
  };

  const handleBack = () => {
    setActiveStep((prev) => Math.max(prev - 1, 0));
    onBackMock?.();
  };

  const handleReset = () => {
    setActiveStep(0);
    onResetMock?.();
  };

  const contentPlaceholder = (stepLabel: string) => (
    <div className="p-6 border rounded-lg bg-gray-50 dark:bg-gray-800">
      <h3 className="text-lg font-semibold">Contenido del Paso {stepLabel}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
        El paso actual es: {activeStep + 1}
      </p>
    </div>
  );

  return (
    <div className="w-full">
      <Stepper
        steps={steps}
        activeStep={activeStep}
        renderStep={renderStep}
        {...props}
      />

      {/* Contenido Dinámico */}
      {steps.map((step, index) => (
        <StepperContent key={step.id} step={index} activeStep={activeStep}>
          {contentPlaceholder(step.label)}
        </StepperContent>
      ))}

      {/* Navegación */}
      <StepperNavigation
        activeStep={activeStep}
        totalSteps={steps.length}
        onNext={handleNext}
        onBack={handleBack}
        onReset={handleReset}
      />
    </div>
  );
};

const meta: Meta<typeof InteractiveStepperWrapper> = {
  title: "Components/Stepper",
  component: InteractiveStepperWrapper,
  tags: ["autodocs"],
  args: {
    steps: SAMPLE_STEPS,
    initialActiveStep: 0,
    onNext: fn(),
    onBack: fn(),
    onReset: fn(),
  },
  argTypes: {
    initialActiveStep: {
      control: { type: "range", min: 0, max: SAMPLE_STEPS.length - 1, step: 1 },
      description: "Índice (0-basado) del paso inicial activo.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const SecondStepActive: Story = {
  args: {
    initialActiveStep: 1,
  },
};

export const FinalStep: Story = {
  args: {
    initialActiveStep: SAMPLE_STEPS.length - 1,
  },
};
