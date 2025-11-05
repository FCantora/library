import type { Meta, StoryObj } from "@storybook/react";
import { DispatchTable } from "./dispatch-table";
import { dispatchListOk } from "./dispatch-table.mock";
import DispatchColumns from "./dispatch-table-columns";

const meta: Meta<typeof DispatchTable> = {
  title: "Components/DispatchTable",
  component: DispatchTable,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `
The DispatchTable component is designed to display and manage dispatch information in a table format.
It provides features for sorting, filtering, expanding rows to show detailed information, and more.

## Key Features
- **Customizable Columns**: Define custom columns with specific data rendering.
- **Expandable Rows**: Support for expanding rows to display additional information like multistop data.
- **Empty State**: Graceful handling of empty data states with user-friendly messaging.
- **Flexible Data**: Works with various data formats and structures.
- **Responsive**: Adapts to different screen sizes and layouts.

## Usage Patterns
- **Basic Table**: Display a list of dispatches with standard columns.
- **Expandable Rows**: Show additional details for specific rows (multistop, milestones, etc.).
- **Empty State**: Handle cases where no data is available.
`,
      },
    },
  },
  argTypes: {
    columns: {
      description: "An array of column definitions for the table.",
      table: { disable: true },
    },
    data: {
      description: "An array of data to be displayed in the table.",
      table: { disable: true },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  name: "Default",
  args: {
    columns: DispatchColumns(),
    data: dispatchListOk,
  },
  render: (args) => (
    <div className="p-4 bg-gray-100">
      <DispatchTable {...args} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "This is the default view of the Dispatch Table, showing a list of dispatches with their corresponding data.",
      },
    },
  },
};

export const EmptyState: Story = {
  name: "Empty State",
  args: {
    columns: DispatchColumns(),
    data: [],
  },
  render: (args) => (
    <div className="p-4 bg-gray-100">
      <DispatchTable {...args} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "This story shows how the Dispatch Table renders when there is no data to display. It should show a user-friendly message indicating that no dispatches were found.",
      },
    },
  },
};

export const ExpandableRows: Story = {
  name: "Expandable Rows",
  args: {
    columns: DispatchColumns(),
    data: dispatchListOk.map((dispatch, index) => ({
      ...dispatch,
      multistop: index % 2 === 0 ? dispatch.multistop : undefined,
    })),
  },
  render: (args) => (
    <div className="p-4 bg-gray-100">
      <DispatchTable {...args} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "This story demonstrates the expandable row functionality of the Dispatch Table. Some rows have multistop data, which can be expanded to show more details.",
      },
    },
  },
};
