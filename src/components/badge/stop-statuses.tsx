import Badge from "./badge";

type StatusType = "info" | "warning" | "success" | "error" | "check-call";
export type Severity = "low" | "medium" | "high" | "critical" | null;

// Mock constants for the component
const ALL_STOPS_STATUS_OPTIONS_LABELS = {
  PICKUP_SCHEDULED: "Pickup Scheduled",
  PICKUP_SCHEDULED_LOW: "Pickup Scheduled (Low Priority)",
  PICKUP_SCHEDULED_MEDIUM: "Pickup Scheduled (Medium Priority)",
  PICKUP_SCHEDULED_HIGH: "Pickup Scheduled (High Priority)",
  DELIVERY_DELAYED: "Delivery Delayed",
  DELIVERY_DELAYED_LOW: "Delivery Delayed (Low Priority)",
  DELIVERY_DELAYED_MEDIUM: "Delivery Delayed (Medium Priority)",
  DELIVERY_DELAYED_HIGH: "Delivery Delayed (High Priority)",
  DELIVERED: "Delivered",
  DELIVERED_LOW: "Delivered (Low Priority)",
  DELIVERED_MEDIUM: "Delivered (Medium Priority)",
  DELIVERED_HIGH: "Delivered (High Priority)",
  CANCELLED: "Cancelled",
  CANCELLED_LOW: "Cancelled (Low Priority)",
  CANCELLED_MEDIUM: "Cancelled (Medium Priority)",
  CANCELLED_HIGH: "Cancelled (High Priority)",
  APPOINTMENT: "Appointment",
  APPOINTMENT_WARNING: "Appointment (Warning)",
  ARRIVAL: "Arrival",
  ARRIVAL_LATE: "Arrival (Late)",
  ARRIVAL_WARNING: "Arrival (Warning)",
  DEPARTURE: "Departure",
  DEPARTURE_LATE: "Departure (Late)",
  DEPARTURE_WARNING: "Departure (Warning)",
  ON_TIME: "On Time",
} as const;

const STOPS_STATUS_OPTIONS = [
  { key: "PICKUP_SCHEDULED", status: "info" as StatusType },
  { key: "PICKUP_SCHEDULED_LOW", status: "info" as StatusType },
  { key: "PICKUP_SCHEDULED_MEDIUM", status: "info" as StatusType },
  { key: "PICKUP_SCHEDULED_HIGH", status: "info" as StatusType },
  { key: "DELIVERY_DELAYED", status: "warning" as StatusType },
  { key: "DELIVERY_DELAYED_LOW", status: "warning" as StatusType },
  { key: "DELIVERY_DELAYED_MEDIUM", status: "warning" as StatusType },
  { key: "DELIVERY_DELAYED_HIGH", status: "warning" as StatusType },
  { key: "DELIVERED", status: "success" as StatusType },
  { key: "DELIVERED_LOW", status: "success" as StatusType },
  { key: "DELIVERED_MEDIUM", status: "success" as StatusType },
  { key: "DELIVERED_HIGH", status: "success" as StatusType },
  { key: "CANCELLED", status: "error" as StatusType },
  { key: "CANCELLED_LOW", status: "error" as StatusType },
  { key: "CANCELLED_MEDIUM", status: "error" as StatusType },
  { key: "CANCELLED_HIGH", status: "error" as StatusType },
  { key: "APPOINTMENT", status: "info" as StatusType },
  { key: "APPOINTMENT_WARNING", status: "warning" as StatusType },
  { key: "ARRIVAL", status: "info" as StatusType },
  { key: "ARRIVAL_LATE", status: "error" as StatusType },
  { key: "ARRIVAL_WARNING", status: "warning" as StatusType },
  { key: "DEPARTURE", status: "info" as StatusType },
  { key: "DEPARTURE_LATE", status: "error" as StatusType },
  { key: "DEPARTURE_WARNING", status: "warning" as StatusType },
  { key: "ON_TIME", status: "success" as StatusType },
];

type StopStatusesProps = {
  status: string | keyof typeof ALL_STOPS_STATUS_OPTIONS_LABELS;
  severitySuffix: Severity;
};

const StatusColors: Record<StatusType, string> = {
  info: "bg-info-foreground",
  warning: "bg-warning-foreground",
  success: "bg-success-foreground",
  error: "bg-error-foreground",
  "check-call": "bg-muted-foreground",
};

const BackgroundColors: Record<StatusType, string> = {
  info: "bg-info",
  warning: "bg-warning",
  success: "bg-success",
  error: "bg-error",
  "check-call": "bg-muted",
};

const StopStatuses = (props: StopStatusesProps) => {
  const { status } = props;

  const stopStatusKey =
    status as keyof typeof ALL_STOPS_STATUS_OPTIONS_LABELS;

  const stopStatusLabel = ALL_STOPS_STATUS_OPTIONS_LABELS[stopStatusKey] || "";

  const statusOption = STOPS_STATUS_OPTIONS.find((s) => s.key === status);

  const variantStatus = statusOption?.status as StatusType;

  const statusColor = StatusColors[variantStatus];

  const backgroundColor = BackgroundColors[variantStatus];

  return (
    <Badge
      className={`p-2 gap-1.5 rounded-full flex flex-row w-fit ${backgroundColor}`}
    >
      {statusColor && (
        <div
          className={`w-2 h-2 rounded-full ${statusColor} align-middle items-start`}
        ></div>
      )}
      {stopStatusLabel}
    </Badge>
  );
};

export default StopStatuses;
