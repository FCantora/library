import type { Meta, StoryObj } from "@storybook/react";

import { RadioGroup, RadioGroupItem } from "./radio-group";
import { Label } from "../label";

const meta = {
  title: "Components/RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["large", "medium", "small"],
      description: "Size of the radio buttons",
    },
    disabled: {
      control: "boolean",
      description: "Disables all radio buttons in the group",
    },
    defaultValue: {
      control: "text",
      description: "Default selected value (uncontrolled)",
    },
  },
  parameters: {
    layout: "centered",
    controls: { expanded: true },
    docs: {
      description: {
        component:
          "Accessible radio group component with multiple sizes. Allows users to select a single option from a set of mutually exclusive choices.",
      },
    },
  },
} satisfies Meta<typeof RadioGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "medium",
    disabled: false,
    defaultValue: "option2",
  },
  render: (args) => (
    <RadioGroup {...args} className="flex-col">
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option1" size={args.size} id="p1" />
        <Label htmlFor="p1">Option 1</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option2" size={args.size} id="p2" />
        <Label htmlFor="p2">Option 2</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option3" size={args.size} id="p3" />
        <Label htmlFor="p3">Option 3</Label>
      </div>
    </RadioGroup>
  ),
};

export const Sizes: Story = {
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story: "Available sizes: large, medium (default), and small.",
      },
    },
  },
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-6">
        <p className="text-sm font-semibold w-16">Large</p>
        <RadioGroup defaultValue="l1" className="flex-col">
          <div className="flex items-center gap-2">
            <RadioGroupItem value="l1" size="large" id="l1" />
            <Label htmlFor="l1">Selected</Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="l2" size="large" id="l2" />
            <Label htmlFor="l2">Unselected</Label>
          </div>
        </RadioGroup>
      </div>
      <div className="flex items-center gap-6">
        <p className="text-sm font-semibold w-16">Medium</p>
        <RadioGroup defaultValue="m1" className="flex-col">
          <div className="flex items-center gap-2">
            <RadioGroupItem value="m1" size="medium" id="m1" />
            <Label htmlFor="m1">Selected</Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="m2" size="medium" id="m2" />
            <Label htmlFor="m2">Unselected</Label>
          </div>
        </RadioGroup>
      </div>
      <div className="flex items-center gap-6">
        <p className="text-sm font-semibold w-16">Small</p>
        <RadioGroup defaultValue="s1" className="flex-col">
          <div className="flex items-center gap-2">
            <RadioGroupItem value="s1" size="small" id="s1" />
            <Label htmlFor="s1">Selected</Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="s2" size="small" id="s2" />
            <Label htmlFor="s2">Unselected</Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  ),
};

export const Disabled: Story = {
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story: "Radio buttons can be disabled individually or as a group.",
      },
    },
  },
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-6">
        <p className="text-sm font-semibold w-16">Enabled</p>
        <RadioGroup defaultValue="e1" className="flex-col">
          <div className="flex items-center gap-2">
            <RadioGroupItem value="e1" id="e1" />
            <Label htmlFor="e1">Selected</Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="e2" id="e2" />
            <Label htmlFor="e2">Unselected</Label>
          </div>
        </RadioGroup>
      </div>
      <div className="flex items-center gap-6">
        <p className="text-sm font-semibold w-16">Disabled</p>
        <RadioGroup disabled defaultValue="d1" className="flex-col">
          <div className="flex items-center gap-2">
            <RadioGroupItem value="d1" id="d1" />
            <Label htmlFor="d1">Selected</Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="d2" id="d2" />
            <Label htmlFor="d2">Unselected</Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  ),
};
