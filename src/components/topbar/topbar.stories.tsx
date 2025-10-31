import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Topbar } from "./topbar";

const meta = {
  title: "Components/Topbar",
  component: Topbar,
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text", description: "Topbar title text" },
    profile: { table: { disable: true } },
    routes: { table: { disable: true } },
    notifications: { control: "object", description: "Notification items" },
    onRouteClick: { table: { disable: true } },
    onSignOut: { table: { disable: true } },
  },
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Topbar component for app navigation and user actions. Designed for Storybook usage without routing. Use title, routes and notifications to customize.",
      },
    },
  },
  args: {
    title: "App",
    profile: { name: "John Doe", profilePic: "https://github.com/shadcn.png" },
    routes: [
      { label: "Home", to: "/" },
      { label: "Dispatch", to: "/dispatch" },
      { label: "Settings", to: "/settings" },
    ],
    notifications: ["Notification 1", "Notification 2"],
  },
} satisfies Meta<typeof Topbar>;

export default meta;

type Story = StoryObj<typeof meta>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TopbarWithState = (args: any) => {
  const [activeRoute, setActiveRoute] = useState("/");

  return (
    <Topbar
      {...args}
      activeRoute={activeRoute}
      onRouteClick={setActiveRoute}
    />
  );
};

export const Default: Story = {
  render: (args) => <TopbarWithState {...args} />,
  parameters: {
    docs: {
      description: {
        story:
          "Default Topbar with title, routes, and user menu. Buttons do not navigate in Storybook.",
      },
    },
  },
};

export const WithManyLinks: Story = {
  args: {
    routes: Array.from({ length: 6 }).map((_, i) => ({
      label: `Link ${i + 1}`,
      to: `/${i + 1}`,
    })),
  },
  render: (args) => <TopbarWithState {...args} />,
  parameters: {
    docs: {
      description: {
        story:
          "Topbar with many navigation links to demonstrate horizontal layout handling.",
      },
    },
  },
};

export const WithNotifications: Story = {
  args: {
    notifications: ["New load assigned", "Rate updated", "Document approved"],
  },
  parameters: {
    docs: {
      description: {
        story: "Topbar with sample notifications in the bell dropdown.",
      },
    },
  },
};
