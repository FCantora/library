import type { Meta, StoryObj } from "@storybook/react";

import Loader from "./loader";

const meta: Meta<typeof Loader> = {
  title: "Loader",
  component: Loader,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A full-page loader component to indicate loading states.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const InsideContainer: Story = {
  render: () => (
    <div className="w-96 h-96 border border-dashed border-gray-400 flex items-center justify-center">
      <Loader />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "The loader can be used inside a container. Note that the loader has a `min-h-[calc(100vh-14rem)]` which might not be ideal for container usage. You might need to create a different version of the loader for this use case.",
      },
    },
  },
};
