import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Drawer } from "./drawer";

import { Button } from "@/components/button";

const meta = {
  title: "Drawer",
  component: Drawer,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Drawer>;

export default meta;

type Story = StoryObj<typeof meta>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const DrawerWithState = (args: any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button variant="secondary" onClick={() => setIsOpen(true)}>
        Open
      </Button>
      <Drawer
        {...args}
        open={isOpen}
        onOpenChange={setIsOpen}
        onDismiss={() => {
          console.log("dismissed");
          setIsOpen(false);
        }}
      />
    </>
  );
};

export const Default: Story = {
  render: (args) => <DrawerWithState {...args} />,
  args: {
    title: "Title",
    confirmLabel: "Confirm",
    dismissLabel: "Cancel",
    action: () => console.log("action clicked"),
    onOpenChange: () => console.log("open changed"),
    children: <p>This content could be anything</p>,
  },
};

export const WithScroll: Story = {
  render: (args) => <DrawerWithState {...args} />,
  args: {
    title: "Title",
    confirmLabel: "Confirm",
    dismissLabel: "Cancel",
    action: () => console.log("action clicked"),
    onDismiss: () => console.log("dismissed"),
    onOpenChange: () => console.log("open changed"),
    children: (
      <>
        <img
          src="https://www.teamseco.com/wp-content/uploads/2016/12/team.jpg"
          alt=""
          className="mb-4 w-full"
        />
        <p className="mb-4">
          SECO is an end-to-end provider of complete freight consolidation and
          transportation supply chain solutions. Since opening our first
          crossdock facility in 1991, we have taken great pride in satisfying
          client needs with absolute precision and dedication. From innovating
          new transportation management offerings to opening facilities that
          accommodate regional and linked intra-regional routes, we continue to
          build capabilities to support the success of our clients. SECO is a
          recognized industry leader in Supply Chain Management. By uniting
          best-in-class providers and resources under the SECO umbrella, we are
          able to customize a complete, scalable transportation strategy that
          meets each customer’s immediate and ongoing transportation management
          needs. And our dedicated customer service representatives make sure
          that the solution works consistently to create benefits like reduced
          warehousing requirements, faster transit times, and more reliable
          on-time deliveries – factors that translate into competitive
          advantages for you.
        </p>
        <img
          src="https://www.teamseco.com/wp-content/uploads/2016/12/transloading.jpg"
          alt=""
          className="mb-4 w-full"
        />
        <p>
          SECO is an end-to-end provider of complete freight consolidation and
          transportation supply chain solutions. Since opening our first
          crossdock facility in 1991, we have taken great pride in satisfying
          client needs with absolute precision and dedication. From innovating
          new transportation management offerings to opening facilities that
          accommodate regional and linked intra-regional routes, we continue to
          build capabilities to support the success of our clients. SECO is a
          recognized industry leader in Supply Chain Management. By uniting
          best-in-class providers and resources under the SECO umbrella, we are
          able to customize a complete, scalable transportation strategy that
          meets each customer’s immediate and ongoing transportation management
          needs. And our dedicated customer service representatives make sure
          that the solution works consistently to create benefits like reduced
          warehousing requirements, faster transit times, and more reliable
          on-time deliveries – factors that translate into competitive
          advantages for you.
        </p>
      </>
    ),
  },
};
