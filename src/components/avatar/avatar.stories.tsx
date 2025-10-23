import type { Meta, StoryObj } from "@storybook/react";
import { CircleUser, ChevronDown, User, Shield, Crown } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

const meta = {
  title: "Components/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
      description: "Size of the avatar",
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
      table: { disable: true },
    },
  },
  parameters: {
    layout: "centered",
    controls: { expanded: true },
    docs: {
      description: {
        component:
          "Avatar component for displaying user profile images with fallback support. Built on Radix UI primitives with customizable sizes and automatic fallback handling.",
      },
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    size: "medium",
  },
  parameters: {
    docs: {
      description: {
        story: "Use the controls to explore different avatar options.",
      },
    },
  },
  render: (args) => (
    <Avatar {...args}>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
};

export const Sizes: Story = {
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story:
          "Three available sizes: small, medium (default), and large. Each size is optimized for different UI contexts.",
      },
    },
  },
  render: () => (
    <div className="flex items-center gap-6">
      <div className="flex flex-col items-center gap-2">
        <Avatar size="small">
          <AvatarImage src="https://github.com/shadcn.png" alt="Small" />
          <AvatarFallback>S</AvatarFallback>
        </Avatar>
        <p className="text-sm text-muted-foreground">Small</p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Avatar size="medium">
          <AvatarImage src="https://github.com/shadcn.png" alt="Medium" />
          <AvatarFallback>M</AvatarFallback>
        </Avatar>
        <p className="text-sm text-muted-foreground">Medium</p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Avatar size="large">
          <AvatarImage src="https://github.com/shadcn.png" alt="Large" />
          <AvatarFallback>L</AvatarFallback>
        </Avatar>
        <p className="text-sm text-muted-foreground">Large</p>
      </div>
    </div>
  ),
};

export const WithImage: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Avatar with a valid image source. The image will be displayed if it loads successfully.",
      },
    },
  },
  render: () => (
    <Avatar size="large">
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
};

export const FallbackStates: Story = {
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story:
          "Different fallback states: when image fails to load, when no image is provided, and with custom fallback content.",
      },
    },
  },
  render: () => (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarImage src="broken-image-url" alt="Broken image" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm font-medium">Image Failed to Load</p>
          <p className="text-xs text-muted-foreground">
            Shows initials fallback
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarFallback>
            <CircleUser className="h-4 w-4" />
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm font-medium">No Image Provided</p>
          <p className="text-xs text-muted-foreground">Shows icon fallback</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarImage src="broken-url" alt="Custom fallback" />
          <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
            🚚
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm font-medium">Custom Fallback</p>
          <p className="text-xs text-muted-foreground">
            Custom styling and emoji
          </p>
        </div>
      </div>
    </div>
  ),
};

export const UserRoles: Story = {
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story:
          "Avatar examples for different user roles with appropriate styling and indicators.",
      },
    },
  },
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <Avatar size="large">
          <AvatarImage src="https://github.com/shadcn.png" alt="Admin" />
          <AvatarFallback className="bg-error text-error-foreground">
            <Crown className="h-6 w-6" />
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm font-medium">Administrator</p>
          <p className="text-xs text-error">Full system access</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Avatar size="large">
          <AvatarImage src="https://github.com/shadcn.png" alt="Manager" />
          <AvatarFallback className="bg-info text-info-foreground">
            <Shield className="h-6 w-6" />
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm font-medium">Manager</p>
          <p className="text-xs text-info">Management access</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Avatar size="large">
          <AvatarImage src="https://github.com/shadcn.png" alt="User" />
          <AvatarFallback className="bg-success text-success-foreground">
            <User className="h-6 w-6" />
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm font-medium">Standard User</p>
          <p className="text-xs text-success">Standard access</p>
        </div>
      </div>
    </div>
  ),
};

export const LoadingState: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Loading state simulation with animated placeholder while image loads.",
      },
    },
  },
  render: () => (
    <Avatar size="large">
      <AvatarImage src="" alt="Loading..." />
      <AvatarFallback className="animate-pulse bg-muted">
        <div className="w-full h-full bg-muted-foreground/20 rounded-full"></div>
      </AvatarFallback>
    </Avatar>
  ),
};

export const AuthenticationStates: Story = {
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story:
          "Different authentication states: logged in user vs guest user with appropriate styling.",
      },
    },
  },
  render: () => (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <Avatar size="large">
          <AvatarImage
            src="https://github.com/shadcn.png"
            alt="Authenticated user"
          />
          <AvatarFallback className="bg-success text-success-foreground">
            <CircleUser className="h-6 w-6" />
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm font-medium">Authenticated User</p>
          <p className="text-xs text-success">✓ Logged in</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Avatar size="large">
          <AvatarImage src="" alt="Guest user" />
          <AvatarFallback className="bg-muted text-muted-foreground">
            <CircleUser className="h-6 w-6" />
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm font-medium">Guest User</p>
          <p className="text-xs text-muted-foreground">Not logged in</p>
        </div>
      </div>
    </div>
  ),
};

export const UseCases: Story = {
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story:
          "Common use case examples: user profile cards, navigation bars, and team member lists.",
      },
    },
  },
  render: () => (
    <div className="flex flex-col gap-6">
      <div>
        <p className="text-lg font-semibold mb-3">User Profile Card</p>
        <div className="flex items-center gap-4 p-4 border border-border rounded-lg bg-background w-80">
          <Avatar size="large">
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="User profile"
            />
            <AvatarFallback className="bg-primary text-primary-foreground">
              <CircleUser className="h-6 w-6" />
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <p className="text-sm font-medium">John Doe</p>
            <p className="text-xs text-muted-foreground">
              john.doe@example.com
            </p>
            <p className="text-xs text-primary">Administrator</p>
          </div>
        </div>
      </div>

      <div>
        <p className="text-lg font-semibold mb-3">Navigation Bar</p>
        <div className="flex items-center justify-between gap-4 p-4 border border-border rounded-lg bg-background w-80">
          <div className="flex items-center gap-3">
            <Avatar size="small">
              <AvatarImage src="https://github.com/shadcn.png" alt="User" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">John Doe</p>
              <p className="text-xs text-muted-foreground">Administrator</p>
            </div>
          </div>
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </div>
      </div>

      <div>
        <p className="text-lg font-semibold mb-3">Team Members</p>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <Avatar size="medium">
              <AvatarImage
                src="https://github.com/shadcn.png"
                alt="Team member"
              />
              <AvatarFallback className="bg-success text-success-foreground">
                SM
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">Sarah Miller</p>
              <p className="text-xs text-muted-foreground">Project Manager</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Avatar size="medium">
              <AvatarImage
                src="https://github.com/shadcn.png"
                alt="Team member"
              />
              <AvatarFallback className="bg-info text-info-foreground">
                MJ
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">Mike Johnson</p>
              <p className="text-xs text-muted-foreground">Developer</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Avatar size="medium">
              <AvatarImage
                src="https://github.com/shadcn.png"
                alt="Team member"
              />
              <AvatarFallback className="bg-warning text-warning-foreground">
                AL
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">Alex Lee</p>
              <p className="text-xs text-muted-foreground">Designer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};
