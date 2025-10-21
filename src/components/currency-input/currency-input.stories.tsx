import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import { CurrencyInput } from "./currency-input";
import { Label } from "../label";
import { Button } from "../button";

const meta = {
  title: "Components/CurrencyInput",
  component: CurrencyInput,
  tags: ["autodocs"],
  argTypes: {
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
      table: { disable: true }
    },
    onValueChange: {
      action: "value changed",
      table: { disable: true },
    },
  },
  parameters: {
    layout: "centered",
    controls: { expanded: true },
    docs: {
      description: {
        component:
          "Specialized input component for currency values. Automatically formats to two decimal places and includes a dollar sign prefix. Prevents mouse wheel changes.",
      },
    },
  },
} satisfies Meta<typeof CurrencyInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "0.00",
    disabled: false,
  },
  render: (args) => (
    <div className="w-64">
      <CurrencyInput {...args} />
    </div>
  ),
};

export const States: Story = {
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story:
          "Currency input states: empty, with value, and disabled.",
      },
    },
  },
  render: () => (
    <div className="flex flex-col gap-4 w-64">
      <div className="flex flex-col gap-2">
        <Label>Empty</Label>
        <CurrencyInput placeholder="0.00" />
      </div>
      <div className="flex flex-col gap-2">
        <Label>With Value</Label>
        <CurrencyInput defaultValue="1299.99" />
      </div>
      <div className="flex flex-col gap-2">
        <Label>Disabled (Empty)</Label>
        <CurrencyInput placeholder="0.00" disabled />
      </div>
      <div className="flex flex-col gap-2">
        <Label>Disabled (With Value)</Label>
        <CurrencyInput defaultValue="499.50" disabled />
      </div>
    </div>
  ),
};

const ControlledExample = () => {
  const [value, setValue] = useState("");
  const numericValue = parseFloat(value) || 0;

  return (
    <div className="flex flex-col gap-4 w-64">
      <div className="flex flex-col gap-2">
        <Label htmlFor="ctrl-currency">Enter Amount</Label>
        <CurrencyInput
          id="ctrl-currency"
          placeholder="0.00"
          onValueChange={setValue}
        />
      </div>
      <div className="text-sm space-y-1">
        <p>
          Value: <span className="text-primary font-semibold">{value || "0"}</span>
        </p>
        <p>
          Tax (10%): <span className="text-primary font-semibold">${(numericValue * 0.1).toFixed(2)}</span>
        </p>
        <p className="text-base font-semibold">
          Total: <span className="text-primary">${(numericValue * 1.1).toFixed(2)}</span>
        </p>
      </div>
      <Button
        variant="secondary"
        size="small"
        onClick={() => setValue("")}
        disabled={!value}
      >
        Clear
      </Button>
    </div>
  );
};

export const Controlled: Story = {
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story:
          "Example of controlled currency input with calculations. Uses onValueChange callback to update external state.",
      },
    },
  },
  render: () => <ControlledExample />,
};

export const Validation: Story = {
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story: "Currency input with validation states.",
      },
    },
  },
  render: () => (
    <div className="flex flex-col gap-4 w-64">
      <div className="flex flex-col gap-2">
        <Label htmlFor="valid-currency">Valid Amount</Label>
        <CurrencyInput
          id="valid-currency"
          defaultValue="150.00"
          className="border-success"
        />
        <p className="text-sm text-success">✓ Valid amount</p>
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="invalid-currency">Amount Too High</Label>
        <CurrencyInput
          id="invalid-currency"
          defaultValue="99999.99"
          className="border-error"
        />
        <p className="text-sm text-error">⚠ Maximum amount is $10,000</p>
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="required-currency">Required Field</Label>
        <CurrencyInput
          id="required-currency"
          placeholder="0.00"
          className="border-error"
        />
        <p className="text-sm text-error">⚠ Amount is required</p>
      </div>
    </div>
  ),
};

const UseCaseExample = () => {
  const [productPrice, setProductPrice] = useState("29.99");
  const [shippingCost, setShippingCost] = useState("5.99");
  const [discount, setDiscount] = useState("0");

  const total = (
    parseFloat(productPrice || "0") +
    parseFloat(shippingCost || "0") -
    parseFloat(discount || "0")
  ).toFixed(2);

  return (
    <div className="flex flex-col gap-4 w-80">
      <div className="flex flex-col gap-2">
        <Label htmlFor="product-price">Product Price</Label>
        <CurrencyInput
          id="product-price"
          defaultValue={productPrice}
          onValueChange={setProductPrice}
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="shipping-cost">Shipping Cost</Label>
        <CurrencyInput
          id="shipping-cost"
          defaultValue={shippingCost}
          onValueChange={setShippingCost}
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="discount">Discount</Label>
        <CurrencyInput
          id="discount"
          defaultValue={discount}
          onValueChange={setDiscount}
          placeholder="0.00"
        />
      </div>
      <div className="border-t border-neutral-300 pt-3 mt-2">
        <div className="flex gap-2 justify-between items-center text-lg font-semibold">
          <span>Total: </span>
          <span className="text-primary">${total}</span>
        </div>
      </div>
    </div>
  );
};

export const UseCases: Story = {
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story:
          "Common use case: pricing calculator with product price, shipping, and discount.",
      },
    },
  },
  render: () => <UseCaseExample />,
};
