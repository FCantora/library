/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";

import { Label } from "../label";
import { Textarea } from "./textarea";

const meta: Meta<typeof Textarea> = {
  title: "Components/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
The Textarea component provides a flexible and accessible multi-line text input field. 
Built with proper styling and accessibility features for form inputs.

## Key Features
- **Accessible**: Proper ARIA attributes and keyboard navigation support
- **Flexible Sizing**: Support for custom heights and responsive sizing
- **Form Integration**: Works seamlessly with form libraries and validation
- **Customizable**: Full control over styling and appearance
- **Character Limits**: Built-in support for character counting and limits

## Usage Patterns
- **Basic Textarea**: Simple multi-line text input
- **Form Integration**: Textarea within forms with validation
- **Character Counting**: Textarea with character limits and counters
- **Custom Sizing**: Different height and width configurations
- **Real-world Forms**: Common form patterns and use cases
        `,
      },
    },
  },
} satisfies Meta<typeof Textarea>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * BASIC TEXTAREA PATTERNS
 * These stories demonstrate fundamental textarea component usage
 */

/**
 * Default textarea with basic placeholder.
 * Use this as the standard textarea pattern for simple multi-line text input.
 */
export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Standard textarea component with basic placeholder. Perfect for simple multi-line text input and basic form fields.",
      },
    },
  },
  render: () => (
    <div className="w-full max-w-md">
      <Textarea placeholder="Type something..." />
    </div>
  ),
};

/**
 * Textarea with label.
 * Common pattern for form fields with proper labeling.
 */
export const WithLabel: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Textarea with label. Common pattern for form fields with proper labeling and accessibility support.",
      },
    },
  },
  render: () => (
    <div className="w-full max-w-md space-y-2">
      <Label htmlFor="textarea-with-label">Description</Label>
      <Textarea id="textarea-with-label" placeholder="Enter description..." />
    </div>
  ),
};

/**
 * Textarea with pre-filled value.
 * Shows how the textarea looks with existing content.
 */
export const WithValue: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Textarea with pre-filled value. Shows how the textarea looks with existing content and demonstrates the component's appearance with text.",
      },
    },
  },
  render: () => (
    <div className="w-full max-w-md">
      <Textarea
        placeholder="Enter text..."
        defaultValue="This is a pre-filled textarea with some content that demonstrates how it looks when there's existing text. It shows the component's appearance with longer text content."
      />
    </div>
  ),
};

/**
 * Disabled textarea.
 * Shows the disabled state of the textarea component.
 */
export const Disabled: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Disabled textarea. Shows the disabled state of the textarea component when user interaction is not allowed.",
      },
    },
  },
  render: () => (
    <div className="w-full max-w-md">
      <Textarea placeholder="This textarea is disabled" disabled />
    </div>
  ),
};

/**
 * TEXTAREA SIZING PATTERNS
 * These stories demonstrate different sizing options
 */

/**
 * Different height configurations.
 * Demonstrates various height options for different use cases.
 */
export const DifferentHeights: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Different height configurations. Demonstrates various height options for different use cases and content requirements.",
      },
    },
  },
  render: () => (
    <div className="w-full max-w-md space-y-4">
      <div>
        <Label className="text-sm mb-2 block">Small Height</Label>
        <Textarea
          className="h-20"
          placeholder="Small textarea for short content"
        />
      </div>
      <div>
        <Label className="text-sm mb-2 block">Medium Height</Label>
        <Textarea
          className="h-32"
          placeholder="Medium textarea for moderate content"
        />
      </div>
      <div>
        <Label className="text-sm mb-2 block">Large Height</Label>
        <Textarea
          className="h-48"
          placeholder="Large textarea for extensive content"
        />
      </div>
    </div>
  ),
};

/**
 * Responsive textarea sizing.
 * Demonstrates how textarea adapts to different container sizes.
 */
export const ResponsiveSizing: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Responsive textarea sizing. Demonstrates how textarea adapts to different container sizes and responsive design patterns.",
      },
    },
  },
  render: () => (
    <div className="w-full max-w-2xl space-y-4">
      <div>
        <Label className="text-sm mb-2 block">Full Width</Label>
        <Textarea
          placeholder="This textarea adapts to container width"
          className="w-full"
        />
      </div>
      <div>
        <Label className="text-sm mb-2 block">Fixed Width</Label>
        <Textarea placeholder="Fixed width textarea" className="w-80" />
      </div>
    </div>
  ),
};

/**
 * CHARACTER COUNTING PATTERNS
 * These stories demonstrate character counting and limits
 */

/**
 * Textarea with character counter.
 * Common pattern for forms with character limits.
 */
export const WithCharacterCounter: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Textarea with character counter. Common pattern for forms with character limits and user feedback on content length.",
      },
    },
  },
  render: () => {
    const [text, setText] = useState("");
    const MAX_CHARS = 500;

    return (
      <div className="w-full max-w-md space-y-2">
        <Label htmlFor="textarea-counter">Description</Label>
        <Textarea
          id="textarea-counter"
          placeholder="Add a description..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          maxLength={MAX_CHARS}
        />
        <div className="flex justify-end">
          <p className="text-xs text-gray-500">
            {text.length}/{MAX_CHARS}
          </p>
        </div>
      </div>
    );
  },
};

/**
 * Character counter with warning.
 * Shows warning when approaching character limit.
 */
export const CharacterCounterWithWarning: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Character counter with warning. Shows warning when approaching character limit and provides visual feedback to users.",
      },
    },
  },
  render: () => {
    const [text, setText] = useState("");
    const MAX_CHARS = 500;

    const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const value = e.target.value.slice(0, MAX_CHARS);
      setText(value);
    };

    return (
      <div className="w-full max-w-md space-y-2">
        <Label htmlFor="textarea-warning">Description</Label>
        <Textarea
          id="textarea-warning"
          placeholder="Add a description..."
          value={text}
          onChange={handleTextChange}
          maxLength={MAX_CHARS}
        />
        <div className="flex justify-end">
          <p
            className={`text-xs font-medium ${
              text.length > MAX_CHARS * 0.9 ? "text-red-500" : "text-gray-500"
            }`}
          >
            {text.length}/{MAX_CHARS}
          </p>
        </div>
        {text.length > MAX_CHARS * 0.95 && (
          <p className="text-sm text-red-500">
            Description is approaching character limit
          </p>
        )}
      </div>
    );
  },
};

/**
 * REAL-WORLD USAGE PATTERNS
 * These stories demonstrate common real-world textarea implementations
 */

/**
 * Contact form description.
 * Common pattern for contact forms and feedback forms.
 */
export const ContactFormDescription: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Contact form description. Common pattern for contact forms, feedback forms, and user message input fields.",
      },
    },
  },
  render: () => {
    const [description, setDescription] = useState("");
    const MAX_CHARS = 500;

    const handleDescriptionChange = (
      e: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
      const value = e.target.value.slice(0, MAX_CHARS);
      setDescription(value);
    };

    return (
      <div className="w-full max-w-md space-y-2">
        <Label htmlFor="contact-description">Message</Label>
        <Textarea
          id="contact-description"
          placeholder="Tell us about your inquiry..."
          value={description}
          onChange={handleDescriptionChange}
          maxLength={MAX_CHARS}
          className="h-32"
        />
        <div className="flex justify-end">
          <p className="text-xs text-gray-500">
            {description.length}/{MAX_CHARS}
          </p>
        </div>
      </div>
    );
  },
};

/**
 * Note-taking textarea.
 * Common pattern for note-taking applications and comment systems.
 */
export const NoteTaking: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Note-taking textarea. Common pattern for note-taking applications, comment systems, and content creation interfaces.",
      },
    },
  },
  render: () => {
    const [note, setNote] = useState("");
    const MAX_CHARS = 1000;

    return (
      <div className="w-full max-w-md space-y-2">
        <Label htmlFor="note-textarea">Add Note</Label>
        <Textarea
          id="note-textarea"
          placeholder="Write your note here..."
          className="h-48"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          maxLength={MAX_CHARS}
        />
        <div className="flex justify-end">
          <p className="text-xs text-gray-500">
            {note.length}/{MAX_CHARS}
          </p>
        </div>
        {note.length > MAX_CHARS && (
          <p className="text-sm text-red-500">
            Note exceeds maximum character limit
          </p>
        )}
      </div>
    );
  },
};

/**
 * Form validation example.
 * Demonstrates textarea with validation and error handling.
 */
export const FormValidation: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Form validation example. Demonstrates textarea with validation, error handling, and user feedback patterns.",
      },
    },
  },
  render: () => {
    const [text, setText] = useState("");
    const [error, setError] = useState("");
    const MAX_CHARS = 500;

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const value = e.target.value;
      setText(value);

      if (value.length > MAX_CHARS) {
        setError("Text exceeds maximum character limit");
      } else if (value.length < 10) {
        setError("Description must be at least 10 characters");
      } else {
        setError("");
      }
    };

    return (
      <div className="w-full max-w-md space-y-2">
        <Label htmlFor="form-textarea">Description *</Label>
        <Textarea
          id="form-textarea"
          placeholder="Enter description (minimum 10 characters)"
          value={text}
          onChange={handleChange}
          maxLength={MAX_CHARS}
          className={error ? "border-red-500" : ""}
        />
        <div className="flex justify-between">
          <div>{error && <p className="text-sm text-red-500">{error}</p>}</div>
          <p className="text-xs text-gray-500">
            {text.length}/{MAX_CHARS}
          </p>
        </div>
      </div>
    );
  },
};

/**
 * Multiple textareas in form.
 * Common pattern for forms with multiple textarea fields.
 */
export const MultipleTextareas: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Multiple textareas in form. Common pattern for forms with multiple textarea fields and different purposes.",
      },
    },
  },
  render: () => {
    const [workingHours, setWorkingHours] = useState("");
    const [description, setDescription] = useState("");
    const MAX_CHARS = 500;

    return (
      <div className="w-full max-w-md space-y-6">
        <div className="space-y-2">
          <Label htmlFor="working-hours">Working Hours</Label>
          <Textarea
            id="working-hours"
            placeholder="e.g., Monday-Friday 9AM-5PM"
            value={workingHours}
            onChange={(e) => setWorkingHours(e.target.value)}
            maxLength={MAX_CHARS}
          />
          <div className="flex justify-end">
            <p className="text-xs text-gray-500">
              {workingHours.length}/{MAX_CHARS}
            </p>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            placeholder="Additional information..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            maxLength={MAX_CHARS}
            className="h-32"
          />
          <div className="flex justify-end">
            <p className="text-xs text-gray-500">
              {description.length}/{MAX_CHARS}
            </p>
          </div>
        </div>
      </div>
    );
  },
};

/**
 * Custom styling examples.
 * Demonstrates different styling options and customization.
 */
export const CustomStyling: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Custom styling examples. Demonstrates different styling options, customization patterns, and visual variations.",
      },
    },
  },
  render: () => (
    <div className="w-full max-w-md space-y-4">
      <div>
        <Label className="text-sm mb-2 block">Default Styling</Label>
        <Textarea placeholder="Default textarea styling" />
      </div>

      <div>
        <Label className="text-sm mb-2 block">Custom Border</Label>
        <Textarea
          placeholder="Custom border styling"
          className="border-blue-500 focus:border-blue-600"
        />
      </div>

      <div>
        <Label className="text-sm mb-2 block">Custom Background</Label>
        <Textarea
          placeholder="Custom background styling"
          className="bg-blue-50 border-blue-200"
        />
      </div>
    </div>
  ),
};
