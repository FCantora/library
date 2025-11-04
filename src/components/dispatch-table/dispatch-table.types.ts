import type { ColumnDef } from "@tanstack/react-table";
import type { ALL_STATUS_OPTIONS_KEY, ALL_STOPS_STATUS_OPTIONS_LABELS } from "./dispatch-table-constants";

export const KMA_KEYS = {
  ALL: "ALL",
  AL_MOB: "AL_MOB",
  AR_LIT: "AR_LIT",
  CA_LAX: "CA_LAX",
  CA_SDI: "CA_SDI",
  CO_DEN: "CO_DEN",
  CT_HAR: "CT_HAR",
  FL_LAK: "FL_LAK",
  FL_TAL: "FL_TAL",
  IA_DES: "IA_DES",
  ID_TWI: "ID_TWI",
  IL_CHI: "IL_CHI",
  IN_EVA: "IN_EVA",
  KY_BOW: "KY_BOW",
  MA_BOS: "MA_BOS",
  MO_GIR: "MO_GIR",
  MO_KAN: "MO_KAN",
  NC_GRE: "NC_GRE",
  NC_WIL: "NC_WIL",
  NF_STJ: "NF_STJ",
  NM_ALB: "NM_ALB",
  NY_ALB: "NY_ALB",
  SC_COL: "SC_COL",
  TN_MEM: "TN_MEM",
  TX_FTW: "TX_FTW",
  TX_MCA: "TX_MCA",
  VA_ALE: "VA_ALE",
  WA_SEA: "WA_SEA",
  WI_EAU: "WI_EAU",
  WI_MIL: "WI_MIL",
  WY_GRE: "WY_GRE",
} as const;

export type KmaKey = (typeof KMA_KEYS)[keyof typeof KMA_KEYS];

export const EventType = {
  INFO: "INFO",
  MESSAGE: "MESSAGE",
  ERROR: "ERROR",
  CHECKCALL: "CHECKCALL",
  ACTION: "ACTION",
  NOTE: "NOTE",
} as const;

export const KMA_LABELS: Record<KmaKey, string> = {
  [KMA_KEYS.ALL]: "All",
  [KMA_KEYS.AL_MOB]: "AL_MOB",
  [KMA_KEYS.AR_LIT]: "AR_LIT",
  [KMA_KEYS.CA_LAX]: "CA_LAX",
  [KMA_KEYS.CA_SDI]: "CA_SDI",
  [KMA_KEYS.CO_DEN]: "CO_DEN",
  [KMA_KEYS.CT_HAR]: "CT_HAR",
  [KMA_KEYS.FL_LAK]: "FL_LAK",
  [KMA_KEYS.FL_TAL]: "FL_TAL",
  [KMA_KEYS.IA_DES]: "IA_DES",
  [KMA_KEYS.ID_TWI]: "ID_TWI",
  [KMA_KEYS.IL_CHI]: "IL_CHI",
  [KMA_KEYS.IN_EVA]: "IN_EVA",
  [KMA_KEYS.KY_BOW]: "KY_BOW",
  [KMA_KEYS.MA_BOS]: "MA_BOS",
  [KMA_KEYS.MO_GIR]: "MO_GIR",
  [KMA_KEYS.MO_KAN]: "MO_KAN",
  [KMA_KEYS.NC_GRE]: "NC_GRE",
  [KMA_KEYS.NC_WIL]: "NC_WIL",
  [KMA_KEYS.NF_STJ]: "NF_STJ",
  [KMA_KEYS.NM_ALB]: "NM_ALB",
  [KMA_KEYS.NY_ALB]: "NY_ALB",
  [KMA_KEYS.SC_COL]: "SC_COL",
  [KMA_KEYS.TN_MEM]: "TN_MEM",
  [KMA_KEYS.TX_FTW]: "TX_FTW",
  [KMA_KEYS.TX_MCA]: "TX_MCA",
  [KMA_KEYS.VA_ALE]: "VA_ALE",
  [KMA_KEYS.WA_SEA]: "WA_SEA",
  [KMA_KEYS.WI_EAU]: "WI_EAU",
  [KMA_KEYS.WI_MIL]: "WI_MIL",
  [KMA_KEYS.WY_GRE]: "WY_GRE",
};

export const KMAS_FILTERS = (Object.keys(KMA_KEYS) as KmaKey[]).map((key) => ({
  key,
  label: KMA_LABELS[key],
}));

export const STATE_KEYS = {
  ALL: "ALL",
  CO: "CO",
  GA: "GA",
  LA: "LA",
  MO: "MO",
  NC: "NC",
} as const;

export type StateKey = (typeof STATE_KEYS)[keyof typeof STATE_KEYS];

export const STATE_ACRONYM_LABELS: Record<StateKey, string> = {
  [STATE_KEYS.ALL]: "All",
  [STATE_KEYS.CO]: "CO",
  [STATE_KEYS.GA]: "GA",
  [STATE_KEYS.LA]: "LA",
  [STATE_KEYS.MO]: "MO",
  [STATE_KEYS.NC]: "NC",
};

export const STATE_LABELS: Record<StateKey, string> = {
  [STATE_KEYS.ALL]: "All States",
  [STATE_KEYS.CO]: "Colorado",
  [STATE_KEYS.GA]: "Georgia",
  [STATE_KEYS.LA]: "Louisiana",
  [STATE_KEYS.MO]: "Missouri",
  [STATE_KEYS.NC]: "North Carolina",
};

export const STATES = (Object.keys(STATE_KEYS) as StateKey[]).map((key) => ({
  key,
  label: STATE_ACRONYM_LABELS[key],
}));

export type Severity = "warning" | "late" | null;

export enum TYPE_VALUES {
  TL = "TL",
  LTL = "LTL",
}

export interface DispatchResponsePayload {
  id: number;
  status: keyof typeof ALL_STATUS_OPTIONS_KEY;
  customerLoadNumber: number;
  loadNumber: string;
  customer: string;
  shipper: string;
  city: (typeof STATE_LABELS)[keyof typeof STATE_LABELS];
  numberOfStops: string;
  rateType: string;
  totalMiles: number;
  shippedPallets: number;
  shippedCube: number;
  pickupDate: string;
  stopStatus: keyof typeof ALL_STOPS_STATUS_OPTIONS_LABELS;
  severitySuffix?: string;
  kma: KmaKey;
  carrier: string;
  destination?: string;
  multistop?: DispatchResponsePayload[];
  stops?: DispatchStopsPayload[];
}

export interface DispatchStopsPayload
  extends Omit<DispatchResponsePayload, "status"> {
  stopType: "pickup" | "delivery";
}

export interface DispatchDateRange {
  fromDate: string;
  toDate: string;
}

export interface DispatchRequestQueryParamsPayload {
  dateRanges: DispatchDateRange;
  status: string;
  states: string;
  kma: string;
}

export type DispatchTypes = DispatchResponsePayload;

export type DispatchTableProps = {
  columns: ColumnDef<DispatchTypes>[];
  data: DispatchTypes[];
};


export const Filters = {
  STATUS: "status",
  STATES: "states",
  KMA: "kma",
  FROM_DATE: "fromDate",
  TO_DATE: "toDate",
  SEARCH: "search",
  SORT: "sort",
  ORDER: "order",
  PAGE: "page",
  SIZE: "size",
  FREIGHT_TYPE: "freightType",
} as const;

// Removed duplicate enum; use the const Filters above and derive a type from it
export type FiltersKey = (typeof Filters)[keyof typeof Filters];
