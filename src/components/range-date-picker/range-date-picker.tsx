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

  const dateClass = React.useMemo(
    () => (disabled ? "text-neutral-300" : "dark:text-white text-neutral-500"),
    [disabled]
  );

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover open={open} onOpenChange={handleOpenChange}>
        <PopoverTrigger asChild disabled={disabled}>
          <div
            className={cn(
              "w-[260px] flex items-center p-1 text-sm cursor-pointer",
              "border border-neutral-400 rounded-md",
              "disabled:cursor-not-allowed disabled:bg-neutral-600 disabled:text-neutral-300"
            )}
          >
            <span className="text-neutral-400 text-xs font-bold mr-4">
              {label}
            </span>
            <p className={cn("font-bold", dateClass)}>{dateSelected}</p>
            <CalendarIcon
              className={cn(
                "ml-auto h-4 w-4 text-neutral-400",
                disabled && "text-neutral-300"
              )}
            />
          </div>
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
