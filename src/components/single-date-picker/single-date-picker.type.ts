import type dayjs from "dayjs";
import type { Matcher } from "react-day-picker";

export type SingleDatePickerProps = {
  day: Date | dayjs.Dayjs | undefined;
  timezoneCode?: string;
  onChange: (day: Date | dayjs.Dayjs | undefined) => void;
  onOpen?: () => void;
  onClear?: () => void;
  disabled?: boolean;
  clearable?: boolean;
  restrictionModifiers?: Matcher;
  className?: string;
};
