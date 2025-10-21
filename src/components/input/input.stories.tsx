import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Search, Mail, Lock, User } from "lucide-react";

import { Input } from "./input";
import { Label } from "../label";
import { Button } from "../button";

const meta = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["text", "email", "password", "number", "search", "tel", "url"],
      description: "HTML input type attribute",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text",
    },
    disabled: {
      control: "boolean",
      description: "Disables input interaction",
    },
    defaultValue: {
      control: "text",
      description: "Default value (uncontrolled)",
    },
    value: {
      table: { disable: true },
    },
    onChange: {
      table: { disable: true },
    },
  },
  parameters: {
    layout: "centered",
    controls: { expanded: true },
    docs: {
      description: {
        component:
          "Flexible input component supporting all HTML input types. Styled for dark theme with focus states and validation support.",
      },
    },
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    type: "text",
    placeholder: "Enter text...",
    disabled: false,
  },
  parameters: {
    docs: {
      description: {
        story: "Use the controls to explore different input options.",
      },
    },
  },
};

const InteractiveExample = () => {
  const [value, setValue] = useState("");
  return (
    <div className="flex flex-col gap-2 w-64">
      <Input
        placeholder="Type something..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <p className="text-sm">
        Characters: <span className="text-primary font-semibold">{value.length}</span>
      </p>
      <Button variant="secondary" size="small" onClick={() => setValue("")}>
        Clear
      </Button>
    </div>
  );
};

export const Interactive: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Input example with onChange event handling. The character count updates as you type.",
      },
    },
  },
  render: () => <InteractiveExample />,
};

export const Types: Story = {
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story:
          "Common input types: text, email, password, number, search, tel, and date.",
      },
    },
  },
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <div className="flex flex-col gap-2">
        <Label htmlFor="text-input">Text</Label>
        <Input id="text-input" type="text" placeholder="Enter text" />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="email-input">Email</Label>
        <Input id="email-input" type="email" placeholder="user@example.com" />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="password-input">Password</Label>
        <Input id="password-input" type="password" placeholder="••••••••" />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="number-input">Number</Label>
        <Input id="number-input" type="number" placeholder="123" />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="search-input">Search</Label>
        <Input id="search-input" type="search" placeholder="Search..." />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="tel-input">Telephone</Label>
        <Input id="tel-input" type="tel" placeholder="+1 (555) 123-4567" />
      </div>
    </div>
  ),
};

export const States: Story = {
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story:
          "Input states: default, with value, focused (click to focus), and disabled.",
      },
    },
  },
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <div className="flex flex-col gap-2">
        <Label>Default (Empty)</Label>
        <Input placeholder="Empty input" />
      </div>
      <div className="flex flex-col gap-2">
        <Label>With Value</Label>
        <Input defaultValue="Sample text" />
      </div>
      <div className="flex flex-col gap-2">
        <Label>Focused (click to focus)</Label>
        <Input placeholder="Click to see focus state" />
      </div>
      <div className="flex flex-col gap-2">
        <Label>Disabled</Label>
        <Input placeholder="Disabled input" disabled />
      </div>
      <div className="flex flex-col gap-2">
        <Label>Disabled with Value</Label>
        <Input defaultValue="Read-only content" disabled />
      </div>
    </div>
  ),
};

export const WithIcons: Story = {
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story:
          "Inputs with icons using absolute positioning. Common pattern for search, email, and password fields.",
      },
    },
  },
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <div className="flex flex-col gap-2">
        <Label htmlFor="search-icon">Search with Icon</Label>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
          <Input
            id="search-icon"
            type="search"
            placeholder="Search..."
            className="pl-10"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="email-icon">Email with Icon</Label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
          <Input
            id="email-icon"
            type="email"
            placeholder="email@example.com"
            className="pl-10"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="password-icon">Password with Icon</Label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
          <Input
            id="password-icon"
            type="password"
            placeholder="••••••••"
            className="pl-10"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="user-icon">Username with Icon</Label>
        <div className="relative">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
          <Input
            id="user-icon"
            type="text"
            placeholder="Username"
            className="pl-10"
          />
        </div>
      </div>
    </div>
  ),
};

