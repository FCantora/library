import type { Meta, StoryObj } from "@storybook/react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "./select";

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
The Select component provides a flexible and accessible dropdown selection interface built on Radix UI primitives. 
It supports various selection patterns, grouping, and form integration.

## Key Features
- **Accessible**: Built with Radix UI primitives for full accessibility support
- **Flexible Content**: Support for labels, items, groups, and separators
- **Form Integration**: Works seamlessly with HTML forms and form libraries
- **Customizable**: Full control over styling and behavior
- **Keyboard Navigation**: Complete keyboard support and navigation

## Usage Patterns
- **Basic Selection**: Simple dropdown with options
- **Grouped Options**: Organized options with labels and separators
- **Form Integration**: Selection within forms and validation
- **Disabled States**: Options and entire select can be disabled
- **Long Lists**: Handles large option lists efficiently
        `,
      },
    },
  },
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * BASIC SELECT PATTERNS
 * These stories demonstrate fundamental select component usage
 */

/**
 * Default select with basic options.
 * Use this as the standard select pattern for simple choice selection.
 */
export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Standard select component with basic options. Perfect for simple choice selection and theme switching.",
      },
    },
  },
  render: () => (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Select theme" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="light">Light</SelectItem>
        <SelectItem value="dark">Dark</SelectItem>
        <SelectItem value="system">System</SelectItem>
      </SelectContent>
    </Select>
  ),
};

/**
 * Select with default value pre-selected.
 * Perfect for forms where you want to show a default option.
 */
export const WithDefaultValue: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Select component with a default value pre-selected. Ideal for forms where you want to show a default option.",
      },
    },
  },
  render: () => (
    <Select defaultValue="dark">
      <SelectTrigger>
        <SelectValue placeholder="Select theme" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="light">Light</SelectItem>
        <SelectItem value="dark">Dark</SelectItem>
        <SelectItem value="system">System</SelectItem>
      </SelectContent>
    </Select>
  ),
};

/**
 * Disabled select component.
 * Use when the selection should not be available to the user.
 */
export const Disabled: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Disabled select component. Use when the selection should not be available to the user or when loading.",
      },
    },
  },
  render: () => (
    <Select disabled>
      <SelectTrigger>
        <SelectValue placeholder="Select theme" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="light">Light</SelectItem>
        <SelectItem value="dark">Dark</SelectItem>
        <SelectItem value="system">System</SelectItem>
      </SelectContent>
    </Select>
  ),
};

/**
 * ADVANCED SELECT FEATURES
 * These stories demonstrate advanced select capabilities
 */

/**
 * Select with grouped options and separators.
 * Perfect for organizing related options into logical groups.
 */
export const WithGroups: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Select with grouped options and separators. Ideal for organizing related options into logical groups and categories.",
      },
    },
  },
  render: () => (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Select service" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Transportation</SelectLabel>
          <SelectItem value="ltl">Less Than Truckload</SelectItem>
          <SelectItem value="tl">Truckload</SelectItem>
          <SelectItem value="ftl">Full Truckload</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Services</SelectLabel>
          <SelectItem value="warehousing">Warehousing</SelectItem>
          <SelectItem value="cross-dock">Cross Dock</SelectItem>
          <SelectItem value="distribution">Distribution</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
};

/**
 * Select with disabled individual options.
 * Perfect for showing unavailable options while keeping them visible.
 */
export const WithDisabledItems: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Select with disabled individual options. Ideal for showing unavailable options while keeping them visible for context.",
      },
    },
  },
  render: () => (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Select option" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="available">Available Option</SelectItem>
        <SelectItem value="disabled" disabled>
          Disabled Option
        </SelectItem>
        <SelectItem value="another">Another Option</SelectItem>
        <SelectItem value="also-disabled" disabled>
          Also Disabled
        </SelectItem>
      </SelectContent>
    </Select>
  ),
};

/**
 * Select with a long list of options.
 * Demonstrates how the component handles large option lists efficiently.
 */
export const LongList: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Select with a long list of options. Demonstrates how the component handles large option lists efficiently with scrolling.",
      },
    },
  },
  render: () => (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Select state" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="AL">Alabama</SelectItem>
        <SelectItem value="AK">Alaska</SelectItem>
        <SelectItem value="AZ">Arizona</SelectItem>
        <SelectItem value="AR">Arkansas</SelectItem>
        <SelectItem value="CA">California</SelectItem>
        <SelectItem value="CO">Colorado</SelectItem>
        <SelectItem value="CT">Connecticut</SelectItem>
        <SelectItem value="DE">Delaware</SelectItem>
        <SelectItem value="FL">Florida</SelectItem>
        <SelectItem value="GA">Georgia</SelectItem>
        <SelectItem value="HI">Hawaii</SelectItem>
        <SelectItem value="ID">Idaho</SelectItem>
        <SelectItem value="IL">Illinois</SelectItem>
        <SelectItem value="IN">Indiana</SelectItem>
        <SelectItem value="IA">Iowa</SelectItem>
        <SelectItem value="KS">Kansas</SelectItem>
        <SelectItem value="KY">Kentucky</SelectItem>
        <SelectItem value="LA">Louisiana</SelectItem>
        <SelectItem value="ME">Maine</SelectItem>
        <SelectItem value="MD">Maryland</SelectItem>
        <SelectItem value="MA">Massachusetts</SelectItem>
        <SelectItem value="MI">Michigan</SelectItem>
        <SelectItem value="MN">Minnesota</SelectItem>
        <SelectItem value="MS">Mississippi</SelectItem>
        <SelectItem value="MO">Missouri</SelectItem>
        <SelectItem value="MT">Montana</SelectItem>
        <SelectItem value="NE">Nebraska</SelectItem>
        <SelectItem value="NV">Nevada</SelectItem>
        <SelectItem value="NH">New Hampshire</SelectItem>
        <SelectItem value="NJ">New Jersey</SelectItem>
        <SelectItem value="NM">New Mexico</SelectItem>
        <SelectItem value="NY">New York</SelectItem>
        <SelectItem value="NC">North Carolina</SelectItem>
        <SelectItem value="ND">North Dakota</SelectItem>
        <SelectItem value="OH">Ohio</SelectItem>
        <SelectItem value="OK">Oklahoma</SelectItem>
        <SelectItem value="OR">Oregon</SelectItem>
        <SelectItem value="PA">Pennsylvania</SelectItem>
        <SelectItem value="RI">Rhode Island</SelectItem>
        <SelectItem value="SC">South Carolina</SelectItem>
        <SelectItem value="SD">South Dakota</SelectItem>
        <SelectItem value="TN">Tennessee</SelectItem>
        <SelectItem value="TX">Texas</SelectItem>
        <SelectItem value="UT">Utah</SelectItem>
        <SelectItem value="VT">Vermont</SelectItem>
        <SelectItem value="VA">Virginia</SelectItem>
        <SelectItem value="WA">Washington</SelectItem>
        <SelectItem value="WV">West Virginia</SelectItem>
        <SelectItem value="WI">Wisconsin</SelectItem>
        <SelectItem value="WY">Wyoming</SelectItem>
      </SelectContent>
    </Select>
  ),
};

/**
 * FORM INTEGRATION PATTERNS
 * These stories demonstrate select usage within forms
 */

/**
 * Select integrated within a form with proper labels.
 * Common pattern for form-based data collection.
 */
export const FormIntegration: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Select integrated within a form with proper labels and form attributes. Common pattern for form-based data collection.",
      },
    },
  },
  render: () => (
    <form>
      <div>
        <label>Theme</label>
        <Select name="theme" defaultValue="light">
          <SelectTrigger>
            <SelectValue placeholder="Select theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label>Service Type</label>
        <Select name="serviceType">
          <SelectTrigger>
            <SelectValue placeholder="Select service" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Transportation</SelectLabel>
              <SelectItem value="ltl">Less Than Truckload</SelectItem>
              <SelectItem value="tl">Truckload</SelectItem>
            </SelectGroup>
            <SelectSeparator />
            <SelectGroup>
              <SelectLabel>Services</SelectLabel>
              <SelectItem value="warehousing">Warehousing</SelectItem>
              <SelectItem value="cross-dock">Cross Dock</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </form>
  ),
};

/**
 * Multiple selects in a form layout.
 * Common pattern for complex forms with multiple selection fields.
 */
export const MultipleSelects: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Multiple selects in a form layout. Common pattern for complex forms with multiple selection fields and related data.",
      },
    },
  },
  render: () => (
    <div>
      <div>
        <label>Freight Type</label>
        <Select defaultValue="LTL">
          <SelectTrigger>
            <SelectValue placeholder="Select Freight Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="LTL">Less Than Truckload</SelectItem>
            <SelectItem value="TL">Truckload</SelectItem>
            <SelectItem value="FTL">Full Truckload</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label>State</label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select state" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="CA">California</SelectItem>
            <SelectItem value="TX">Texas</SelectItem>
            <SelectItem value="NY">New York</SelectItem>
            <SelectItem value="FL">Florida</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label>Service Type</label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select service" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Transportation</SelectLabel>
              <SelectItem value="ltl">Less Than Truckload</SelectItem>
              <SelectItem value="tl">Truckload</SelectItem>
            </SelectGroup>
            <SelectSeparator />
            <SelectGroup>
              <SelectLabel>Services</SelectLabel>
              <SelectItem value="warehousing">Warehousing</SelectItem>
              <SelectItem value="cross-dock">Cross Dock</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  ),
};

/**
 * REAL-WORLD USAGE PATTERNS
 * These stories demonstrate common real-world select implementations
 */

/**
 * Location selection with descriptive options.
 * Common pattern for address and location selection.
 */
export const LocationSelection: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Location selection with descriptive options. Common pattern for address selection, pickup/delivery locations, and geographic data.",
      },
    },
  },
  render: () => (
    <Select defaultValue="stop1">
      <SelectTrigger>
        <SelectValue placeholder="Select location" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="stop1">Pickup Location (#1)</SelectItem>
        <SelectItem value="stop2">Delivery Location (#2)</SelectItem>
        <SelectItem value="stop3">Additional Stop (#3)</SelectItem>
      </SelectContent>
    </Select>
  ),
};

/**
 * Category selection with organized options.
 * Common pattern for content categorization and classification.
 */
export const CategorySelection: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Category selection with organized options. Common pattern for content categorization, classification, and topic selection.",
      },
    },
  },
  render: () => (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Select category" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="general">General</SelectItem>
        <SelectItem value="delivery">Delivery</SelectItem>
        <SelectItem value="pickup">Pickup</SelectItem>
        <SelectItem value="issue">Issue</SelectItem>
        <SelectItem value="update">Update</SelectItem>
      </SelectContent>
    </Select>
  ),
};

/**
 * Code selection with formatted options.
 * Common pattern for selecting codes, IDs, and formatted values.
 */
export const CodeSelection: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Code selection with formatted options. Common pattern for selecting codes, IDs, reason codes, and other formatted values.",
      },
    },
  },
  render: () => (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Select reason code" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="001">001 - Equipment Breakdown</SelectItem>
        <SelectItem value="002">002 - Weather Delay</SelectItem>
        <SelectItem value="003">003 - Traffic Delay</SelectItem>
        <SelectItem value="004">004 - Driver Delay</SelectItem>
      </SelectContent>
    </Select>
  ),
};
