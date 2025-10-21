import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const sizeClasses = {
  large: "size-6",
  medium: "size-5",
  small: "size-4",
};

function Checkbox({
  className,
  size = "medium",
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root> & {
  size?: "large" | "medium" | "small";
}) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "peer shrink-0 my-2 rounded-sm border disabled:cursor-not-allowed disabled:bg-neutral-100 disabled:border-none ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 data-[state=checked]:bg-primary data-[state=checked]:border-none hover:border-neutral-500",
        sizeClasses[size],
        {
          "disabled:bg-neutral-100 disabled:border-none disabled:cursor-not-allowed data-[state=checked]:bg-neutral-100":
            props.disabled && props.checked,
        },
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        className={cn(
          "flex items-center justify-center text-primary-foreground"
        )}
      >
        <Check className="h-4 w-4" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };
