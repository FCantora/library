import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import type { DateRange } from "react-day-picker";

import { RangeDatePicker } from "./range-date-picker";
import dayjs from "@/utils/dayjs-config";
import { Label } from "../label";

const meta: Meta<typeof RangeDatePicker> = {
  title: "Components/Date Pickers/Range Date Picker",
  component: RangeDatePicker,
  tags: ["autodocs"],
  argTypes: {
    dateRange: {
      table: { disable: true },
    },
    disabled: {
      control: "boolean",
      description: "Disables date picker interaction",
    },
    label: {
      control: "text",
      description: "Label text displayed in the trigger",
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
    onChange: {
      table: { disable: true },
    },
    onOpen: {
      table: { disable: true },
    },
    onClear: {
      table: { disable: true },
    },
  },
  parameters: {
    layout: "padded",
    controls: { expanded: true },
    docs: {
      description: {
        component: `
The Range Date Picker component provides a calendar interface for selecting a date range.
Built on Radix UI primitives and react-day-picker for full accessibility support.

## Key Features
- **Accessible**: Built with Radix UI primitives for full accessibility support
- **Date Range Selection**: Select start and end dates with a visual calendar
- **Clearable**: Optional clear button to remove selected date range
- **Customizable**: Full control over styling and appearance
- **Callbacks**: onChange, onOpen, and onClear event handlers

## Usage Patterns
- **Basic Range Selection**: Simple date range selection
- **With Initial Range**: Date picker with pre-selected date range
- **Form Integration**: Date range picker within forms
        `,
      },
    },
  },
} satisfies Meta<typeof RangeDatePicker>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * BASIC USAGE
 * Fundamental range date picker patterns
 */

/**
 * Playground for exploring range date picker options.
 * Use the controls to explore different range date picker configurations.
 */
export const Playground: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Use the controls to explore different range date picker options.",
      },
    },
  },
  args: {
    dateRange: undefined,
    disabled: false,
    label: "PICKUP",
    onChange: () => {
      console.log("Date range changed");
    },
  },
};

/**
 * Range date picker with no initial range.
 * Standard pattern for selecting a date range.
 */
export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Standard range date picker with no initial date range. Perfect for forms where users need to select a date range.",
      },
    },
  },
  render: () => (
    <div className="flex flex-col gap-2 w-80">
      <Label>Select Date Range</Label>
      <RangeDatePicker
        onChange={(range) => console.log("Date range changed:", range)}
      />
    </div>
  ),
};

/**
 * Range date picker with pre-selected range.
 * Common pattern when editing existing data or showing default ranges.
 */
export const WithInitialRange: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Range date picker with a pre-selected date range. Ideal for forms where you want to show an existing range or set default values.",
      },
    },
  },
  render: () => (
    <div className="flex flex-col gap-2 w-80">
      <Label>Select Date Range</Label>
      <RangeDatePicker
        dateRange={{
          from: new Date(),
          to: dayjs().add(7, "days").toDate(),
        }}
        onChange={(range) => console.log("Date range changed:", range)}
      />
    </div>
  ),
};

/**
 * Disabled state.
 * Use when the date range selection should not be available to the user.
 */
export const Disabled: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Disabled range date picker. Use when the date range selection should not be available to the user or when loading.",
      },
    },
  },
  render: () => (
    <div className="flex flex-col gap-2 w-80">
      <Label>Disabled Range Date Picker</Label>
      <RangeDatePicker
        dateRange={{
          from: new Date(),
          to: dayjs().add(7, "days").toDate(),
        }}
        disabled
        onChange={(range) => console.log("Date range changed:", range)}
      />
    </div>
  ),
};

/**
 * Range date picker with custom label.
 * Demonstrates custom label text.
 */
export const WithCustomLabel: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Range date picker with custom label text. Useful for different contexts and use cases.",
      },
    },
  },
  render: () => (
    <div className="flex flex-col gap-2 w-80">
      <Label>Select Date Range</Label>
      <RangeDatePicker
        label="DELIVERY"
        onChange={(range) => console.log("Date range changed:", range)}
      />
    </div>
  ),
};

/**
 * INTERACTIVE EXAMPLE
 * Controlled component with state management and callbacks
 */

/**
 * Interactive range date picker with state management and callbacks.
 * Demonstrates controlled component behavior with onChange, onOpen, and onClear handlers.
 */
const InteractiveExample = () => {
  const [selectedRange, setSelectedRange] = useState<DateRange | undefined>({
    from: dayjs().toDate(),
    to: dayjs().add(7, "days").toDate(),
  });
  const [lastChange, setLastChange] = useState<string>("No changes yet");

  const formatRange = (range: DateRange | undefined) => {
    if (!range?.from) return "No range selected";
    if (!range.to) return dayjs(range.from).format("MMM DD, YYYY");
    return `${dayjs(range.from).format("MMM DD, YYYY")} - ${dayjs(
      range.to
    ).format("MMM DD, YYYY")}`;
  };

  return (
    <div className="flex flex-col gap-4 w-80">
      <Label>Select Date Range</Label>
      <RangeDatePicker
        dateRange={selectedRange}
        onChange={(range) => {
          setSelectedRange(range);
          setLastChange(formatRange(range));
          console.log("onChange:", range);
        }}
        onOpen={() => {
          console.log("onOpen: Date picker opened");
        }}
        onClear={() => {
          console.log("onClear: Date range cleared");
        }}
      />
      <div className="text-xs text-neutral-500">Last change: {lastChange}</div>
      <p className="text-xs text-neutral-500">
        Check the console to see callback logs
      </p>
    </div>
  );
};

export const Interactive: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Interactive range date picker demonstrating controlled component state management and all available callbacks (onChange, onOpen, onClear).",
      },
    },
  },
  render: () => <InteractiveExample />,
};
