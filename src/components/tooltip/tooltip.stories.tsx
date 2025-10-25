import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
The Tooltip component provides contextual information when users hover over or focus on elements. 
Built on Radix UI primitives for full accessibility support.

## Key Features
- **Accessible**: Built with Radix UI primitives for full accessibility support
- **Flexible Positioning**: Support for all sides and alignment options
- **Smooth Animations**: Built-in fade and slide animations
- **Customizable**: Full control over styling and appearance
- **Keyboard Support**: Works with keyboard navigation and focus

## Usage Patterns
- **Basic Tooltips**: Simple contextual information
- **Positioned Tooltips**: Different placement options
- **Interactive Tooltips**: Tooltips with interactive content
- **Form Tooltips**: Help text for form elements
- **Icon Tooltips**: Explanations for icons and buttons
        `,
      },
    },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * BASIC TOOLTIP PATTERNS
 * These stories demonstrate fundamental tooltip component usage
 */

/**
 * Default tooltip with basic content.
 * Use this as the standard tooltip pattern for simple contextual information.
 */
export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Standard tooltip component with basic content. Perfect for providing contextual information and help text.",
      },
    },
  },
  render: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="primary" size="medium">
            Hover me
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>This is a helpful tooltip</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
};

/**
 * Tooltip with different content types.
 * Demonstrates various content patterns for tooltips.
 */
export const DifferentContent: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Tooltip with different content types. Demonstrates various content patterns including text, lists, and formatted content.",
      },
    },
  },
  render: () => (
    <div className="flex gap-4">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="secondary" size="medium">
              Short text
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Short tooltip</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="secondary" size="medium">
              Long text
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>
              This is a longer tooltip that provides more detailed information
              about the element.
            </p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="secondary" size="medium">
              Formatted
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <div>
              <p className="font-semibold">Important Information</p>
              <p className="text-xs mt-1">Additional details here</p>
            </div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  ),
};

/**
 * POSITIONED TOOLTIP PATTERNS
 * These stories demonstrate different tooltip positioning options
 */

/**
 * Tooltip positioned on top.
 * Common pattern for tooltips that appear above elements.
 */
export const TopPosition: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Tooltip positioned on top. Common pattern for tooltips that appear above elements, especially useful for buttons in toolbars.",
      },
    },
  },
  render: () => (
    <div className="flex gap-4">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="primary" size="medium">
              Top Center
            </Button>
          </TooltipTrigger>
          <TooltipContent side="top" align="center">
            <p>Tooltip on top center</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="primary" size="medium">
              Top Start
            </Button>
          </TooltipTrigger>
          <TooltipContent side="top" align="start">
            <p>Tooltip on top start</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="primary" size="medium">
              Top End
            </Button>
          </TooltipTrigger>
          <TooltipContent side="top" align="end">
            <p>Tooltip on top end</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  ),
};

/**
 * Tooltip positioned on bottom.
 * Common pattern for tooltips that appear below elements.
 */
export const BottomPosition: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Tooltip positioned on bottom. Common pattern for tooltips that appear below elements, especially useful for form inputs and navigation items.",
      },
    },
  },
  render: () => (
    <div className="flex gap-4">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="primary" size="medium">
              Bottom Center
            </Button>
          </TooltipTrigger>
          <TooltipContent side="bottom" align="center">
            <p>Tooltip on bottom center</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="primary" size="medium">
              Bottom Start
            </Button>
          </TooltipTrigger>
          <TooltipContent side="bottom" align="start">
            <p>Tooltip on bottom start</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="primary" size="medium">
              Bottom End
            </Button>
          </TooltipTrigger>
          <TooltipContent side="bottom" align="end">
            <p>Tooltip on bottom end</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  ),
};

/**
 * Tooltip positioned on sides.
 * Common pattern for tooltips that appear to the left or right of elements.
 */
export const SidePosition: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Tooltip positioned on sides. Common pattern for tooltips that appear to the left or right of elements, useful for sidebar navigation and compact layouts.",
      },
    },
  },
  render: () => (
    <div className="flex gap-8 items-center">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="primary" size="medium">
              Left
            </Button>
          </TooltipTrigger>
          <TooltipContent side="left" align="center">
            <p>Tooltip on left</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="primary" size="medium">
              Right
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right" align="center">
            <p>Tooltip on right</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  ),
};

/**
 * REAL-WORLD USAGE PATTERNS
 * These stories demonstrate common real-world tooltip implementations
 */

/**
 * Form field tooltips.
 * Common pattern for providing help text and validation messages.
 */
export const FormTooltips: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Form field tooltips. Common pattern for providing help text, validation messages, and field explanations in forms.",
      },
    },
  },
  render: () => (
    <div className="space-y-4 w-full max-w-md">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium">Password</label>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="tertiary" size="icon">
                  ?
                </Button>
              </TooltipTrigger>
              <TooltipContent side="top">
                <p>Password must be at least 8 characters long</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <input
          type="password"
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          placeholder="Enter your password"
        />
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium">Email</label>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="tertiary" size="icon">
                  ?
                </Button>
              </TooltipTrigger>
              <TooltipContent side="top">
                <p>We'll use this email to send you important updates</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <input
          type="email"
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          placeholder="Enter your email"
        />
      </div>
    </div>
  ),
};

/**
 * Icon tooltips.
 * Common pattern for explaining icons and providing context.
 */
export const IconTooltips: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Icon tooltips. Common pattern for explaining icons, providing context for action buttons, and improving accessibility.",
      },
    },
  },
  render: () => (
    <div className="flex gap-4">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="tertiary" size="icon">
              ⚙️
            </Button>
          </TooltipTrigger>
          <TooltipContent side="top">
            <p>Settings</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="tertiary" size="icon">
              ❤️
            </Button>
          </TooltipTrigger>
          <TooltipContent side="top">
            <p>Add to favorites</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="tertiary" size="icon">
              📤
            </Button>
          </TooltipTrigger>
          <TooltipContent side="top">
            <p>Share</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="tertiary" size="icon">
              🗑️
            </Button>
          </TooltipTrigger>
          <TooltipContent side="top">
            <p>Delete</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  ),
};

/**
 * Navigation tooltips.
 * Common pattern for sidebar navigation and menu items.
 */
export const NavigationTooltips: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Navigation tooltips. Common pattern for sidebar navigation, collapsed menus, and providing context for navigation items.",
      },
    },
  },
  render: () => (
    <div className="flex flex-col gap-2 w-16">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="tertiary" size="icon">
              🏠
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right">
            <p>Home</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="tertiary" size="icon">
              📊
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right">
            <p>Analytics</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="tertiary" size="icon">
              👥
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right">
            <p>Users</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="tertiary" size="icon">
              ⚙️
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right">
            <p>Settings</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  ),
};

/**
 * Action button tooltips.
 * Common pattern for action buttons and command palettes.
 */
export const ActionTooltips: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Action button tooltips. Common pattern for action buttons, command palettes, and providing keyboard shortcuts information.",
      },
    },
  },
  render: () => (
    <div className="flex gap-2">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="secondary" size="icon">
              Save
            </Button>
          </TooltipTrigger>
          <TooltipContent side="top">
            <p>Save changes (Ctrl+S)</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="secondary" size="icon">
              Undo
            </Button>
          </TooltipTrigger>
          <TooltipContent side="top">
            <p>Undo last action (Ctrl+Z)</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="secondary" size="icon">
              Redo
            </Button>
          </TooltipTrigger>
          <TooltipContent side="top">
            <p>Redo last action (Ctrl+Y)</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="secondary" size="icon">
              Print
            </Button>
          </TooltipTrigger>
          <TooltipContent side="top">
            <p>Print document (Ctrl+P)</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  ),
};
