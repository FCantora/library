/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import { Label } from "../label";
import { Switch } from "./switch";

const meta: Meta<typeof Switch> = {
  title: "Components/Switch",
  component: Switch,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
The Switch component provides a toggle control for binary states (on/off). 
Built on Radix UI primitives for full accessibility support.

## Key Features
- **Accessible**: Built with Radix UI primitives for full accessibility support
- **Multiple Sizes**: Support for small, medium, and large sizes
- **Keyboard Support**: Works with keyboard navigation and focus
- **Customizable**: Full control over styling and appearance
- **Form Integration**: Works seamlessly with form libraries

## Usage Patterns
- **Basic Switch**: Simple toggle control
- **Labeled Switch**: Switch with descriptive labels
- **Form Integration**: Switch within forms and settings
- **Size Variations**: Different sizes for different contexts
- **Real-world Settings**: Common settings and preference patterns
        `,
      },
    },
  },
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * BASIC SWITCH PATTERNS
 * These stories demonstrate fundamental switch component usage
 */

/**
 * Default switch in off state.
 * Use this as the standard switch pattern for simple toggle controls.
 */
export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Standard switch component in off state. Perfect for simple toggle controls and binary state management.",
      },
    },
  },
  render: () => <Switch />,
};

/**
 * Switch in on state.
 * Shows the switch when it's toggled on.
 */
export const Checked: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Switch in on state. Shows the switch when it's toggled on and demonstrates the active state appearance.",
      },
    },
  },
  render: () => <Switch defaultChecked />,
};

/**
 * Disabled switch.
 * Shows the disabled state of the switch component.
 */
export const Disabled: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Disabled switch. Shows the disabled state of the switch component when user interaction is not allowed.",
      },
    },
  },
  render: () => (
    <div className="flex gap-4">
      <Switch disabled />
      <Switch disabled defaultChecked />
    </div>
  ),
};

/**
 * SWITCH SIZING PATTERNS
 * These stories demonstrate different size options
 */

/**
 * Different size configurations.
 * Demonstrates various size options for different use cases.
 */
export const DifferentSizes: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Different size configurations. Demonstrates various size options for different use cases and interface contexts.",
      },
    },
  },
  render: () => (
    <div className="flex items-center gap-6">
      <div className="flex flex-col items-center gap-2">
        <Label className="text-sm">Small</Label>
        <Switch size="small" />
      </div>
      <div className="flex flex-col items-center gap-2">
        <Label className="text-sm">Medium</Label>
        <Switch size="medium" />
      </div>
      <div className="flex flex-col items-center gap-2">
        <Label className="text-sm">Large</Label>
        <Switch size="large" />
      </div>
    </div>
  ),
};

/**
 * LABELED SWITCH PATTERNS
 * These stories demonstrate switches with labels and descriptions
 */

/**
 * Switch with label.
 * Common pattern for switches with descriptive labels.
 */
export const WithLabel: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Switch with label. Common pattern for switches with descriptive labels and better accessibility.",
      },
    },
  },
  render: () => (
    <div className="flex items-center gap-3">
      <Switch id="switch-with-label" />
      <Label htmlFor="switch-with-label">Enable notifications</Label>
    </div>
  ),
};

/**
 * Switch with description.
 * Common pattern for switches with additional context.
 */
export const WithDescription: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Switch with description. Common pattern for switches with additional context and detailed explanations.",
      },
    },
  },
  render: () => (
    <div className="space-y-2">
      <div className="flex items-center gap-3">
        <Switch id="switch-description" />
        <Label htmlFor="switch-description">Dark mode</Label>
      </div>
      <p className="text-sm text-gray-500 ml-12">
        Switch between light and dark themes
      </p>
    </div>
  ),
};

/**
 * REAL-WORLD USAGE PATTERNS
 * These stories demonstrate common real-world switch implementations
 */

/**
 * Settings panel switches.
 * Common pattern for settings panels and preference controls.
 */
export const SettingsPanel: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Settings panel switches. Common pattern for settings panels, preference controls, and configuration interfaces.",
      },
    },
  },
  render: () => {
    const [notifications, setNotifications] = useState(true);
    const [darkMode, setDarkMode] = useState(false);
    const [autoSave, setAutoSave] = useState(true);

    return (
      <div className="w-full max-w-md space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <Label htmlFor="notifications" className="text-sm font-medium">
              Push Notifications
            </Label>
            <p className="text-xs text-gray-500">
              Receive notifications for important updates
            </p>
          </div>
          <Switch
            id="notifications"
            checked={notifications}
            onCheckedChange={setNotifications}
          />
        </div>

        <div className="flex items-center justify-between">
          <div>
            <Label htmlFor="dark-mode" className="text-sm font-medium">
              Dark Mode
            </Label>
            <p className="text-xs text-gray-500">
              Switch between light and dark themes
            </p>
          </div>
          <Switch
            id="dark-mode"
            checked={darkMode}
            onCheckedChange={setDarkMode}
          />
        </div>

        <div className="flex items-center justify-between">
          <div>
            <Label htmlFor="auto-save" className="text-sm font-medium">
              Auto Save
            </Label>
            <p className="text-xs text-gray-500">
              Automatically save changes as you work
            </p>
          </div>
          <Switch
            id="auto-save"
            checked={autoSave}
            onCheckedChange={setAutoSave}
          />
        </div>
      </div>
    );
  },
};

/**
 * Form switches.
 * Common pattern for switches within forms and data collection.
 */
export const FormSwitches: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Form switches. Common pattern for switches within forms, data collection interfaces, and user preferences.",
      },
    },
  },
  render: () => {
    const [emailUpdates, setEmailUpdates] = useState(false);
    const [smsUpdates, setSmsUpdates] = useState(true);
    const [marketing, setMarketing] = useState(false);

    return (
      <div className="w-full max-w-md space-y-6">
        <div className="space-y-3">
          <h3 className="text-sm font-medium">Communication Preferences</h3>

          <div className="flex items-center justify-between">
            <Label htmlFor="email-updates" className="text-sm">
              Email Updates
            </Label>
            <Switch
              id="email-updates"
              checked={emailUpdates}
              onCheckedChange={setEmailUpdates}
            />
          </div>

          <div className="flex items-center justify-between">
            <Label htmlFor="sms-updates" className="text-sm">
              SMS Updates
            </Label>
            <Switch
              id="sms-updates"
              checked={smsUpdates}
              onCheckedChange={setSmsUpdates}
            />
          </div>

          <div className="flex items-center justify-between">
            <Label htmlFor="marketing" className="text-sm">
              Marketing Communications
            </Label>
            <Switch
              id="marketing"
              checked={marketing}
              onCheckedChange={setMarketing}
            />
          </div>
        </div>
      </div>
    );
  },
};

/**
 * Feature toggles.
 * Common pattern for feature flags and experimental features.
 */
export const FeatureToggles: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Feature toggles. Common pattern for feature flags, experimental features, and beta functionality controls.",
      },
    },
  },
  render: () => {
    const [betaFeatures, setBetaFeatures] = useState(false);
    const [analytics, setAnalytics] = useState(true);
    const [experimental, setExperimental] = useState(false);

    return (
      <div className="w-full max-w-md space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <Label htmlFor="beta-features" className="text-sm font-medium">
              Beta Features
            </Label>
            <p className="text-xs text-gray-500">
              Enable access to experimental features
            </p>
          </div>
          <Switch
            id="beta-features"
            checked={betaFeatures}
            onCheckedChange={setBetaFeatures}
          />
        </div>

        <div className="flex items-center justify-between">
          <div>
            <Label htmlFor="analytics" className="text-sm font-medium">
              Usage Analytics
            </Label>
            <p className="text-xs text-gray-500">
              Help us improve by sharing usage data
            </p>
          </div>
          <Switch
            id="analytics"
            checked={analytics}
            onCheckedChange={setAnalytics}
          />
        </div>

        <div className="flex items-center justify-between">
          <div>
            <Label htmlFor="experimental" className="text-sm font-medium">
              Experimental UI
            </Label>
            <p className="text-xs text-gray-500">
              Try out new interface designs
            </p>
          </div>
          <Switch
            id="experimental"
            checked={experimental}
            onCheckedChange={setExperimental}
          />
        </div>
      </div>
    );
  },
};

/**
 * Privacy settings.
 * Common pattern for privacy controls and data sharing preferences.
 */
export const PrivacySettings: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Privacy settings. Common pattern for privacy controls, data sharing preferences, and user consent management.",
      },
    },
  },
  render: () => {
    const [profilePublic, setProfilePublic] = useState(true);
    const [dataSharing, setDataSharing] = useState(false);
    const [locationTracking, setLocationTracking] = useState(false);

    return (
      <div className="w-full max-w-md space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <Label htmlFor="profile-public" className="text-sm font-medium">
              Public Profile
            </Label>
            <p className="text-xs text-gray-500">
              Make your profile visible to other users
            </p>
          </div>
          <Switch
            id="profile-public"
            checked={profilePublic}
            onCheckedChange={setProfilePublic}
          />
        </div>

        <div className="flex items-center justify-between">
          <div>
            <Label htmlFor="data-sharing" className="text-sm font-medium">
              Data Sharing
            </Label>
            <p className="text-xs text-gray-500">
              Allow sharing of anonymized usage data
            </p>
          </div>
          <Switch
            id="data-sharing"
            checked={dataSharing}
            onCheckedChange={setDataSharing}
          />
        </div>

        <div className="flex items-center justify-between">
          <div>
            <Label htmlFor="location-tracking" className="text-sm font-medium">
              Location Tracking
            </Label>
            <p className="text-xs text-gray-500">
              Enable location-based features
            </p>
          </div>
          <Switch
            id="location-tracking"
            checked={locationTracking}
            onCheckedChange={setLocationTracking}
          />
        </div>
      </div>
    );
  },
};

/**
 * ADVANCED SWITCH PATTERNS
 * These stories demonstrate advanced switch implementations
 */

/**
 * Switch with custom styling.
 * Demonstrates different styling options and customization.
 */
export const CustomStyling: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Switch with custom styling. Demonstrates different styling options, customization patterns, and visual variations.",
      },
    },
  },
  render: () => (
    <div className="flex items-center gap-6">
      <div className="flex flex-col items-center gap-2">
        <Label className="text-sm">Default</Label>
        <Switch />
      </div>

      <div className="flex flex-col items-center gap-2">
        <Label className="text-sm">Custom Colors</Label>
        <Switch className="data-[state=checked]:bg-green-500" />
      </div>

      <div className="flex flex-col items-center gap-2">
        <Label className="text-sm">Large Size</Label>
        <Switch size="large" />
      </div>
    </div>
  ),
};

/**
 * Interactive switch demo.
 * Demonstrates switch behavior with state management.
 */
export const InteractiveDemo: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Interactive switch demo. Demonstrates switch behavior with state management and real-time updates.",
      },
    },
  },
  render: () => {
    const [isEnabled, setIsEnabled] = useState(false);

    return (
      <div className="w-full max-w-md space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <Label htmlFor="interactive-switch" className="text-sm font-medium">
              Enable Feature
            </Label>
            <p className="text-xs text-gray-500">
              Current state: {isEnabled ? "Enabled" : "Disabled"}
            </p>
          </div>
          <Switch
            id="interactive-switch"
            checked={isEnabled}
            onCheckedChange={setIsEnabled}
          />
        </div>

        {isEnabled && (
          <div className="p-3 bg-green-50 border border-green-200 rounded-md">
            <p className="text-sm text-green-700">
              Feature is now enabled! You can configure additional settings
              below.
            </p>
          </div>
        )}
      </div>
    );
  },
};
