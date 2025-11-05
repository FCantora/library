import type { Meta, StoryObj } from "@storybook/react";

import Loader from "./loader";

const meta: Meta<typeof Loader> = {
  title: "Components/Loader",
  component: Loader,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["small", "medium", "large"],
      },
      description: "The size of the loader.",
    },
  },
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
The Loader component is used to indicate a loading state.
It can be used as a full-page loader or inside a container.

## Key Features
- **Customizable**: Control the size of the loader.
- **Accessible**: The component is built with accessibility in mind.

## Usage Patterns
- **Full-page loader**: Display a loader that covers the entire page.
- **Container loader**: Display a loader inside a container.
`,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "large",
  },
};

export const Medium: Story = {
  args: {
    size: "medium",
  },
};

export const Small: Story = {
  args: {
    size: "small",
  },
};

export const InsideContainer: Story = {
  render: (args) => (
    <div className="w-96 h-96 border border-dashed border-gray-400 flex items-center justify-center">
      <Loader {...args} />
    </div>
  ),
  args: {
    size: "medium",
  },
  parameters: {
    docs: {
      description: {
        story:
          "The loader can be used inside a container. Note that the loader has a `min-h-[calc(100vh-14rem)]` which might not be ideal for container usage. You might need to create a different version of the loader for this use case.",
      },
    },
  },
};
