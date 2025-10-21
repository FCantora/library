import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import { Button } from "./button";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "tertiary"],
      description: "Visual variant of the button",
    },
    size: {
      control: { type: "select" },
      options: ["large", "medium", "small", "icon"],
      description: "Size of the button",
    },
    disabled: {
      control: "boolean",
      description: "Disables button interaction",
    },
    asChild: {
      table: { disable: true },
    },
    onClick: { table: { disable: true } },
  },
  parameters: {
    layout: "centered",
    controls: { expanded: true },
    docs: {
      description: {
        component:
          "Versatile button component with multiple variants and sizes. Supports all standard HTML button attributes.",
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    children: "Button",
    variant: "primary",
    size: "large",
    disabled: false,
  },
  parameters: {
    docs: {
      description: {
        story: "Use the controls to explore different button options.",
      },
    },
  },
};

const InteractiveExample = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="flex flex-col gap-2">
      <Button onClick={() => setCount(count + 1)}>Clicks: {count}</Button>
      <Button variant="secondary" onClick={() => setCount(0)} size="small">
        Reset
      </Button>
    </div>
  );
};

export const Interactive: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Button example with onClick event handling. The counter increments on click.",
      },
    },
  },
  render: () => <InteractiveExample />,
};

export const Variants: Story = {
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story:
          "The three available variants: primary, secondary, and tertiary.",
      },
    },
  },
  render: () => (
    <div className="flex flex-row gap-2">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="tertiary">Tertiary</Button>
    </div>
  ),
};

export const Sizes: Story = {
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story:
          "Four available sizes: large, medium, small, and icon (for icon-only buttons).",
      },
    },
  },
  render: () => (
    <div className="flex flex-row gap-4 items-center">
      <Button size="large">Large</Button>
      <Button size="medium">Medium</Button>
      <Button size="small">Small</Button>
      <Button size="icon" aria-label="Icon">
        ★
      </Button>
    </div>
  ),
};

export const Disabled: Story = {
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story:
          "Disabled states for each variant. Disabled buttons do not respond to click events.",
      },
    },
  },
  render: () => (
    <div className="flex flex-row gap-4 items-center">
      <Button disabled variant="primary">
        Disabled
      </Button>
      <Button disabled variant="secondary">
        Disabled
      </Button>
      <Button disabled variant="tertiary">
        Disabled
      </Button>
    </div>
  ),
};

const LoadingExample = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <Button onClick={handleClick} disabled={isLoading}>
      {isLoading ? "Loading..." : "Load data"}
    </Button>
  );
};

export const Loading: Story = {
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story:
          "Example of how to implement a loading state with disabled button and visual indicator.",
      },
    },
  },
  render: () => <LoadingExample />,
};

export const UseCases: Story = {
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story: "Common use case examples: forms, actions, and navigation.",
      },
    },
  },
  render: () => (
    <div className="flex flex-col gap-4">
      <div>
        <p className="text-lg">Form</p>
        <div className="flex items-center gap-2">
          <Button variant="primary" type="submit">
            Save
          </Button>
          <Button variant="secondary" type="button">
            Cancel
          </Button>
        </div>
      </div>
      <div>
        <p className="text-lg">Actions</p>
        <div className="flex items-center gap-2">
          <Button variant="primary" size="medium">
            Confirm
          </Button>
          <Button variant="tertiary" size="medium">
            Delete
          </Button>
        </div>
      </div>
      <div>
        <p className="text-lg">Icon buttons</p>
        <div className="flex items-center gap-2">
          <Button variant="secondary" size="icon" aria-label="Edit">
            ✎
          </Button>
          <Button variant="secondary" size="icon" aria-label="Delete">
            🗑
          </Button>
          <Button variant="secondary" size="icon" aria-label="Settings">
            ⚙
          </Button>
        </div>
      </div>
    </div>
  ),
};
