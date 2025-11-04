export const SORTABLE_COLUMNS = ["status", "stopStatus", "pickupDate"];


export const ALL_STATUS_OPTIONS_KEY = {
  ALL: "ALL",
  ALL_WORKABLE: "ALL_WORKABLE",
  CUSTOMER_TENDER: "CUSTOMER_TENDER",
  OPEN: "OPEN",
  OFFERED: "OFFERED",
  COVERED: "COVERED",
  IN_TRANSIT: "IN_TRANSIT",
  DELIVERED: "DELIVERED",
  INVOICED: "INVOICED",
  REJECTED: "REJECTED",
  CANCELLED: "CANCELLED",
  PICKUP: "PICKUP",
  DELIVERY: "DELIVERY",
  EDI_UPDATE: "EDI_UPDATE",
} as const;


export const ALL_STOPS_STATUS_OPTIONS_KEY = {
  ON_TIME: "ON_TIME",
  APPOINTMENT: "APPOINTMENT",
  ARRIVAL: "ARRIVAL",
  DEPARTURE: "DEPARTURE",
  APPOINTMENT_WARNING: "APPOINTMENT_WARNING",
  ARRIVAL_WARNING: "ARRIVAL_WARNING",
  DEPARTURE_WARNING: "DEPARTURE_WARNING",
  APPOINTMENT_LATE: "APPOINTMENT_LATE",
  ARRIVAL_LATE: "ARRIVAL_LATE",
  DEPARTURE_LATE: "DEPARTURE_LATE",
  CHECK_CALL: "CHECK_CALL",
} as const;

export const ALL_STOPS_STATUS_OPTIONS_LABELS = {
  ON_TIME: "On Time",
  APPOINTMENT: "Appointment",
  ARRIVAL: "Arrival",
  DEPARTURE: "Departure",
  APPOINTMENT_WARNING: "App Warning",
  ARRIVAL_WARNING: "Arrival Warning",
  DEPARTURE_WARNING: "Departure Warning",
  APPOINTMENT_LATE: "App Late",
  ARRIVAL_LATE: "Arrival Late",
  DEPARTURE_LATE: "Departure Late",
  CHECK_CALL: "Check Call",
} as const;

const DEFAULT_STATUS_OPTIONS = [
  {
    key: ALL_STATUS_OPTIONS_KEY.ALL,
    label: "All",
    status: "info",
  },
  {
    key: ALL_STATUS_OPTIONS_KEY.ALL_WORKABLE,
    label: "All Workable",
    status: "info",
  },
  {
    key: ALL_STATUS_OPTIONS_KEY.DELIVERED,
    label: "Delivered",
    status: "success",
  },
  {
    key: ALL_STATUS_OPTIONS_KEY.INVOICED,
    label: "Invoiced",
    status: "info",
  },
  {
    key: ALL_STATUS_OPTIONS_KEY.REJECTED,
    label: "Rejected",
    status: "error",
  },
  {
    key: ALL_STATUS_OPTIONS_KEY.CANCELLED,
    label: "Cancelled",
    status: "error",
  },
];

const ALL_WORKABLE_STATUS = [
  {
    key: ALL_STATUS_OPTIONS_KEY.CUSTOMER_TENDER,
    label: "Customer Tender",
    status: "warning",
  },
  {
    key: ALL_STATUS_OPTIONS_KEY.EDI_UPDATE,
    label: "EDI Update",
    status: "warning",
  },
  {
    key: ALL_STATUS_OPTIONS_KEY.OPEN,
    label: "Open",
    status: "warning",
  },
  {
    key: ALL_STATUS_OPTIONS_KEY.OFFERED,
    label: "Offered",
    status: "info",
  },
  {
    key: ALL_STATUS_OPTIONS_KEY.COVERED,
    label: "Covered",
    status: "info",
  },
  {
    key: ALL_STATUS_OPTIONS_KEY.IN_TRANSIT,
    label: "In Transit",
    status: "success",
  },
];

export const ALL_STATUS_OPTIONS = [...ALL_WORKABLE_STATUS, ...DEFAULT_STATUS_OPTIONS];

export const STOPS_STATUS_OPTIONS = [
  {
    key: ALL_STOPS_STATUS_OPTIONS_KEY.ON_TIME,
    label: ALL_STOPS_STATUS_OPTIONS_LABELS.ON_TIME,
    status: "info",
  },
  {
    key: ALL_STOPS_STATUS_OPTIONS_KEY.APPOINTMENT,
    label: ALL_STOPS_STATUS_OPTIONS_LABELS.APPOINTMENT,
    status: "success",
  },
  {
    key: ALL_STOPS_STATUS_OPTIONS_KEY.ARRIVAL,
    label: ALL_STOPS_STATUS_OPTIONS_LABELS.ARRIVAL,
    status: "success",
  },
  {
    key: ALL_STOPS_STATUS_OPTIONS_KEY.DEPARTURE,
    label: ALL_STOPS_STATUS_OPTIONS_LABELS.DEPARTURE,
    status: "success",
  },
  {
    key: ALL_STOPS_STATUS_OPTIONS_KEY.APPOINTMENT_WARNING,
    label: ALL_STOPS_STATUS_OPTIONS_LABELS.APPOINTMENT_WARNING,
    status: "warning",
  },
  {
    key: ALL_STOPS_STATUS_OPTIONS_KEY.ARRIVAL_WARNING,
    label: ALL_STOPS_STATUS_OPTIONS_LABELS.ARRIVAL_WARNING,
    status: "warning",
  },
  {
    key: ALL_STOPS_STATUS_OPTIONS_KEY.DEPARTURE_WARNING,
    label: ALL_STOPS_STATUS_OPTIONS_LABELS.DEPARTURE_WARNING,
    status: "warning",
  },
  {
    key: ALL_STOPS_STATUS_OPTIONS_KEY.APPOINTMENT_LATE,
    label: ALL_STOPS_STATUS_OPTIONS_LABELS.APPOINTMENT_LATE,
    status: "error",
  },
  {
    key: ALL_STOPS_STATUS_OPTIONS_KEY.ARRIVAL_LATE,
    label: ALL_STOPS_STATUS_OPTIONS_LABELS.ARRIVAL_LATE,
    status: "error",
  },
  {
    key: ALL_STOPS_STATUS_OPTIONS_KEY.DEPARTURE_LATE,
    label: ALL_STOPS_STATUS_OPTIONS_LABELS.DEPARTURE_LATE,
    status: "error",
  },
  {
    key: ALL_STOPS_STATUS_OPTIONS_KEY.CHECK_CALL,
    label: ALL_STOPS_STATUS_OPTIONS_LABELS.CHECK_CALL,
    status: "check-call",
  },
];

export const DATE_FORMATS = {
  DISPATCH_TABLE: "MM/DD",
  EVENT_ITEM_DATE: "MMM DD, YYYY",
  EVENT_ITEM_TIME: "HH:mm A",
  DISPATCH_CARRIER_DATE: "MMM DD, YYYY",
  DELIVERY_DATE: "MMMM D, YYYY",
  DELIVERY_TIME: "hh:mm A",
  TIME_PICKER: "h:mm A",
  CARRIERS_DATE: "MM/DD/YY",
  TRANSMISSION_TIME: "MMM DD, YYYY - hh:mm A",
};
