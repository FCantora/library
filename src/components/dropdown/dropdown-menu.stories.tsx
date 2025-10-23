import type { Meta, StoryObj } from "@storybook/react";
import { Bell, ChevronDown, CircleUser, EllipsisVertical } from "lucide-react";

import { Button } from "../button";
import { Checkbox } from "../checkbox";
import { Avatar, AvatarFallback, AvatarImage } from "../avatar";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioItem,
  DropdownMenuRadioGroup,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "./dropdown-menu";

const meta: Meta<typeof DropdownMenu> = {
  title: "Components/DropdownMenu",
  component: DropdownMenu,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
The DropdownMenu component provides a flexible and accessible dropdown menu system built on Radix UI primitives. 
It supports various menu items, groups, separators, and interactive elements.

## Key Features
- **Accessible**: Built with Radix UI primitives for full accessibility support
- **Flexible Content**: Support for labels, items, groups, separators, and shortcuts
- **Interactive Elements**: Checkboxes, radio groups, and sub-menus
- **Customizable**: Full control over styling and behavior
- **Keyboard Navigation**: Complete keyboard support

## Usage Patterns
- **Basic Menus**: Simple lists of actions
- **User Menus**: Profile and account actions
- **Filter Menus**: Multi-select and single-select filtering
- **Action Menus**: Context actions with multiple options
- **Complex Menus**: Advanced layouts with groups and sub-menus
        `,
      },
    },
  },
} satisfies Meta<typeof DropdownMenu>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * BASIC DROPDOWN MENUS
 * These stories demonstrate fundamental dropdown menu patterns
 */

/**
 * Default dropdown menu with basic items and separators.
 * Use this as the standard dropdown pattern for simple action lists.
 */
export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Standard dropdown menu with basic items and separators. Perfect for simple action lists and navigation menus.",
      },
    },
  },
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="tertiary" size="small">
          Open Menu
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

/**
 * Dropdown menu with labels for better organization.
 * Ideal for menus that need clear section headers.
 */
export const WithLabels: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Dropdown menu with labels for better organization. Perfect for menus that need clear section headers and grouping.",
      },
    },
  },
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="tertiary" size="small">
          Open Menu
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

/**
 * Dropdown menu with keyboard shortcuts.
 * Perfect for power users and application menus.
 */
export const WithShortcuts: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Dropdown menu with keyboard shortcuts displayed. Ideal for power users and application menus where shortcuts are important.",
      },
    },
  },
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="tertiary" size="small">
          Open Menu
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          New File
          <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          Open
          <DropdownMenuShortcut>⌘O</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          Save
          <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

/**
 * INTERACTIVE DROPDOWN MENUS
 * These stories demonstrate dropdowns with interactive elements
 */

/**
 * Dropdown menu with checkboxes for multi-select functionality.
 * Perfect for filter menus and settings panels.
 */
export const WithCheckboxes: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Dropdown menu with checkboxes for multi-select functionality. Ideal for filter menus, settings panels, and any multi-selection scenarios.",
      },
    },
  },
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="tertiary" size="small">
          Filter Options
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Filter by Status</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem checked={true}>
          Active
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem checked={false}>
          Pending
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem checked={true}>
          Completed
        </DropdownMenuCheckboxItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Clear All Filters</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

/**
 * Dropdown menu with radio group for single-select functionality.
 * Perfect for theme selection, language selection, and single-choice options.
 */
export const WithRadioGroup: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Dropdown menu with radio group for single-select functionality. Ideal for theme selection, language selection, and any single-choice scenarios.",
      },
    },
  },
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="tertiary" size="small">
          Select Theme
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Theme</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value="light">
          <DropdownMenuRadioItem value="light">Light</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="dark">Dark</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="system">System</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

/**
 * Dropdown menu with sub-menu functionality.
 * Perfect for hierarchical navigation and nested actions.
 */
export const WithSubMenu: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Dropdown menu with sub-menu functionality. Ideal for hierarchical navigation, nested actions, and complex menu structures.",
      },
    },
  },
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="tertiary" size="small">
          Open Menu
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>More Tools</DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuItem>Save Project</DropdownMenuItem>
            <DropdownMenuItem>Export</DropdownMenuItem>
            <DropdownMenuItem>Import</DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

/**
 * ADVANCED DROPDOWN MENUS
 * These stories demonstrate complex dropdown layouts and patterns
 */

/**
 * Complex dropdown menu with groups, checkboxes, and mixed content.
 * Demonstrates advanced dropdown capabilities and organization.
 */
export const ComplexLayout: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Complex dropdown menu demonstrating advanced capabilities including groups, checkboxes, shortcuts, and mixed content types.",
      },
    },
  },
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="tertiary" size="small">
          Complex Menu
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Profile
            <DropdownMenuShortcut>⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Settings
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuCheckboxItem checked={true}>
            Show notifications
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem checked={false}>
            Dark mode
          </DropdownMenuCheckboxItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Help & Support</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

/**
 * REAL-WORLD USAGE PATTERNS
 * These stories demonstrate common real-world dropdown implementations
 */

/**
 * User profile dropdown menu with avatar and account actions.
 * Common pattern for user account management in applications.
 */
export const UserProfileMenu: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "User profile dropdown menu with avatar and account actions. Common pattern for user account management in applications.",
      },
    },
  },
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>
              <CircleUser />
            </AvatarFallback>
          </Avatar>
          <p>John Doe</p>
          <ChevronDown />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

/**
 * Notification dropdown menu.
 * Common pattern for notification centers and alerts.
 */
export const NotificationMenu: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Notification dropdown menu. Common pattern for notification centers, alerts, and message systems.",
      },
    },
  },
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Bell />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Notifications</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>New message from John</DropdownMenuItem>
        <DropdownMenuItem>System update available</DropdownMenuItem>
        <DropdownMenuItem>Meeting reminder in 15 minutes</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>View all notifications</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

/**
 * Action menu with multiple options and disabled states.
 * Common pattern for context menus and action buttons.
 */
export const ActionMenu: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Action menu with multiple options and disabled states. Common pattern for context menus, action buttons, and item-specific actions.",
      },
    },
  },
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="tertiary">
          <EllipsisVertical />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>Edit</DropdownMenuItem>
        <DropdownMenuItem>Duplicate</DropdownMenuItem>
        <DropdownMenuItem>Share</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem disabled>Archive</DropdownMenuItem>
        <DropdownMenuItem disabled>Delete</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

/**
 * Filter dropdown menu with multi-select checkboxes.
 * Common pattern for data filtering and search interfaces.
 */
export const FilterMenu: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Filter dropdown menu with multi-select checkboxes. Common pattern for data filtering, search interfaces, and content management.",
      },
    },
  },
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="tertiary" size="small">
          Filter by Status
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Filter Options</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem checked={true}>
          Active
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem checked={false}>
          Pending
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem checked={true}>
          Completed
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem checked={false}>
          Cancelled
        </DropdownMenuCheckboxItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Select All</DropdownMenuItem>
        <DropdownMenuItem>Clear All</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

/**
 * Multi-select dropdown with complex layout and action buttons.
 * Advanced pattern for complex filtering and selection interfaces.
 */
export const MultiSelectMenu: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Multi-select dropdown with complex layout and action buttons. Advanced pattern for complex filtering, selection interfaces, and data management.",
      },
    },
  },
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="tertiary" size="small">
          Select Categories
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Categories</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <div className="grid grid-cols-2 gap-2 p-2">
          <label className="flex items-center cursor-pointer">
            <Checkbox className="mr-2" />
            <span>Technology</span>
          </label>
          <label className="flex items-center cursor-pointer">
            <Checkbox className="mr-2" />
            <span>Business</span>
          </label>
          <label className="flex items-center cursor-pointer">
            <Checkbox className="mr-2" />
            <span>Design</span>
          </label>
          <label className="flex items-center cursor-pointer">
            <Checkbox className="mr-2" />
            <span>Marketing</span>
          </label>
        </div>
        <DropdownMenuSeparator />
        <div className="flex justify-between p-2">
          <Button variant="tertiary" size="small">
            Clear All
          </Button>
          <Button size="small">Apply</Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};
