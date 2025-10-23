import type { Meta, StoryObj } from "@storybook/react";
import { Store, User, Settings, Mail, Phone, MapPin } from "lucide-react";

import { Button } from "../button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";
import { CarrierDetailsCard as CarrierDetailsCardComponent } from "./carrier-details-card";
import { CardActionMenu } from "./card-action-menu";
import { Label } from "../label";
import { Input } from "../input";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
The Card component provides a flexible container for displaying content with consistent styling and spacing. 
It supports various layouts including headers, content, footers, and action menus.

## Key Features
- **Flexible Layout**: Support for header, content, and footer sections
- **Action Menus**: Integrated dropdown menus with absolute positioning
- **Custom Components**: Specialized cards like CarrierDetailsCard for specific use cases
- **Responsive Design**: Adapts to different screen sizes
- **Accessibility**: Built with accessibility best practices

## Usage Patterns
- **Basic Cards**: Simple content display
- **Interactive Cards**: With buttons and form elements
- **Action Cards**: With dropdown menus for multiple actions
- **Specialized Cards**: Domain-specific layouts like carrier details
        `,
      },
    },
  },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * BASIC CARD LAYOUTS
 * These stories demonstrate the fundamental card structure and variations
 */

/**
 * Default card with all sections (header, content, footer).
 * Use this as the standard card layout for most content.
 */
export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Standard card layout with header, content, and footer sections. This is the most common card pattern.",
      },
    },
  },
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card content goes here.</p>
      </CardContent>
      <CardFooter>
        <p>Card footer content.</p>
      </CardFooter>
    </Card>
  ),
};

/**
 * Minimal card with only title and content.
 * Perfect for simple information display without footer actions.
 */
export const Simple: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Minimal card layout with only header and content. Ideal for simple information display without footer actions.",
      },
    },
  },
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Simple Card</CardTitle>
      </CardHeader>
      <CardContent>
        <p>This is a simple card with just a title and content.</p>
      </CardContent>
    </Card>
  ),
};

/**
 * Card without header section.
 * Useful when you need to start directly with content.
 */
export const WithoutHeader: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Card without header section. Use when you need to start directly with content or have custom header styling.",
      },
    },
  },
  render: () => (
    <Card className="w-[350px]">
      <CardContent className="pt-6">
        <p>This card doesn't have a header section.</p>
        <p>All content is in the main content area.</p>
      </CardContent>
    </Card>
  ),
};

/**
 * Card without footer section.
 * Clean layout focusing on content without action buttons.
 */
export const WithoutFooter: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Card without footer section. Clean layout focusing on content without action buttons.",
      },
    },
  },
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card without Footer</CardTitle>
        <CardDescription>
          This card doesn't have a footer section.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card content goes here.</p>
      </CardContent>
    </Card>
  ),
};

/**
 * INTERACTIVE CARDS
 * These stories demonstrate cards with interactive elements
 */

/**
 * Card with form elements and submit action.
 * Perfect for data collection and user input scenarios.
 */
export const WithForm: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Card containing form elements with labels and inputs. Ideal for data collection and user input scenarios.",
      },
    },
  },
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Form Card</CardTitle>
        <CardDescription>This card contains form elements.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label>Name</Label>
          <Input className="w-full" placeholder="Enter your name" />
        </div>
        <div>
          <Label>Email</Label>
          <Input
            className="w-full"
            placeholder="Enter your email"
            type="email"
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Submit</Button>
      </CardFooter>
    </Card>
  ),
};

/**
 * Card with action buttons in footer.
 * Use for cards that need primary and secondary actions.
 */
export const WithActions: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Card with action buttons in the footer. Perfect for cards that need primary and secondary actions.",
      },
    },
  },
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card with Actions</CardTitle>
        <CardDescription>This card includes action buttons.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card content with some information.</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="tertiary">Cancel</Button>
        <Button>Save</Button>
      </CardFooter>
    </Card>
  ),
};

/**
 * ACTION MENU CARDS
 * These stories demonstrate cards with dropdown action menus
 */

/**
 * Card with action menu positioned absolutely.
 * Demonstrates different positioning options for action menus.
 */
export const WithActionMenu: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Card with dropdown action menu positioned absolutely. Shows different positioning options and multiple actions.",
      },
    },
  },
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Top Right (Default)</h3>
        <Card className="w-[400px] relative">
          <CardHeader>
            <CardTitle>Card with Top-Right Menu</CardTitle>
            <CardDescription>
              Action menu positioned at top-right corner.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              This card has the action menu positioned absolutely at the
              top-right corner.
            </p>
          </CardContent>
          <CardActionMenu
            options={[
              { label: "Edit", onSelect: () => console.log("Edit clicked") },
              {
                label: "Delete",
                onSelect: () => console.log("Delete clicked"),
              },
            ]}
            useAbsolutePosition={true}
            absolutePosition="top-right"
          />
        </Card>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Top Left</h3>
        <Card className="w-[400px] relative">
          <CardHeader>
            <CardTitle>Card with Top-Left Menu</CardTitle>
            <CardDescription>
              Action menu positioned at top-left corner.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              This card has the action menu positioned absolutely at the
              top-left corner.
            </p>
          </CardContent>
          <CardActionMenu
            options={[
              { label: "Edit", onSelect: () => console.log("Edit clicked") },
              {
                label: "Delete",
                onSelect: () => console.log("Delete clicked"),
              },
            ]}
            useAbsolutePosition={true}
            absolutePosition="top-left"
          />
        </Card>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Bottom Right</h3>
        <Card className="w-[400px] relative">
          <CardHeader>
            <CardTitle>Card with Bottom-Right Menu</CardTitle>
            <CardDescription>
              Action menu positioned at bottom-right corner.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              This card has the action menu positioned absolutely at the
              bottom-right corner.
            </p>
          </CardContent>
          <CardActionMenu
            options={[
              { label: "Edit", onSelect: () => console.log("Edit clicked") },
              {
                label: "Delete",
                onSelect: () => console.log("Delete clicked"),
              },
            ]}
            useAbsolutePosition={true}
            absolutePosition="bottom-right"
          />
        </Card>
      </div>
    </div>
  ),
};

/**
 * Card with multiple action options and disabled states.
 * Shows advanced action menu capabilities.
 */
export const WithAdvancedActionMenu: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Card with advanced action menu showing multiple options, disabled states, and different action types.",
      },
    },
  },
  render: () => (
    <Card className="w-[400px] relative">
      <CardHeader>
        <CardTitle>Advanced Action Menu</CardTitle>
        <CardDescription>
          Demonstrates multiple actions with different states.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>This card shows an advanced action menu with:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Multiple action options</li>
          <li>Disabled states</li>
          <li>Different action types</li>
        </ul>
      </CardContent>
      <CardActionMenu
        options={[
          { label: "Edit", onSelect: () => console.log("Edit clicked") },
          {
            label: "Duplicate",
            onSelect: () => console.log("Duplicate clicked"),
          },
          { label: "Share", onSelect: () => console.log("Share clicked") },
          {
            label: "Archive",
            onSelect: () => console.log("Archive clicked"),
            disabled: true,
          },
          {
            label: "Delete",
            onSelect: () => console.log("Delete clicked"),
            disabled: true,
          },
        ]}
        useAbsolutePosition={true}
        absolutePosition="top-right"
      />
    </Card>
  ),
};

/**
 * SPECIALIZED CARDS
 * These stories demonstrate domain-specific card components
 */

/**
 * Carrier Details Card - Specialized card for transportation/logistics.
 * Shows complex data layout with action menu integration.
 */
export const CarrierDetailsCardExample: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Specialized card component for displaying carrier information in transportation/logistics applications. Features complex data layout with integrated action menu.",
      },
    },
  },
  render: () => (
    <CarrierDetailsCardComponent
      icon={Store}
      title="Details"
      carrierName="ABC Transport Inc."
      dotNumber="123456"
      scac="ABCT"
      mcNumber="789012"
      ediCommunication={true}
      actionOptions={[
        { label: "Edit", onSelect: () => console.log("Edit clicked") },
        {
          label: "Reason Codes",
          onSelect: () => console.log("Reason Codes clicked"),
        },
        {
          label: "Transmissions",
          onSelect: () => console.log("Transmissions clicked"),
        },
      ]}
    />
  ),
};

/**
 * LAYOUT PATTERNS
 * These stories demonstrate common card layout patterns
 */

/**
 * Multiple cards in a responsive grid layout.
 * Common pattern for dashboard and listing views.
 */
export const MultipleCardsLayout: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Responsive grid layout with multiple cards. Common pattern for dashboards, listing views, and content organization.",
      },
    },
  },
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Details</CardTitle>
          <CardDescription>Carrier information</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Name, DOT Number, SCAC, MC Number</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Rates</CardTitle>
          <CardDescription>Rate information</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Rate type and pricing details</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Location</CardTitle>
          <CardDescription>Address and contact info</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Address, phone, email, working hours</p>
        </CardContent>
      </Card>
    </div>
  ),
};

/**
 * Card with rich content including icons and structured data.
 * Demonstrates how to create visually rich cards.
 */
export const RichContent: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Card with rich content including icons, structured data, and visual elements. Shows how to create visually appealing cards.",
      },
    },
  },
  render: () => (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <User className="w-5 h-5" />
          User Profile
        </CardTitle>
        <CardDescription>Complete user information</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
            <User className="w-6 h-6 text-gray-600" />
          </div>
          <div>
            <h3 className="font-semibold">John Doe</h3>
            <p className="text-sm text-gray-600">Software Engineer</p>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-gray-500" />
            <span className="text-sm">john.doe@example.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-gray-500" />
            <span className="text-sm">+1 (555) 123-4567</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-gray-500" />
            <span className="text-sm">San Francisco, CA</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button variant="tertiary" className="flex-1">
          <Settings className="w-4 h-4 mr-2" />
          Settings
        </Button>
        <Button className="flex-1">Contact</Button>
      </CardFooter>
    </Card>
  ),
};
