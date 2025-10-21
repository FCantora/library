import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import { Checkbox } from "./checkbox";
import { Label } from "../label";
import { Button } from "../button";

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["large", "medium", "small"],
      description: "Size of the checkbox",
    },
    disabled: {
      control: "boolean",
      description: "Disables checkbox interaction",
    },
    defaultChecked: {
      table: { disable: true },
    },
    checked: {
      control: "boolean",
      description: "Controlled checked state",
    },
    onCheckedChange: {
      action: "checked changed",
      table: { disable: true },
    },
  },
  parameters: {
    layout: "centered",
    controls: { expanded: true },
    docs: {
      description: {
        component:
          "Accessible checkbox component with multiple sizes. Supports both controlled and uncontrolled modes. Works seamlessly with Label component for better accessibility.",
      },
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    size: "medium",
    disabled: false,
    defaultChecked: false,
  },
  parameters: {
    docs: {
      description: {
        story: "Use the controls to explore different checkbox options.",
      },
    },
  },
};

export const Sizes: Story = {
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story:
          "Three available sizes: large, medium, and small. Each size is optimized for different UI contexts.",
      },
    },
  },
  render: () => (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2">
        <Checkbox size="large" id="large" defaultChecked />
        <Label htmlFor="large">Large</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox size="medium" id="medium" defaultChecked />
        <Label htmlFor="medium">Medium</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox size="small" id="small" defaultChecked />
        <Label htmlFor="small">Small</Label>
      </div>
    </div>
  ),
};

export const States: Story = {
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story:
          "Basic checkbox states: unchecked and checked. Use defaultChecked for uncontrolled checkboxes.",
      },
    },
  },
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Checkbox id="unchecked" />
        <Label htmlFor="unchecked">Unchecked</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="checked" defaultChecked />
        <Label htmlFor="checked">Checked</Label>
      </div>
    </div>
  ),
};

export const Disabled: Story = {
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story:
          "Disabled states for both checked and unchecked checkboxes. Disabled checkboxes do not respond to user interaction.",
      },
    },
  },
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Checkbox id="disabled-unchecked" disabled />
        <Label htmlFor="disabled-unchecked">Unchecked Disabled</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="checked-disabled" disabled checked />
        <Label htmlFor="checked-disabled">Checked Disabled</Label>
      </div>
    </div>
  ),
};

export const WithLabels: Story = {
  name: "With Labels (Recommended)",
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story:
          "Always use checkboxes with labels for better accessibility and user experience. The htmlFor attribute connects the label to the checkbox.",
      },
    },
  },
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="newsletter" defaultChecked />
        <Label htmlFor="newsletter">Subscribe to newsletter</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="marketing" disabled />
        <Label htmlFor="marketing">
          Receive marketing emails (unavailable)
        </Label>
      </div>
    </div>
  ),
};

const ControlledExample = () => {
  const [checked, setChecked] = useState(false);
  return (
    <div className="flex flex-col gap-2 max-w-48">
      <div className="flex items-center gap-2">
        <Checkbox
          id="controlled"
          checked={checked}
          onCheckedChange={(value) => setChecked(value as boolean)}
        />
        <Label htmlFor="controlled">Controlled Checkbox</Label>
      </div>
      <p className="flex flex-row gap-2">
        State:{" "}
        <p className="text-primary">{checked ? "Checked" : "Unchecked"}</p>
      </p>
      <Button variant="secondary" onClick={() => setChecked(!checked)}>
        Toggle
      </Button>
    </div>
  );
};

export const Controlled: Story = {
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story:
          "Example of a controlled checkbox where the state is managed externally. Useful for forms and complex state management.",
      },
    },
  },
  render: () => <ControlledExample />,
};

export const UseCases: Story = {
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story:
          "Common use case examples: settings, preferences, and multi-selection forms.",
      },
    },
  },
  render: () => (
    <div className="flex flex-col gap-4">
      <div>
        <p className="text-lg">Settings</p>
        <div>
          <div className="flex items-center gap-2">
            <Checkbox id="notifications" defaultChecked />
            <Label htmlFor="notifications">Enable notifications</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="dark-mode" />
            <Label htmlFor="dark-mode">Dark mode</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="analytics" defaultChecked />
            <Label htmlFor="analytics">Share analytics data</Label>
          </div>
        </div>
      </div>
      <div>
        <p className="text-lg">Preferences</p>
        <div>
          <div className="flex items-center gap-2">
            <Checkbox id="email-updates" defaultChecked />
            <Label htmlFor="email-updates">Receive email updates</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="newsletter" defaultChecked />
            <Label htmlFor="newsletter">Subscribe to newsletter</Label>
          </div>
        </div>
      </div>
      <div>
        <p className="text-lg">Form Agreement</p>
        <div>
          <div className="flex items-center gap-2">
            <Checkbox id="agree-terms" />
            <Label htmlFor="agree-terms">
              I agree to the terms and conditions
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="agree-privacy" />
            <Label htmlFor="agree-privacy">I accept the privacy policy</Label>
          </div>
        </div>
      </div>
    </div>
  ),
};
