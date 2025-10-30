import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../button";
import { Label } from "../label";
import { Input } from "../input";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
  DialogClose,
} from "./dialog";

const meta = {
  title: "Components/Dialog",
  component: Dialog,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Accessible modal dialog built on Radix UI. Includes header, footer, title and actions. Use DialogTrigger to open and DialogContent as the modal body.",
      },
    },
  },
} satisfies Meta<typeof Dialog>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Basic dialog with header, content and footer actions. Buttons close the dialog on click.",
      },
    },
  },
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Title</DialogTitle>
        </DialogHeader>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="reset" variant="secondary" size="medium">
              Cancel
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button type="submit" variant="primary" size="medium">
              Save changes
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

/**
 * Confirmation dialog.
 * Common pattern for destructive or irreversible actions.
 */
export const Confirmation: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Confirmation dialog for destructive actions. Includes a descriptive message and two actions.",
      },
    },
  },
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="tertiary">Delete item…</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete item</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete the item
            and remove its data.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="secondary" size="medium">
              Cancel
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button variant="primary" size="medium">
              Delete
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

/**
 * Dialog with form.
 * Common pattern for editing resources with inputs and actions.
 */
export const WithForm: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Dialog with a simple form layout, showing typical input and action arrangement.",
      },
    },
  },
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Edit user…</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit user</DialogTitle>
          <DialogDescription>
            Update user profile information.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" defaultValue="John Doe" />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" defaultValue="john@example.com" />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="secondary" size="medium">
              Cancel
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button variant="primary" size="medium">
              Save
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

/**
 * Dialog without close button.
 * Useful when you control closing via actions only.
 */
export const WithoutCloseButton: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Dialog without the top-right close button. Closing is controlled via footer actions only.",
      },
    },
  },
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary">Open dialog</Button>
      </DialogTrigger>
      <DialogContent showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>Session expired</DialogTitle>
          <DialogDescription>
            Your session has expired. Please sign in again to continue.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="primary" size="medium">
              Sign in
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

/**
 * Dialog with long content.
 * Demonstrates scrolling and layout within the dialog body.
 */
export const LongContent: Story = {
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story:
          "Dialog with long content to demonstrate scroll behavior and layout.",
      },
    },
  },
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary">Read terms…</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Terms and Conditions</DialogTitle>
        </DialogHeader>
        <div className="grid gap-3 py-2 max-h-[50vh] overflow-auto pr-1">
          {Array.from({ length: 12 }).map((_, i) => (
            <p key={i}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          ))}
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="secondary" size="medium">
              Close
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button variant="primary" size="medium">
              Accept
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};
