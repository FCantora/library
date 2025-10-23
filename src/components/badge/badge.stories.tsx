import type { Meta, StoryObj } from "@storybook/react";
import Badge from "./badge";
import { RatesBadge } from "./rates-badge";
import { Statuses } from "./statuses";
import StopStatuses from "./stop-statuses";

const meta = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["success", "info", "warning", "error", "outline"],
      description: "Visual variant of the badge",
    },
    size: {
      control: { type: "select" },
      options: ["small", "large"],
      description: "Size of the badge",
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
      table: { disable: true },
    },
    asChild: {
      control: "boolean",
      description: "Render as child component",
      table: { disable: true },
    },
  },
  parameters: {
    layout: "centered",
    controls: { expanded: true },
    docs: {
      description: {
        component:
          "Badge component for displaying status indicators, labels, and small pieces of information. Supports multiple variants and sizes with semantic color coding.",
      },
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    variant: "success",
    size: "large",
  },
  parameters: {
    docs: {
      description: {
        story: "Use the controls to explore different badge options.",
      },
    },
  },
  render: (args) => <Badge {...args}>Badge</Badge>,
};

export const Variants: Story = {
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story:
          "Five available variants: success, info, warning, error, and outline. Each variant has distinct colors for different use cases.",
      },
    },
  },
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Badge variant="success">Success</Badge>
      <Badge variant="info">Info</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="error">Error</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  ),
};

export const Sizes: Story = {
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story:
          "Two available sizes: small and large. Small badges are ideal for compact spaces, while large badges provide better visibility.",
      },
    },
  },
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <Badge variant="success" size="small">
          Small
        </Badge>
        <Badge variant="success" size="large">
          Large
        </Badge>
      </div>
      <div className="flex items-center gap-4">
        <Badge variant="info" size="small">
          Small
        </Badge>
        <Badge variant="info" size="large">
          Large
        </Badge>
      </div>
      <div className="flex items-center gap-4">
        <Badge variant="warning" size="small">
          Small
        </Badge>
        <Badge variant="warning" size="large">
          Large
        </Badge>
      </div>
    </div>
  ),
};

export const StatusIndicators: Story = {
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story:
          "Status indicators for different states: active, pending, completed, and error states.",
      },
    },
  },
  render: () => (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-muted-foreground">
            Order Status:
          </span>
          <Statuses status="ACTIVE" size="small" />
        </div>

        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-muted-foreground">
            Dispatch Status:
          </span>
          <Statuses status="IN_PROGRESS" size="small" />
        </div>

        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-muted-foreground">
            Completion:
          </span>
          <Statuses status="PENDING" size="small" />
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-muted-foreground">
            General Status:
          </span>
          <Statuses status="CANCELLED" size="small" />
        </div>
      </div>
    </div>
  ),
};

export const CommunicationStatus: Story = {
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story:
          "Communication status indicators for EDI and external validation features.",
      },
    },
  },
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <span className="text-sm font-medium text-muted-foreground uppercase">
          Communication by EDI
        </span>
        <Badge
          variant="success"
          size="small"
          className="text-xs font-bold rounded-full"
        >
          Yes
        </Badge>
      </div>

      <div className="flex items-center gap-3">
        <span className="text-sm font-medium text-muted-foreground uppercase">
          External Validation
        </span>
        <Badge
          variant="error"
          size="small"
          className="text-xs font-bold rounded-full"
        >
          No
        </Badge>
      </div>

      <div className="flex items-center gap-3">
        <span className="text-sm font-medium text-muted-foreground uppercase">
          Receive Tenders
        </span>
        <Badge
          variant="success"
          size="small"
          className="text-xs font-bold rounded-full"
        >
          Enabled
        </Badge>
      </div>
    </div>
  ),
};

export const RateTypes: Story = {
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story:
          "Rate type indicators for different shipping methods: TL (Truckload) and LTL (Less Than Truckload).",
      },
    },
  },
  render: () => (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-muted-foreground">
            Single Rate:
          </span>
          <RatesBadge value="TL" variant="single" />
        </div>

        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-muted-foreground">
            Multiple Rates:
          </span>
          <RatesBadge value={["TL", "LTL"]} />
        </div>
      </div>
    </div>
  ),
};

