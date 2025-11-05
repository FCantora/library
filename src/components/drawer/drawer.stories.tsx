import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Drawer } from "./drawer";
import type { DrawerProps } from "./drawer.types";

import { Button } from "@/components/button";

const meta: Meta<typeof Drawer> = {
  title: "Components/Drawer",
  component: Drawer,
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "The title of the drawer.",
    },
    action: {
      table: { disable: true },
      description: "The function to be executed when the confirm button is clicked.",
    },
    onDismiss: {
      table: { disable: true },
      description: "The function to be executed when the dismiss button is clicked.",
    },
    onOpenChange: {
      table: { disable: true },
      description: "The function to be executed when the drawer is opened or closed.",
    },
    dismissLabel: {
      control: "text",
      description: "The label for the dismiss button.",
    },
    confirmLabel: {
      control: "text",
      description: "The label for the confirm button.",
    },
    footerContent: {
      table: { disable: true },
      description: "The content of the footer. If provided, the default footer with confirm and dismiss buttons will not be rendered.",
    },
    size: {
      control: {
        type: "select",
        options: ["carriers", "edit"],
      },
      description: "The size of the drawer.",
    },
    disabled: {
      control: "boolean",
      description: "Disables the confirm button.",
    },
    disableCancel: {
      control: "boolean",
      description: "Disables the dismiss button.",
    },
    sheetClassName: {
      control: "text",
      description: "Additional CSS classes for the sheet content.",
    },
  },
  parameters: {
    layout: "centered",
    controls: { expanded: true },
    docs: {
      description: {
        component: `
The Drawer component provides a flexible and accessible slide-in panel for displaying content, forms, or secondary interactions.
Built on Radix UI primitives for full accessibility support.

## Key Features
- **Accessible**: Built with Radix UI primitives for full WAI-ARIA compliance.
- **Customizable**: Control drawer size, labels, and footer content.
- **State Management**: Fully controlled component with support for open/close state management.
- **Flexible Content**: Pass any React node as children to be rendered inside the drawer.
- **Callbacks**: Provides \`onOpenChange\`, \`onDismiss\`, and \`action\` handlers for full control over interactions.

## Usage Patterns
- **Basic Drawer**: Simple slide-in panel with a title and content.
- **With Custom Footer**: Replace default buttons with custom footer content.
- **With Long Content**: Drawer with scrollable content.
        `,
      },
    },
  },
} satisfies Meta<typeof Drawer>;

export default meta;

type Story = StoryObj<typeof meta>;

const DrawerWithState = (args: DrawerProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button variant="secondary" onClick={() => setIsOpen(true)}>
        Open Drawer
      </Button>
      <Drawer
        {...args}
        open={isOpen}
        onOpenChange={setIsOpen}
        onDismiss={() => {
          console.log("Dismissed");
          setIsOpen(false);
        }}
        action={() => {
          console.log("Action clicked");
          setIsOpen(false);
        }}
      />
    </>
  );
};

export const Default: Story = {
  render: (args) => <DrawerWithState {...args} />,
  args: {
    title: "Drawer Title",
    children: <p>This is the content of the drawer. It can be any React node.</p>,
  },
};

export const WithCustomFooter: Story = {
  render: (args) => <DrawerWithState {...args} />,
  args: {
    title: "Drawer with Custom Footer",
    children: <p>This drawer has a custom footer instead of the default buttons.</p>,
    footerContent: (
      <div className="flex justify-end w-full">
        <Button variant="primary" onClick={() => console.log("Custom action")}>
          Custom Button
        </Button>
      </div>
    ),
  },
};

export const WithScroll: Story = {
  render: (args) => <DrawerWithState {...args} />,
  args: {
    title: "Drawer with Scrollable Content",
    children: (
      <div className="space-y-4">
        <p>
          This drawer contains a long text to demonstrate the scroll functionality.
          When the content exceeds the available height, a scrollbar will appear.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <img
          src="https://via.placeholder.com/400x200"
          alt="Placeholder"
          className="w-full h-auto rounded-md"
        />
        <p>
          Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.
          Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula.
          Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam.
          Maecenas fermentum consequat mi. Donec fermentum. Pellentesque malesuada nulla a mi. Duis sapien sem, aliquet nec, commodo eget, consequat quis, neque.
        </p>
        <p>
          Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat.
          Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.
          Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus.
          Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.
        </p>
      </div>
    ),
  },
};
