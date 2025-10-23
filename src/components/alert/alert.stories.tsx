import type { Meta, StoryObj } from "@storybook/react";
import { CircleCheck, CircleX, InfoIcon, TriangleAlert } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "./alert";

const meta = {
  title: "Components/Alert",
  component: Alert,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["info", "success", "warning", "error"],
      description: "Visual variant of the alert",
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
          "Alert component for displaying important messages to users. Supports four variants (info, success, warning, error) with optional icons, titles, descriptions, and close functionality.",
      },
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;

type Story = StoryObj<typeof meta>;

const iconMap = {
  info: <InfoIcon />,
  success: <CircleCheck />,
  warning: <TriangleAlert />,
  error: <CircleX />,
};

export const Playground: Story = {
  args: {
    variant: "info",
  },
  parameters: {
    docs: {
      description: {
        story: "Use the controls to explore different alert options.",
      },
    },
  },
  render: (args) => (
    <Alert {...args}>
      {iconMap[args.variant || "info"]}
      <div>
        <AlertTitle>
          Event updates may take a moment to appear on screen.
        </AlertTitle>
      </div>
    </Alert>
  ),
};

export const Variants: Story = {
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story:
          "Four available variants: info, success, warning, and error. Each variant has distinct colors and icons.",
      },
    },
  },
  render: () => (
    <div className="flex flex-col gap-4">
      <Alert variant="info">
        {iconMap.info}
        <div>
          <AlertTitle>Information</AlertTitle>
          <AlertDescription>
            This is an informational message for the user.
          </AlertDescription>
        </div>
      </Alert>
      <Alert variant="success">
        {iconMap.success}
        <div>
          <AlertTitle>Success</AlertTitle>
          <AlertDescription>
            Your action was completed successfully.
          </AlertDescription>
        </div>
      </Alert>
      <Alert variant="warning">
        {iconMap.warning}
        <div>
          <AlertTitle>Warning</AlertTitle>
          <AlertDescription>
            Please review this information before proceeding.
          </AlertDescription>
        </div>
      </Alert>
      <Alert variant="error">
        {iconMap.error}
        <div>
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            Something went wrong. Please try again.
          </AlertDescription>
        </div>
      </Alert>
    </div>
  ),
};

export const Info: Story = {
  parameters: {
    docs: {
      description: {
        story: "Info alert for displaying general information to users.",
      },
    },
  },
  render: () => (
    <Alert variant="info">
      {iconMap.info}
      <div>
        <AlertTitle>
          Event updates may take a moment to appear on screen.
        </AlertTitle>
      </div>
    </Alert>
  ),
};

export const Success: Story = {
  parameters: {
    docs: {
      description: {
        story: "Success alert for confirming successful actions or operations.",
      },
    },
  },
  render: () => (
    <Alert variant="success">
      {iconMap.success}
      <div>
        <AlertTitle>Your changes have been saved.</AlertTitle>
      </div>
    </Alert>
  ),
};

export const Warning: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Warning alert for displaying important notices that require user attention.",
      },
    },
  },
  render: () => (
    <Alert variant="warning">
      {iconMap.warning}
      <div>
        <AlertTitle>
          The Load has been updated. To ensure the carrier is notified, send the
          Load update.
        </AlertTitle>
      </div>
    </Alert>
  ),
};

export const Error: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Error alert for displaying error messages and failed operations.",
      },
    },
  },
  render: () => (
    <Alert variant="error">
      {iconMap.error}
      <div>
        <AlertTitle>Something went wrong. Please try again.</AlertTitle>
      </div>
    </Alert>
  ),
};

export const WithDescription: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Alert with both title and description for more detailed messaging.",
      },
    },
  },
  render: () => (
    <Alert variant="info">
      {iconMap.info}
      <div>
        <AlertTitle>
          Event updates may take a moment to appear on screen.
        </AlertTitle>
        <AlertDescription>
          Once saved, the customer will receive a status update.
        </AlertDescription>
      </div>
    </Alert>
  ),
};

export const WithCloseButton: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Alert with close button functionality for dismissible messages.",
      },
    },
  },
  render: () => (
    <Alert variant="success">
      {iconMap.success}
      <div>
        <AlertTitle onClose={() => {}}>Event sent successfully</AlertTitle>
      </div>
    </Alert>
  ),
};

export const ToastStyle: Story = {
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story:
          "Toast-style alert with compact design for notifications and temporary messages.",
      },
    },
  },
  render: () => (
    <Alert
      variant="info"
      className="flex items-center h-16 rounded-lg p-4 gap-4 pl-6"
    >
      {iconMap.info}
      <div>
        <AlertTitle className="text-base">Information</AlertTitle>
        <AlertDescription className="text-sm my-1">
          This is a toast-style alert message.
        </AlertDescription>
      </div>
    </Alert>
  ),
};

export const FixedPosition: Story = {
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story:
          "Fixed position alert for persistent notifications that stay visible.",
      },
    },
  },
  render: () => (
    <div className="relative h-32">
      <Alert variant="success" className="fixed top-12 right-4 z-30">
        <CircleCheck />
        <AlertTitle onClose={() => console.log("close")}>
          Your changes have been saved.
        </AlertTitle>
      </Alert>
    </div>
  ),
};

export const UseCases: Story = {
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story:
          "Common use case examples: form validation, system notifications, and user feedback.",
      },
    },
  },
  render: () => (
    <div className="flex flex-col gap-6">
      <div>
        <p className="text-lg font-semibold mb-3">Form Validation</p>
        <div className="flex flex-col gap-3">
          <Alert variant="error">
            {iconMap.error}
            <div>
              <AlertTitle>Validation Error</AlertTitle>
              <AlertDescription>
                Please fill in all required fields before submitting.
              </AlertDescription>
            </div>
          </Alert>
          <Alert variant="success">
            {iconMap.success}
            <div>
              <AlertTitle>Form Submitted Successfully</AlertTitle>
              <AlertDescription>
                Your information has been saved and will be processed shortly.
              </AlertDescription>
            </div>
          </Alert>
        </div>
      </div>

      <div>
        <p className="text-lg font-semibold mb-3">System Notifications</p>
        <div className="flex flex-col gap-3">
          <Alert variant="info">
            {iconMap.info}
            <div>
              <AlertTitle>System Maintenance</AlertTitle>
              <AlertDescription>
                Scheduled maintenance will occur tonight from 2:00 AM to 4:00 AM
                EST.
              </AlertDescription>
            </div>
          </Alert>
          <Alert variant="warning">
            {iconMap.warning}
            <div>
              <AlertTitle>High Server Load</AlertTitle>
              <AlertDescription>
                Response times may be slower than usual. We're working to
                resolve this.
              </AlertDescription>
            </div>
          </Alert>
        </div>
      </div>

      <div>
        <p className="text-lg font-semibold mb-3">User Feedback</p>
        <div className="flex flex-col gap-3">
          <Alert variant="success">
            {iconMap.success}
            <div>
              <AlertTitle onClose={() => {}}>Profile Updated</AlertTitle>
              <AlertDescription>
                Your profile information has been successfully updated.
              </AlertDescription>
            </div>
          </Alert>
          <Alert variant="error">
            {iconMap.error}
            <div>
              <AlertTitle>Upload Failed</AlertTitle>
              <AlertDescription>
                The file could not be uploaded. Please check your connection and
                try again.
              </AlertDescription>
            </div>
          </Alert>
        </div>
      </div>
    </div>
  ),
};
