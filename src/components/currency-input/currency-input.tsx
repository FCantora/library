import * as React from "react";
import { DollarSign } from "lucide-react";

import { Input } from "../input";
import { cn } from "@/lib/utils";

interface CurrencyInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  onValueChange?: (value: string) => void;
}

function CurrencyInput({
  className,
  onValueChange,
  disabled,
  defaultValue,
  ...props
}: CurrencyInputProps) {
  const [value, setValue] = React.useState(() => {
    if (
      defaultValue === undefined ||
      defaultValue === null ||
      defaultValue === "" ||
      defaultValue === "0"
    ) {
      return "";
    }

    return defaultValue;
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.replace(/^(\d+\.\d{0,2})\d*$/, "$1");

    setValue(inputValue);

    if (onValueChange) {
      onValueChange(inputValue);
    }
  };

  return (
    <div className="relative">
      <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
      <Input
        type="number"
        inputMode="decimal"
        className={cn(
          "pl-10 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
          className
        )}
        value={value}
        onChange={handleChange}
        disabled={disabled}
        onWheel={(e) => (e.target as HTMLInputElement).blur()}
        {...props}
      />
    </div>
  );
}

export { CurrencyInput };
