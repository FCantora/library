import type { Meta, StoryObj } from "@storybook/react";

import { EmptyState } from "./empty-state";

const meta: Meta<typeof EmptyState> = {
  title: "EmptyState",
  component: EmptyState,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    iconType: {
      control: { type: "radio", options: ["load", "search"] },
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
    handleActionClick: () => console.log("Send Offer clicked"),
    variant: "tertiary",
  },
};

export const Carrier: Story = {
  args: {
    iconType: "carrier",
    title: "No carrier assigned yet",
    paragraph:
      "No carrier has been assigned to this load. Send an offer now to secure a carrier for this shipment.",
    actionLabel: "Send Offer",
    handleActionClick: () => console.log("Send Offer clicked"),
  },
};

export const Milestones: Story = {
  args: {
    iconType: "milestones",
    title: "No milestones to transmit",
    paragraph: "There are no milestones to transmit for this stop yet.",
  },
};

export const CustomerRate: Story = {
  args: {
    iconType: "customerRate",
    title: "No customer rate yet",
    paragraph:
      "There's no customer rate available for this load. Try confirming the rate with the customer.",
  },
};

export const CarrierRate: Story = {
  args: {
    iconType: "carrierRate",
    title: "No carrier rate yet",
    paragraph:
      "Once the load is accepted and a carrier assigned rates will be calculated.",
  },
};

export const CarrierLoad: Story = {
  args: {
    iconType: "carrier",
    title: "No carrier found for your current load",
    paragraph: "We couldn't find any carrier that match your current load.",
  },
};