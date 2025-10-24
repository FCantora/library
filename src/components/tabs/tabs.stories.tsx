import type { Meta, StoryObj } from "@storybook/react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
The Tabs component provides a flexible and accessible tabbed interface built on Radix UI primitives. 
It supports various tab layouts, content organization, and navigation patterns.

## Key Features
- **Accessible**: Built with Radix UI primitives for full accessibility support
- **Flexible Layout**: Support for different numbers of tabs and content types
- **Navigation Integration**: Works seamlessly with routing and navigation
- **Customizable**: Full control over styling and behavior
- **Keyboard Navigation**: Complete keyboard support and navigation

## Usage Patterns
- **Basic Tabs**: Simple tabbed interface with content
- **Navigation Tabs**: Tabs that integrate with routing
- **Content Organization**: Organizing related content into sections
- **Form Tabs**: Breaking complex forms into manageable sections
- **Data Display**: Showing different views of the same data
        `,
      },
    },
  },
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * BASIC TAB PATTERNS
 * These stories demonstrate fundamental tab component usage
 */

/**
 * Default tabs with basic content.
 * Use this as the standard tab pattern for simple content organization.
 */
export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Standard tabs component with basic content. Perfect for simple content organization and navigation between related sections.",
      },
    },
  },
  render: () => (
    <Tabs defaultValue="tab1">
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">Content for Tab 1</TabsContent>
      <TabsContent value="tab2">Content for Tab 2</TabsContent>
      <TabsContent value="tab3">Content for Tab 3</TabsContent>
    </Tabs>
  ),
};

/**
 * Tabs with two options.
 * Perfect for binary choices or simple two-section layouts.
 */
export const TwoTabs: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Tabs with two options. Ideal for binary choices, simple two-section layouts, or toggle between two states.",
      },
    },
  },
  render: () => (
    <Tabs defaultValue="details">
      <TabsList>
        <TabsTrigger value="details">Details</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="details">Details content goes here</TabsContent>
      <TabsContent value="settings">Settings content goes here</TabsContent>
    </Tabs>
  ),
};

/**
 * Tabs with four options.
 * Good for organizing content into multiple related sections.
 */
export const FourTabs: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Tabs with four options. Great for organizing content into multiple related sections or comprehensive data views.",
      },
    },
  },
  render: () => (
    <Tabs defaultValue="overview">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="details">Details</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
        <TabsTrigger value="advanced">Advanced</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">Overview content</TabsContent>
      <TabsContent value="details">Details content</TabsContent>
      <TabsContent value="settings">Settings content</TabsContent>
      <TabsContent value="advanced">Advanced content</TabsContent>
    </Tabs>
  ),
};

/**
 * ADVANCED TAB FEATURES
 * These stories demonstrate advanced tab capabilities
 */

/**
 * Tabs with disabled options.
 * Perfect for showing unavailable sections while keeping them visible.
 */
export const WithDisabledTab: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Tabs with disabled options. Ideal for showing unavailable sections while keeping them visible for context or future use.",
      },
    },
  },
  render: () => (
    <Tabs defaultValue="available">
      <TabsList>
        <TabsTrigger value="available">Available</TabsTrigger>
        <TabsTrigger value="disabled" disabled>
          Disabled
        </TabsTrigger>
        <TabsTrigger value="another">Another</TabsTrigger>
      </TabsList>
      <TabsContent value="available">
        This tab is available and clickable
      </TabsContent>
      <TabsContent value="disabled">
        This tab is disabled and cannot be clicked
      </TabsContent>
      <TabsContent value="another">This is another available tab</TabsContent>
    </Tabs>
  ),
};

/**
 * Tabs with long content that requires scrolling.
 * Demonstrates how tabs handle content overflow.
 */
export const WithScrollableContent: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Tabs with long content that requires scrolling. Demonstrates how tabs handle content overflow and maintain usability.",
      },
    },
  },
  render: () => (
    <Tabs defaultValue="short">
      <TabsList>
        <TabsTrigger value="short">Short Content</TabsTrigger>
        <TabsTrigger value="long">Long Content</TabsTrigger>
        <TabsTrigger value="very-long">Very Long Content</TabsTrigger>
      </TabsList>
      <TabsContent value="short">
        <div>
          <h3>Short Content</h3>
          <p>This tab has minimal content.</p>
        </div>
      </TabsContent>
      <TabsContent value="long">
        <div>
          <h3>Long Content</h3>
          <p>This tab contains more detailed information.</p>
          <p>It includes multiple paragraphs and sections.</p>
          <p>Perfect for displaying comprehensive data.</p>
          <p>Users can scroll through the content if needed.</p>
        </div>
      </TabsContent>
      <TabsContent value="very-long">
        <div>
          <h3>Very Long Content</h3>
          <p>This tab contains extensive information.</p>
          <p>It includes detailed descriptions and data.</p>
          <p>Multiple sections with various content types.</p>
          <p>Tables, lists, and formatted text.</p>
          <p>Perfect for complex data visualization.</p>
          <p>Scrollable content area for better UX.</p>
          <p>Responsive design for different screen sizes.</p>
          <p>Accessible markup for screen readers.</p>
        </div>
      </TabsContent>
    </Tabs>
  ),
};

/**
 * REAL-WORLD USAGE PATTERNS
 * These stories demonstrate common real-world tab implementations
 */

/**
 * Dashboard tabs for organizing different data views.
 * Common pattern for admin panels and data dashboards.
 */
export const DashboardTabs: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Dashboard tabs for organizing different data views. Common pattern for admin panels, data dashboards, and analytics interfaces.",
      },
    },
  },
  render: () => (
    <Tabs defaultValue="overview">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
        <TabsTrigger value="reports">Reports</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <div>
          <h3>Dashboard Overview</h3>
          <p>Key metrics and summary information</p>
        </div>
      </TabsContent>
      <TabsContent value="analytics">
        <div>
          <h3>Analytics</h3>
          <p>Detailed analytics and performance data</p>
        </div>
      </TabsContent>
      <TabsContent value="reports">
        <div>
          <h3>Reports</h3>
          <p>Generated reports and documentation</p>
        </div>
      </TabsContent>
      <TabsContent value="settings">
        <div>
          <h3>Settings</h3>
          <p>Configuration and preferences</p>
        </div>
      </TabsContent>
    </Tabs>
  ),
};

/**
 * Form tabs for organizing complex forms into sections.
 * Common pattern for multi-step forms and complex data entry.
 */
export const FormTabs: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Form tabs for organizing complex forms into sections. Common pattern for multi-step forms, complex data entry, and wizard interfaces.",
      },
    },
  },
  render: () => (
    <Tabs defaultValue="personal">
      <TabsList>
        <TabsTrigger value="personal">Personal Info</TabsTrigger>
        <TabsTrigger value="contact">Contact</TabsTrigger>
        <TabsTrigger value="preferences">Preferences</TabsTrigger>
      </TabsList>
      <TabsContent value="personal">
        <div>
          <h3>Personal Information</h3>
          <p>Name, age, and personal details</p>
        </div>
      </TabsContent>
      <TabsContent value="contact">
        <div>
          <h3>Contact Information</h3>
          <p>Email, phone, and address details</p>
        </div>
      </TabsContent>
      <TabsContent value="preferences">
        <div>
          <h3>Preferences</h3>
          <p>Settings and notification preferences</p>
        </div>
      </TabsContent>
    </Tabs>
  ),
};

/**
 * Content organization tabs for related information.
 * Common pattern for organizing related content and documentation.
 */
export const ContentOrganization: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Content organization tabs for related information. Common pattern for organizing related content, documentation, and information architecture.",
      },
    },
  },
  render: () => (
    <Tabs defaultValue="description">
      <TabsList>
        <TabsTrigger value="description">Description</TabsTrigger>
        <TabsTrigger value="specifications">Specifications</TabsTrigger>
        <TabsTrigger value="reviews">Reviews</TabsTrigger>
        <TabsTrigger value="support">Support</TabsTrigger>
      </TabsList>
      <TabsContent value="description">
        <div>
          <h3>Product Description</h3>
          <p>Detailed product information and features</p>
        </div>
      </TabsContent>
      <TabsContent value="specifications">
        <div>
          <h3>Technical Specifications</h3>
          <p>Technical details and specifications</p>
        </div>
      </TabsContent>
      <TabsContent value="reviews">
        <div>
          <h3>Customer Reviews</h3>
          <p>User feedback and ratings</p>
        </div>
      </TabsContent>
      <TabsContent value="support">
        <div>
          <h3>Support Information</h3>
          <p>Help documentation and contact information</p>
        </div>
      </TabsContent>
    </Tabs>
  ),
};

/**
 * Navigation tabs with event handling.
 * Demonstrates how tabs can integrate with navigation and routing.
 */
export const NavigationTabs: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Navigation tabs with event handling. Demonstrates how tabs can integrate with navigation, routing, and state management.",
      },
    },
  },
  render: () => (
    <Tabs
      defaultValue="home"
      onValueChange={(value) => console.log(`Navigating to: ${value}`)}
    >
      <TabsList>
        <TabsTrigger value="home">Home</TabsTrigger>
        <TabsTrigger value="about">About</TabsTrigger>
        <TabsTrigger value="contact">Contact</TabsTrigger>
      </TabsList>
      <TabsContent value="home">
        <div>
          <h3>Home</h3>
          <p>Welcome to the home page</p>
          <p>Check console for navigation events</p>
        </div>
      </TabsContent>
      <TabsContent value="about">
        <div>
          <h3>About</h3>
          <p>Learn more about our company</p>
          <p>Check console for navigation events</p>
        </div>
      </TabsContent>
      <TabsContent value="contact">
        <div>
          <h3>Contact</h3>
          <p>Get in touch with us</p>
          <p>Check console for navigation events</p>
        </div>
      </TabsContent>
    </Tabs>
  ),
};
