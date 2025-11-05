import React from "react";
import { Calendar as CalendarIcon } from "lucide-react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import dayjs from "@/utils/dayjs-config";
import type { SingleDatePickerProps } from "./single-date-picker.type";
import { Calendar } from "../ui/calendar";
import { Button } from "../button";

const SingleDatePicker = ({
  day,
  timezoneCode,
  onChange,
  onOpen,
  onClear,
  disabled,
  restrictionModifiers,
  clearable = true,
  className,
}: SingleDatePickerProps) => {
  const [initialDateLabel, setInitialDateLabel] = React.useState<string | null>(
    "MM/DD/YY"
  );

  const [date, setDate] = React.useState<Date | dayjs.Dayjs | undefined>(day);

  const [open, setOpen] = React.useState(false);

  const [dateLabel, setDateLabel] = React.useState<string | null>(null);

  React.useEffect(() => {
    setDate(day);
  }, [day]);

  const dateClass = React.useMemo(
    () => (disabled ? "text-neutral-500" : "text-neutral-300"),
    [disabled]
  );

  React.useEffect(() => {
    if (!date) {
      setInitialDateLabel(null);
      return;
    }

    const formattedDate = timezoneCode
      ? dayjs(date).tz(timezoneCode).format("MMMM DD, YYYY")
      : dayjs(date).format("MMMM DD, YYYY");

    setInitialDateLabel(formattedDate);
  }, [date, timezoneCode]);

  const handleDateSelected = React.useCallback(
    (selectedDate: Date | undefined) => {
      setInitialDateLabel(null);

      const rawDate = dayjs(selectedDate);

      setDate(rawDate);

      setDateLabel(dayjs(rawDate).utc().format("MMMM DD, YYYY") || "MM/DD/YY");

      onChange(rawDate);

      setOpen(false);
    },
    [onChange]
  );

  const handleClearDate = React.useCallback(() => {
    setDate(undefined);
    setDateLabel(null);
    setInitialDateLabel("MM/DD/YY");

    onChange(undefined);

    onClear?.();

    setOpen(false);
  }, [onChange, onClear]);

  const handleOpenChange = React.useCallback(
    (isOpen: boolean) => {
      setOpen(isOpen);

      if (isOpen) {
        onOpen?.();
      }
    },
    [onOpen]
  );

  const disabledDays = React.useMemo(
    () => restrictionModifiers || undefined,
    [restrictionModifiers]
  );

  const displayLabel = React.useMemo(() => {
    return dateLabel || initialDateLabel || "MM/DD/YY";
  }, [dateLabel, initialDateLabel]);

  return (
    <Popover open={open} onOpenChange={handleOpenChange}>
      <PopoverTrigger
        disabled={disabled}
        className={cn(
          "flex flex-row justify-between py-2 px-4 p-2 items-center w-full h-10 text-sm border placeholder:text-neutral-600 border-neutral-400 rounded-md text-neutral-300 bg-neutral-800 disabled:cursor-not-allowed disabled:bg-neutral-700 disabled:text-neutral-500",
          className
        )}
      >
        <p className={dateClass}>{displayLabel}</p>

        <CalendarIcon
          className={cn("h-6 w-6 text-primary", disabled && "text-neutral-500")}
        />
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <div>
          <Calendar
            mode="single"
            selected={date as Date | undefined}
            onSelect={handleDateSelected}
            initialFocus
            disabled={disabledDays}
            className="grid grid-rows-1"
          />
          {clearable && (
            <div className="p-2 border-t border-t-neutral-400">
              <Button
                variant="tertiary"
                size="medium"
                onClick={handleClearDate}
                disabled={disabled || !date}
              >
                Clear
              </Button>
            </div>
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default SingleDatePicker;
