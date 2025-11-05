import React from "react";
import { Calendar as CalendarIcon } from "lucide-react";
import type { DateRange } from "react-day-picker";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import dayjs from "@/utils/dayjs-config";
import { Calendar } from "../ui/calendar";
import { Button } from "../button";

export interface RangeDatePickerProps {
  dateRange?: DateRange;
  onChange?: (range: DateRange | undefined) => void;
  onOpen?: () => void;
  onClear?: () => void;
  disabled?: boolean;
  className?: string;
  label?: string;
}

export function RangeDatePicker(props: RangeDatePickerProps) {
  const {
    dateRange: initialDateRange,
    onChange,
    onOpen,
    onClear,
    disabled,
    className,
    label = "PICKUP",
  } = props;

  const [dateRange, setDateRange] = React.useState<DateRange | undefined>(
    initialDateRange
  );

  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setDateRange(initialDateRange);
  }, [initialDateRange]);

  const dateSelected = React.useMemo(() => {
    if (!dateRange?.from) {
      return "Start date - End date";
    }
    if (dateRange.to) {
      return `${dayjs(dateRange.from).format("MMM DD, YY")} - ${dayjs(
        dateRange.to
      ).format("MMM DD, YY")}`;
    }
    return dayjs(dateRange.from).format("MMM DD, YYYY");
  }, [dateRange]);

  const handleDateSelect = React.useCallback((range: DateRange | undefined) => {
    setDateRange(range);
  }, []);

  const handleApply = React.useCallback(() => {
    onChange?.(dateRange);
    setOpen(false);
  }, [onChange, dateRange]);

  const handleClear = React.useCallback(() => {
    setDateRange(undefined);
    onChange?.(undefined);
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

  const handleCancel = React.useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover open={open} onOpenChange={handleOpenChange}>
        <PopoverTrigger asChild>
          <button
            type="button"
            disabled={disabled}
            onClick={() => !disabled && setOpen(true)}
            className={cn(
              "flex h-10 w-full items-center justify-between rounded-md border border-neutral-400 bg-neutral-800 px-3 py-2 text-sm ring-offset-neutral-700",
              "text-neutral-300 placeholder:text-neutral-600",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2",
              "disabled:cursor-not-allowed disabled:bg-neutral-700 disabled:text-neutral-500",
              "hover:enabled:bg-neutral-700 transition-colors"
            )}
          >
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-neutral-300">
                {label}
              </span>
              <p className={cn("font-bold", disabled ? "text-neutral-500" : "text-neutral-300")}>
                {dateSelected}
              </p>
            </div>
            <CalendarIcon
              className={cn(
                "h-4 w-4",
                disabled ? "text-neutral-500" : "text-neutral-300"
              )}
            />
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            showOutsideDays={false}
            mode="range"
            defaultMonth={dateRange?.from}
            selected={dateRange}
            onSelect={handleDateSelect}
            numberOfMonths={2}
          />
          <hr />
          <div className="flex justify-between p-4">
            <Button variant="tertiary" size="small" onClick={handleClear}>
              Clear all
            </Button>
            <div className="flex gap-4">
              <Button variant="secondary" size="small" onClick={handleCancel}>
                Cancel
              </Button>
              <Button
                variant="primary"
                size="small"
                onClick={handleApply}
                disabled={disabled}
              >
                Apply
              </Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
