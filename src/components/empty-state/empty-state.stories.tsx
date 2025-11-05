import type { Meta, StoryObj } from "@storybook/react";

import { EmptyState } from "./empty-state";

const meta: Meta<typeof EmptyState> = {
  title: "Components/EmptyState",
  component: EmptyState,
  tags: ["autodocs"],
  argTypes: {
    iconType: {
      control: {
        type: "select",
        options: [
          "load",
          "carrier",
          "milestones",
          "customerRate",
          "carrierRate",
          "filters",
        ],
      },
      description: "The type of icon to display.",
    },
    title: {
      control: "text",
      description: "The title of the empty state.",
    },
    paragraph: {
      control: "text",
      description: "The paragraph of the empty state.",
    },
    actionLabel: {
      control: "text",
      description: "The label for the action button.",
    },
    handleActionClick: {
      table: { disable: true },
      description: "The function to be executed when the action button is clicked.",
    },
    variant: {
      control: {
        type: "radio",
        options: ["primary", "tertiary"],
      },
      description: "The variant of the action button.",
    },
  },
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
The EmptyState component is used to display a message to the user when there is no content to display.
It can be used in a variety of contexts, such as when a search returns no results, or when a user has not yet added any items to a list.

## Key Features
- **Customizable**: Control the icon, title, paragraph, and action button.
- **Accessible**: The component is built with accessibility in mind.
- **Flexible**: The component can be used in a variety of contexts.

## Usage Patterns
- **No search results**: Display a message to the user when a search returns no results.
- **No items in a list**: Display a message to the user when they have not yet added any items to a list.
- **No data to display**: Display a message to the user when there is no data to display.
`,
      },
    },
  },
} satisfies Meta<typeof EmptyState>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    iconType: "load",
    title: "No loads found for your current filters",
    paragraph:
      "We couldn't find any loads that match your current criteria. Try adjusting your filters.",
    actionLabel: "Reset all filters",
    handleActionClick: () => console.log("Reset filters clicked"),
    variant: "tertiary",
  },
};

export const WithPrimaryAction: Story = {
  args: {
    iconType: "carrier",
    title: "No carrier assigned yet",
    paragraph:
      "No carrier has been assigned to this load. Send an offer now to secure a carrier for this shipment.",
    actionLabel: "Send Offer",
    handleActionClick: () => console.log("Send offer clicked"),
    variant: "primary",
  },
};

export const WithoutAction: Story = {
  args: {
    iconType: "milestones",
    title: "No milestones to transmit",
    paragraph: "There are no milestones to transmit for this stop yet.",
  },
};
