export interface DrawerProps extends React.HTMLAttributes<HTMLDivElement> {
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
