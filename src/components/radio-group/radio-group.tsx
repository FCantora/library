import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Circle } from "lucide-react";

import { cn } from "@/lib/utils";

const sizeClasses = {
  large: "h-6 w-6 border-4",
  medium: "h-5 w-5 border-2",
  small: "h-4 w-4 border-2",
} as const;

const indicatorSizes = {
  large: "50%",
  medium: "60%",
  small: "45%",
} as const;

function RadioGroup({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Root> & {
  size?: keyof typeof sizeClasses;
}) {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      className={cn("flex gap-2", className)}
      {...props}
    />
  );
}

function RadioGroupItem({
  className,
  size = "medium",
  disabled,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Item> & {
  size?: keyof typeof sizeClasses;
}) {
  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      disabled={disabled}
      className={cn(
        "relative rounded-full border-neutral-400 ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:bg-neutral-300 disabled:border-none hover:border-neutral-500 aria-checked:bg-primary aria-checked:border-none aria-checked:disabled:bg-neutral-300",
        sizeClasses[size],
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator
        data-slot="radio-group-indicator"
        className="flex items-center justify-center absolute inset-0"
      >
        <Circle
          className={cn("fill-background text-background", {
            "fill-neutral-400 text-neutral-400": disabled,
          })}
          style={{
            width: indicatorSizes[size],
            height: indicatorSizes[size],
          }}
        />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
}

export { RadioGroup, RadioGroupItem };
