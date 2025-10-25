import * as React from "react"
import * as SwitchPrimitive from "@radix-ui/react-switch"

import { cn } from "@/lib/utils"

type sizes = "small" | "medium" | "large";

const sizeRootClasses: Record<sizes, string> = {
  small: "h-6 w-10",
  medium: "h-7 w-12",
  large: "h-8 w-14",
};

const sizeThumbClasses: Record<sizes, string> = {
  small: "h-5 w-5 data-[state=checked]:translate-x-4",
  medium: "h-6 w-6 data-[state=checked]:translate-x-5",
  large: "h-7 w-7 data-[state=checked]:translate-x-6",
};

interface SwitchProps
  extends React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root> {
  size?: sizes;
}

function Switch({
  className,
  size = "small",
  ...props
}: SwitchProps) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        sizeRootClasses[size],
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0",
          sizeThumbClasses[size]
        )}
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch }
