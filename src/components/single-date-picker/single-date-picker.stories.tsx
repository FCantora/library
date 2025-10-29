import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import SingleDatePicker from "./single-date-picker";
import dayjs from "@/utils/dayjs-config";
import { Label } from "../label";

const meta: Meta<typeof SingleDatePicker> = {
  title: "Components/Date Pickers/Single Date Picker",
  component: SingleDatePicker,
  tags: ["autodocs"],
  argTypes: {
    day: {
      control: "date",
      description: "Selected date (Date or dayjs object)",
    },
    timezoneCode: {
      control: "text",
      description:
        "Timezone code for date display (e.g., 'America/Los_Angeles')",
    },
    disabled: {
      control: "boolean",
      description: "Disables date picker interaction",
    },
    clearable: {
      control: "boolean",
      description: "Shows clear button to remove selected date",
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
    restrictionModifiers: {
      table: { disable: true },
    },
  },
  parameters: {
    layout: "padded",
    controls: { expanded: true },
    docs: {
      description: {
        component: `
The Single Date Picker component provides a calendar interface for selecting a single date.
Built on Radix UI primitives and react-day-picker for full accessibility support.

## Key Features
- **Accessible**: Built with Radix UI primitives for full accessibility support
- **Timezone Support**: Full timezone handling with dayjs integration
- **Date Restrictions**: Support for restricting selectable date ranges
- **Clearable**: Optional clear button to remove selected date
- **Customizable**: Full control over styling and appearance
- **Callbacks**: onChange, onOpen, and onClear event handlers

## Usage Patterns
- **Basic Selection**: Simple date selection
- **With Restrictions**: Date selection with min/max range restrictions
- **Timezone Handling**: Date selection with specific timezone display
        `,
      },
    },
  },
} satisfies Meta<typeof SingleDatePicker>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * BASIC USAGE
 * Fundamental date picker patterns
 */

/**
 * Playground for exploring date picker options.
 * Use the controls to explore different date picker configurations.
 */
export const Playground: Story = {
  parameters: {
    docs: {
      description: {
        story: "Use the controls to explore different date picker options.",
      },
    },
  },
  args: {
    day: undefined,
    timezoneCode: "UTC",
    disabled: false,
    clearable: true,
    onChange: () => {
      console.log("Date changed");
    },
  },
};

/**
 * Date picker with pre-selected date.
 * Common pattern when editing existing data or showing default dates.
 */
export const WithInitialDate: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Date picker with a pre-selected date. Ideal for forms where you want to show an existing date or set a default value.",
      },
    },
  },
  render: () => (
    <div className="flex flex-col gap-2 w-80">
      <Label>Select Date</Label>
      <SingleDatePicker
        day={new Date()}
        timezoneCode="UTC"
        onChange={() => console.log("Date changed")}
      />
    </div>
  ),
};

/**
 * Disabled state.
 * Use when the date selection should not be available to the user.
 */
export const Disabled: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Disabled date picker. Use when the date selection should not be available to the user or when loading.",
      },
    },
  },
  render: () => (
    <div className="flex flex-col gap-2 w-80">
      <Label>Disabled Date Picker</Label>
      <SingleDatePicker
        day={new Date()}
        disabled
        timezoneCode="UTC"
        onChange={() => console.log("Date changed")}
      />
    </div>
  ),
};

/**
 * Not clearable state.
 * Use when the selected date should always remain and cannot be cleared.
 */
export const NotClearable: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Date picker without clear button. Use when the selected date should always remain and cannot be cleared (e.g., required fields).",
      },
    },
  },
  render: () => (
    <div className="flex flex-col gap-2 w-80">
      <Label>Required Date (Not Clearable)</Label>
      <SingleDatePicker
        day={new Date()}
        clearable={false}
        timezoneCode="UTC"
        onChange={() => console.log("Date changed")}
      />
    </div>
  ),
};

/**
 * DATE RESTRICTIONS
 * Date picker with restriction options
 */

/**
 * Future-only restriction.
 * Only dates after today can be selected.
 */
export const FutureOnly: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Date picker restricted to future dates only. Ideal for selecting arrival dates, delivery dates, or appointment scheduling.",
      },
    },
  },
  render: () => (
    <div className="flex flex-col gap-2 w-80">
      <Label>Select Future Date</Label>
      <SingleDatePicker
        day={undefined}
        timezoneCode="UTC"
        restrictionModifiers={{
          after: new Date(),
        }}
        onChange={() => console.log("Date changed")}
      />
      <p className="text-xs text-neutral-500">
        Only future dates can be selected
      </p>
    </div>
  ),
};

/**
 * Date range restrictions.
 * Dates must fall within a specific range.
 */
export const DateRange: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Date picker with date range restrictions. Selectable dates must fall within a specified window. Common for scheduling events or deliveries.",
      },
    },
  },
  render: () => (
    <div className="flex flex-col gap-2 w-80">
      <Label>Select Date (Within Range)</Label>
      <SingleDatePicker
        day={undefined}
        timezoneCode="UTC"
        restrictionModifiers={{
          after: dayjs().subtract(30, "days").toDate(),
          before: dayjs().add(30, "days").toDate(),
        }}
        onChange={() => console.log("Date changed")}
      />
      <p className="text-xs text-neutral-500">
        Select a date within ±30 days from today
      </p>
    </div>
  ),
};

/**
 * Past-only restriction.
 * Only dates before today can be selected.
 */
export const PastOnly: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Date picker restricted to past dates only. Ideal for selecting birth dates, historical events, or retrospective data entry.",
      },
    },
  },
  render: () => (
    <div className="flex flex-col gap-2 w-80">
      <Label>Select Past Date</Label>
      <SingleDatePicker
        day={undefined}
        timezoneCode="UTC"
        restrictionModifiers={{
          before: new Date(),
        }}
        onChange={() => console.log("Date changed")}
      />
      <p className="text-xs text-neutral-500">
        Only past dates can be selected
      </p>
    </div>
  ),
};

/**
 * TIMEZONE HANDLING
 * Date picker with timezone support
 */

/**
 * Date picker with specific timezone.
 * Dates are displayed and handled according to the specified timezone.
 */
export const WithTimezone: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Date picker with timezone handling. Demonstrates how dates are displayed and handled according to a specific timezone.",
      },
    },
  },
  render: () => (
    <div className="flex flex-col gap-2 w-80">
      <Label>Date (Pacific Time)</Label>
      <SingleDatePicker
        day={dayjs().tz("America/Los_Angeles").toDate()}
        timezoneCode="America/Los_Angeles"
        onChange={() => console.log("Date changed")}
      />
      <p className="text-xs text-neutral-500">Timezone: America/Los_Angeles</p>
    </div>
  ),
};

/**
 * INTERACTIVE EXAMPLE
 * Controlled component with state management and callbacks
 */

/**
 * Interactive date picker with state management and callbacks.
 * Demonstrates controlled component behavior with onChange, onOpen, and onClear handlers.
 */
const InteractiveExample = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    dayjs().add(7, "days").toDate()
  );
  const [lastChange, setLastChange] = useState<string>("No changes yet");

  return (
    <div className="flex flex-col gap-4 w-80">
      <Label>Select Date</Label>
      <SingleDatePicker
        day={selectedDate}
        timezoneCode="UTC"
        onChange={(date) => {
          setSelectedDate(date as Date);
          setLastChange(date ? dayjs(date).format("MMMM DD, YYYY") : "Cleared");
          console.log("onChange:", date);
        }}
        onOpen={() => {
          console.log("onOpen: Date picker opened");
        }}
        onClear={() => {
          console.log("onClear: Date cleared");
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
          "Interactive date picker demonstrating controlled component state management and all available callbacks (onChange, onOpen, onClear).",
      },
    },
  },
  render: () => <InteractiveExample />,
};