export const CompanyFeatures: Story = {
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story:
          "Company feature indicators showing EDI capabilities and other service features.",
      },
    },
  },
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <span className="font-semibold text-foreground">
          ABC Transport Inc.
        </span>
        <Badge variant="info" size="small" className="w-8 h-5 px-1 py-0">
          EDI
        </Badge>
      </div>
    </div>
  ),
};

export const StatusesComponent: Story = {
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story:
          "Statuses component for displaying dispatch status with automatic variant mapping and consistent styling.",
      },
    },
  },
  render: () => (
    <div className="flex flex-col gap-6">
      <div>
        <p className="text-lg font-semibold mb-3">All Status Types</p>
        <div className="flex flex-wrap gap-3">
          <Statuses status="ACTIVE" size="small" />
          <Statuses status="PENDING" size="small" />
          <Statuses status="IN_PROGRESS" size="small" />
          <Statuses status="COMPLETED" size="small" />
          <Statuses status="CANCELLED" size="small" />
        </div>
      </div>

      <div>
        <p className="text-lg font-semibold mb-3">Size Comparison</p>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <Statuses status="ACTIVE" size="small" />
            <Statuses status="ACTIVE" size="large" />
          </div>
          <div className="flex items-center gap-4">
            <Statuses status="PENDING" size="small" />
            <Statuses status="PENDING" size="large" />
          </div>
        </div>
      </div>

      <div>
        <p className="text-lg font-semibold mb-3">Real-world Usage</p>
        <div className="p-4 border border-border rounded-lg bg-background w-80">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium">Order Status:</span>
            <Statuses status="IN_PROGRESS" size="small" />
          </div>
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium">Dispatch Status:</span>
            <Statuses status="ACTIVE" size="small" />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Completion:</span>
            <Statuses status="COMPLETED" size="small" />
          </div>
        </div>
      </div>
    </div>
  ),
};

export const StopStatusesComponent: Story = {
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story:
          "StopStatuses component for displaying delivery stop statuses with visual indicators and priority levels.",
      },
    },
  },
  render: () => (
    <div className="flex flex-col gap-6">
      <div>
        <p className="text-lg font-semibold mb-3">All Status Types</p>
        <div className="flex flex-col gap-3">
          <StopStatuses status="PICKUP_SCHEDULED" severitySuffix="medium" />
          <StopStatuses status="DELIVERY_DELAYED" severitySuffix="high" />
          <StopStatuses status="DELIVERED" severitySuffix="low" />
          <StopStatuses status="CANCELLED" severitySuffix="medium" />
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
          "Common use case examples: dashboard widgets, data tables, and notification panels.",
      },
    },
  },
  render: () => (
    <div className="flex flex-col gap-6">
      <div>
        <p className="text-lg font-semibold mb-3">Dashboard Widget</p>
        <div className="p-4 border border-border rounded-lg bg-background w-80">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-medium">System Status</h3>
            <Badge variant="success" size="small">
              Online
            </Badge>
          </div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-muted-foreground">Active Users</span>
            <Badge variant="info" size="small">
              1,234
            </Badge>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">
              Pending Orders
            </span>
            <Badge variant="warning" size="small">
              12
            </Badge>
          </div>
        </div>
      </div>

      <div>
        <p className="text-lg font-semibold mb-3">Data Table Row</p>
        <div className="border border-border rounded-lg bg-background w-80">
          <div className="p-3 border-b border-border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Order #12345</p>
                <p className="text-xs text-muted-foreground">John Doe</p>
              </div>
              <Badge variant="success" size="small">
                Completed
              </Badge>
            </div>
          </div>
          <div className="p-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Order #12346</p>
                <p className="text-xs text-muted-foreground">Jane Smith</p>
              </div>
              <Badge variant="warning" size="small">
                Processing
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div>
        <p className="text-lg font-semibold mb-3">Notification Panel</p>
        <div className="p-4 border border-border rounded-lg bg-background w-80">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-2 h-2 rounded-full bg-success"></div>
            <span className="text-sm font-medium">System Update</span>
            <Badge variant="success" size="small">
              New
            </Badge>
          </div>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-2 h-2 rounded-full bg-warning"></div>
            <span className="text-sm font-medium">Maintenance Scheduled</span>
            <Badge variant="warning" size="small">
              Soon
            </Badge>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-error"></div>
            <span className="text-sm font-medium">Service Disruption</span>
            <Badge variant="error" size="small">
              Critical
            </Badge>
          </div>
        </div>
      </div>
    </div>
  ),
};