export const WithPrefix: Story = {
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story:
          "Inputs with text prefixes for currency, URLs, or other formatted values.",
      },
    },
  },
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <div className="flex flex-col gap-2">
        <Label htmlFor="url-prefix">Website</Label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-neutral-400">
            https://
          </span>
          <Input
            id="url-prefix"
            type="text"
            placeholder="example.com"
            className="pl-20"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="phone-prefix">Phone</Label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-neutral-400">
            +1
          </span>
          <Input
            id="phone-prefix"
            type="tel"
            placeholder="(555) 123-4567"
            className="pl-10"
          />
        </div>
      </div>
    </div>
  ),
};

export const Validation: Story = {
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story:
          "Input validation states with error messages.",
      },
    },
  },
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <div className="flex flex-col gap-2">
        <Label htmlFor="valid-input">Valid Input</Label>
        <Input
          id="valid-input"
          type="email"
          defaultValue="user@example.com"
          className="border-success"
        />
        <p className="text-sm text-success">✓ Valid email address</p>
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="invalid-input">Invalid Input</Label>
        <Input
          id="invalid-input"
          type="email"
          defaultValue="invalid-email"
          className="border-error"
        />
        <p className="text-sm text-error">⚠ Please enter a valid email address</p>
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="required-input">Required Field</Label>
        <Input
          id="required-input"
          type="text"
          placeholder="This field is required"
          className="border-error"
        />
        <p className="text-sm text-error">⚠ This field is required</p>
      </div>
    </div>
  ),
};

const ControlledExample = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2000);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-80">
      <div className="flex flex-col gap-2">
        <Label htmlFor="ctrl-email">Email</Label>
        <Input
          id="ctrl-email"
          type="email"
          placeholder="user@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="ctrl-password">Password</Label>
        <Input
          id="ctrl-password"
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <Button type="submit" disabled={submitted}>
        {submitted ? "Submitted!" : "Submit"}
      </Button>
      {(email || password) && (
        <div className="text-sm">
          <p>Email: {email || "(empty)"}</p>
          <p>Password: {password ? "••••••••" : "(empty)"}</p>
        </div>
      )}
    </form>
  );
};

export const Controlled: Story = {
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story:
          "Example of controlled inputs in a form. State is managed externally with React hooks.",
      },
    },
  },
  render: () => <ControlledExample />,
};

export const UseCases: Story = {
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story:
          "Common use case examples: login form, contact form, and search with filters.",
      },
    },
  },
  render: () => (
    <div className="flex flex-col gap-6 w-80">
      <div>
        <p className="text-lg font-semibold mb-3">Login Form</p>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <Label htmlFor="login-email">Email</Label>
            <Input
              id="login-email"
              type="email"
              placeholder="user@example.com"
              autoComplete="email"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="login-password">Password</Label>
            <Input
              id="login-password"
              type="password"
              placeholder="••••••••"
              autoComplete="current-password"
            />
          </div>
          <Button>Sign In</Button>
        </div>
      </div>

      <div>
        <p className="text-lg font-semibold mb-3">Contact Information</p>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <Label htmlFor="contact-name">Full Name</Label>
            <Input
              id="contact-name"
              type="text"
              placeholder="John Doe"
              autoComplete="name"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="contact-phone">Phone Number</Label>
            <Input
              id="contact-phone"
              type="tel"
              placeholder="+1 (555) 123-4567"
              autoComplete="tel"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="contact-company">Company</Label>
            <Input
              id="contact-company"
              type="text"
              placeholder="Acme Inc."
              autoComplete="organization"
            />
          </div>
        </div>
      </div>
    </div>
  ),
};
