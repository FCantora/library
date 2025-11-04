import { ALL_STATUS_OPTIONS, ALL_STATUS_OPTIONS_KEY } from "../dispatch-table/dispatch-table-constants";
import Badge from "./badge";

type StatusType = "info" | "warning" | "success" | "error";

type StatusesProps = {
  status: keyof typeof ALL_STATUS_OPTIONS_KEY;
  size: "small" | "large";
  className?: string;
};

export const Statuses = (props: StatusesProps) => {
  const { status, size, className } = props;

  const variantStatus = ALL_STATUS_OPTIONS.find((s) => s.key === status)
    ?.status as StatusType;

  return (
    <Badge variant={variantStatus} size={size} className={className}>
      {ALL_STATUS_OPTIONS.find((s) => s.key === status)?.label}
    </Badge>
  );
};
