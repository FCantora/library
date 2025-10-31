import { cn } from "@/lib/utils";
import * as SheetPrimitive from "@radix-ui/react-dialog";

import {
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

import { Button } from "@/components/button";

interface DrawerProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  action: () => void;
  onDismiss: () => void;
  onOpenChange: (open: boolean) => void;
  dismissLabel?: string;
  confirmLabel?: string;
  footerContent?: React.ReactNode;
  open?: boolean;
  size?: "carriers" | "edit";
  disabled?: boolean;
  disableCancel?: boolean;
  hasAlert?: boolean;
  sheetClassName?: string;
}

export const Drawer = (props: DrawerProps) => {
  const {
    action,
    onDismiss,
    onOpenChange,
    children,
    confirmLabel,
    dismissLabel,
    footerContent,
    title,
    open,
    size,
    disabled,
    disableCancel,
    hasAlert,
    sheetClassName = "",
  } = props;

  return (
    <SheetPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <SheetContent size={size} disabled={disableCancel ?? false}>
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
        </SheetHeader>
        {hasAlert ? (
          <div className="flex flex-col gap-4 p-4 overflow-y-auto">{children}</div>
        ) : (
          <div className={cn("p-4 overflow-y-auto", sheetClassName)}>{children}</div>
        )}
        <SheetFooter>
          {footerContent ? (
            footerContent
          ) : (
            <>
              <SheetPrimitive.Close asChild>
                <Button
                  variant="secondary"
                  size="medium"
                  onClick={onDismiss}
                  disabled={disableCancel ?? false}
                >
                  {dismissLabel || "Cancel"}
                </Button>
              </SheetPrimitive.Close>
              <Button
                onClick={action}
                variant="primary"
                size="medium"
                disabled={disabled}
              >
                {confirmLabel || "Confirm"}
              </Button>
            </>
          )}
        </SheetFooter>
      </SheetContent>
    </SheetPrimitive.Root>
  );
};
