/* eslint-disable @typescript-eslint/no-unused-vars */
import Badge from "./badge";

type StatusType = "info" | "warning" | "success" | "error";

// Mock constants for the component
const ALL_STATUS_OPTIONS_KEY = {
  ACTIVE: "ACTIVE",
  PENDING: "PENDING",
  COMPLETED: "COMPLETED",
  CANCELLED: "CANCELLED",
  IN_PROGRESS: "IN_PROGRESS",
} as const;

const ALL_STATUS_OPTIONS = [
  { key: "ACTIVE", label: "Active", status: "success" as StatusType },
  { key: "PENDING", label: "Pending", status: "info" as StatusType },
  { key: "COMPLETED", label: "Completed", status: "success" as StatusType },
  { key: "CANCELLED", label: "Cancelled", status: "error" as StatusType },
  { key: "IN_PROGRESS", label: "In Progress", status: "warning" as StatusType },
];

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
