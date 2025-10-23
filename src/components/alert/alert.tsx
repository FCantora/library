import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Button } from "../button";
import { X } from "lucide-react";

const alertVariants = cva(
  "relative min-w-96 w-auto h-auto rounded-lg p-6 gap-4 [&>svg~*]:pl-7 [&>svg]:absolute [&>svg]:left-4 text-white",
  {
    variants: {
      variant: {
        info: "bg-info [&>svg]:text-info-foreground",
        success: "bg-success [&>svg]:text-success-foreground",
        warning: "bg-warning [&>svg]:text-warning-foreground",
        error: "bg-error [&>svg]:text-error-foreground",
      },
    },
  }
);

function Alert({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof alertVariants>) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  );
}

interface AlertTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  onClose?: () => void;
}

function AlertTitle({
  className,
  onClose,
  ...props
}: AlertTitleProps) {
  return (
    <div className="flex flex-row justify-between items-start">
      <h5
        data-slot="alert-title"
        className={cn(
          "col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight",
          className
        )}
        {...props}
      />
      {onClose && (
        <Button
          variant={"tertiary"}
          size={"small"}
          className="text-current p-0 w-4 h-4 mt-1 active:outline m-0"
          onClick={onClose}
        >
          <X className="w-4 h-4" />
        </Button>
      )}
    </div>
  );
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        "text-muted col-start-2 grid font-semiboldjustify-items-start gap-1 text-sm [&_p]:leading-relaxed",
        className
      )}
      {...props}
    />
  );
}

export { Alert, AlertTitle, AlertDescription };
