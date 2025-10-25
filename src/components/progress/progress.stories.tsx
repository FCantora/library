/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from "@storybook/react";
import { useState, useEffect } from "react";

import { Progress } from "./progress";

const meta: Meta<typeof Progress> = {
  title: "Components/Progress",
  component: Progress,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
The Progress component provides a flexible and accessible progress indicator built on Radix UI primitives. 
It displays the completion status of a task or process with visual feedback.

## Key Features
- **Accessible**: Built with Radix UI primitives for full accessibility support
- **Flexible Values**: Support for any percentage value from 0 to 100
- **Smooth Animations**: Built-in transition animations for value changes
- **Customizable**: Full control over styling and appearance
- **Semantic**: Proper ARIA attributes for screen readers

## Usage Patterns
- **Basic Progress**: Simple progress indication
- **Loading States**: Show loading progress for operations
- **Form Progress**: Multi-step form completion
- **Upload Progress**: File upload progress indication
- **Task Progress**: Long-running task progress
        `,
      },
    },
  },
} satisfies Meta<typeof Progress>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * BASIC PROGRESS PATTERNS
 * These stories demonstrate fundamental progress component usage
 */

/**
 * Default progress with basic value.
 * Use this as the standard progress pattern for simple progress indication.
 */
export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Standard progress component with basic value. Perfect for simple progress indication and task completion status.",
      },
    },
  },
  render: () => <Progress value={33} />,
};

/**
 * Progress with different completion levels.
 * Demonstrates various progress states from empty to complete.
 */
export const DifferentValues: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Progress with different completion levels. Demonstrates various progress states from empty to complete.",
      },
    },
  },
  render: () => (
    <div className="space-y-4 w-full">
      <div>
        <p className="text-sm mb-2">0% - Not started</p>
        <Progress value={0} />
      </div>
      <div>
        <p className="text-sm mb-2">25% - Quarter complete</p>
        <Progress value={25} />
      </div>
      <div>
        <p className="text-sm mb-2">50% - Half complete</p>
        <Progress value={50} />
      </div>
      <div>
        <p className="text-sm mb-2">75% - Almost complete</p>
        <Progress value={75} />
      </div>
      <div>
        <p className="text-sm mb-2">100% - Complete</p>
        <Progress value={100} />
      </div>
    </div>
  ),
};

/**
 * Progress with zero value.
 * Shows the empty state of the progress component.
 */
export const Empty: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Progress with zero value. Shows the empty state of the progress component when no progress has been made.",
      },
    },
  },
  render: () => <Progress value={0} />,
};

/**
 * Progress with maximum value.
 * Shows the complete state of the progress component.
 */
export const Complete: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Progress with maximum value. Shows the complete state of the progress component when the task is finished.",
      },
    },
  },
  render: () => <Progress value={100} />,
};

/**
 * ANIMATED PROGRESS PATTERNS
 * These stories demonstrate progress with animations and dynamic updates
 */

/**
 * Animated progress that simulates loading.
 * Perfect for demonstrating loading states and smooth transitions.
 */
export const Animated: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Animated progress that simulates loading. Perfect for demonstrating loading states and smooth transitions.",
      },
    },
  },
  render: () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
      const timer = setTimeout(() => setProgress(66), 500);
      return () => clearTimeout(timer);
    }, []);

    return <Progress value={progress} />;
  },
};

/**
 * Simulated file upload progress.
 * Demonstrates realistic progress simulation for file uploads.
 */
export const SimulatedUpload: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Simulated file upload progress. Demonstrates realistic progress simulation for file uploads and long-running operations.",
      },
    },
  },
  render: () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
      const timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(timer);
            return 100;
          }
          return prev + Math.random() * 10;
        });
      }, 200);

      return () => clearInterval(timer);
    }, []);

    return (
      <div className="space-y-2 w-full">
        <div className="flex justify-between text-sm">
          <span>Uploading file...</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <Progress value={progress} />
      </div>
    );
  },
};

/**
 * REAL-WORLD USAGE PATTERNS
 * These stories demonstrate common real-world progress implementations
 */

/**
 * Form completion progress.
 * Common pattern for multi-step forms and wizard interfaces.
 */
export const FormProgress: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Form completion progress. Common pattern for multi-step forms, wizard interfaces, and guided processes.",
      },
    },
  },
  render: () => {
    const steps = [
      { name: "Personal Info", completed: true },
      { name: "Contact Details", completed: true },
      { name: "Preferences", completed: false },
      { name: "Review", completed: false },
    ];

    const completedSteps = steps.filter((step) => step.completed).length;
    const progress = (completedSteps / steps.length) * 100;

    return (
      <div className="space-y-4 w-full">
        <div className="flex justify-between text-sm">
          <span>Form Progress</span>
          <span>
            {completedSteps} of {steps.length} steps
          </span>
        </div>
        <Progress value={progress} />
        <div className="space-y-1">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center text-sm">
              <span
                className={`w-2 h-2 rounded-full mr-2 ${
                  step.completed ? "bg-green-500" : "bg-gray-300"
                }`}
              />
              {step.name}
            </div>
          ))}
        </div>
      </div>
    );
  },
};

/**
 * Task progress with status indication.
 * Common pattern for background tasks and long-running operations.
 */
export const TaskProgress: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Task progress with status indication. Common pattern for background tasks, long-running operations, and batch processing.",
      },
    },
  },
  render: () => {
    const [progress, setProgress] = useState(0);
    const [status, setStatus] = useState("Processing...");

    useEffect(() => {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setStatus("Complete!");
            clearInterval(interval);
            return 100;
          }
          const newProgress = prev + Math.random() * 15;
          if (newProgress > 50 && status === "Processing...") {
            setStatus("Almost done...");
          }
          return newProgress;
        });
      }, 300);

      return () => clearInterval(interval);
    }, [status]);

    return (
      <div className="space-y-2 w-full">
        <div className="flex justify-between text-sm">
          <span>{status}</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <Progress value={progress} />
      </div>
    );
  },
};

/**
 * Download progress with file information.
 * Common pattern for file downloads and data processing.
 */
export const DownloadProgress: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Download progress with file information. Common pattern for file downloads, data processing, and resource loading.",
      },
    },
  },
  render: () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + Math.random() * 8;
        });
      }, 150);

      return () => clearInterval(interval);
    }, []);

    const fileSize = "2.4 MB";
    const downloadedSize = `${((2.4 * progress) / 100).toFixed(1)} MB`;

    return (
      <div className="space-y-3 ">
        <div>
          <h4 className="text-sm font-medium">Downloading file.pdf</h4>
          <p className="text-xs text-gray-500">
            {downloadedSize} of {fileSize}
          </p>
        </div>
        <Progress value={progress} />
        <div className="flex justify-between text-xs text-gray-500">
          <span>{Math.round(progress)}% complete</span>
          <span>
            ETA:{" "}
            {progress < 100
              ? `${Math.round((100 - progress) / 5)}s`
              : "Complete"}
          </span>
        </div>
      </div>
    );
  },
};

/**
 * System resource usage progress.
 * Common pattern for system monitoring and resource management.
 */
export const ResourceUsage: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "System resource usage progress. Common pattern for system monitoring, resource management, and capacity indicators.",
      },
    },
  },
  render: () => {
    const resources = [
      { name: "CPU Usage", value: 45 },
      { name: "Memory Usage", value: 72 },
      { name: "Disk Usage", value: 88 },
      { name: "Network Usage", value: 23 },
    ];

    return (
      <div className="space-y-4 ">
        <h4 className="text-sm font-medium">System Resources</h4>
        {resources.map((resource, index) => (
          <div key={index} className="space-y-1">
            <div className="flex justify-between text-sm">
              <span>{resource.name}</span>
              <span>{resource.value}%</span>
            </div>
            <Progress value={resource.value} />
          </div>
        ))}
      </div>
    );
  },
};

/**
 * Installation progress with steps.
 * Common pattern for software installation and setup processes.
 */
export const InstallationProgress: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Installation progress with steps. Common pattern for software installation, setup processes, and deployment workflows.",
      },
    },
  },
  render: () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [progress, setProgress] = useState(0);

    const steps = [
      "Preparing installation...",
      "Downloading components...",
      "Installing core files...",
      "Configuring settings...",
      "Finalizing installation...",
    ];

    useEffect(() => {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          const newProgress = prev + Math.random() * 12;
          if (newProgress > (currentStep + 1) * 20) {
            setCurrentStep(Math.min(currentStep + 1, steps.length - 1));
          }
          return newProgress;
        });
      }, 200);

      return () => clearInterval(interval);
    }, [currentStep, steps.length]);

    return (
      <div className="space-y-4 ">
        <div>
          <h4 className="text-sm font-medium">Installing Application</h4>
          <p className="text-xs text-gray-500">{steps[currentStep]}</p>
        </div>
        <Progress value={progress} />
        <div className="flex justify-between text-xs text-gray-500">
          <span>
            Step {currentStep + 1} of {steps.length}
          </span>
          <span>{Math.round(progress)}%</span>
        </div>
      </div>
    );
  },
};
