import type { Meta, StoryObj } from "@storybook/react";
import { Store, CircleDollarSign, MapPin, Edit } from "lucide-react";

import { Button } from "../button";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";
import Badge from "../badge/badge";

const meta: Meta<typeof Card> = {
  title: "Lib Card",
  component: Card,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

// Basic Card Examples
export const Default: Story = {
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

export const Simple: Story = {
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

// Real-world Usage: Carrier Details Card Style (based on details-card.tsx)
export const CarrierDetailsStyle: Story = {
  render: () => (
    <Card className="w-full bg-neutral-800 rounded-b-3xl py-10 px-12 mb-4 relative">
      <div className="flex flex-row">
        <div className="flex gap-10 w-full">
          <div className="flex flex-col w-48 items-start gap-4">
            <div className="bg-icon-strong p-4 rounded-full gap-2.5">
              <Store className="w-6 h-6 stroke-warning-foreground stroke-1" />
            </div>
            <p className="text-2xl font-bold text-warning-foreground text-start">
              Details
            </p>
          </div>
          <div className="flex-1">
            <div className="grid grid-cols-4 grid-rows-2 gap-10">
              <div className="flex flex-col gap-1 row-start-1 row-end-2 col-start-1 col-end-5">
                <p className="font-bold text-white text-xl">ABC Transport Inc.</p>
                <p className="font-normal text-sm text-neutral-300 uppercase">
                  Carrier Name
                </p>
              </div>
              <div className="flex flex-col gap-1 row-start-2 row-end-3 col-start-1 col-end-2">
                <p className="font-normal text-sm text-neutral-300 uppercase">
                  US DOT #
                </p>
                <p className="font-normal text-sm text-white uppercase">123456</p>
              </div>
              <div className="flex flex-col gap-1 row-start-2 row-end-3 col-start-2 col-end-3">
                <p className="font-normal text-sm text-neutral-300 uppercase">
                  SCAC
                </p>
                <p className="font-normal text-sm text-white uppercase">ABCT</p>
              </div>
              <div className="flex flex-col gap-1 row-start-2 row-end-3 col-start-3 col-end-4">
                <p className="font-normal text-sm text-neutral-300 uppercase">
                  MC #
                </p>
                <p className="font-normal text-sm text-white uppercase">789012</p>
              </div>
              <div className="flex flex-col gap-1 row-start-2 row-end-3 col-start-4 col-end-5">
                <p className="font-normal text-sm text-neutral-300 uppercase text-nowrap">
                  COMMUNICATION BY EDI
                </p>
                <Badge
                  variant="success"
                  size="small"
                  className="text-xs font-bold rounded-full text-white capitalize w-fit py-[3px] px-1.5"
                >
                  Yes
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-4 right-4">
        <Button variant="tertiary" size="small">
          <Edit className="w-4 h-4" />
        </Button>
      </div>
    </Card>
  ),
};

// Real-world Usage: Rates Card Style (based on rates-card.tsx)
export const RatesCardStyle: Story = {
  render: () => (
    <Card className="w-1/2 bg-neutral-800 rounded-3xl py-10 px-12 mb-4 relative">
      <div className="flex flex-row">
        <div className="flex gap-10 w-full">
          <div className="flex flex-col w-48 items-start gap-4">
            <div className="bg-icon-strong p-4 rounded-full gap-2.5">
              <CircleDollarSign className="w-6 h-6 stroke-warning-foreground stroke-1" />
            </div>
            <p className="text-2xl font-bold text-warning-foreground text-start">
              Rates
            </p>
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-1">
                <p className="font-normal text-sm text-neutral-300 uppercase">
                  Rate Type
                </p>
                <Badge variant="info" className="w-fit">
                  Flat Rate
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  ),
};

// Real-world Usage: Location Card Style (based on location-card.tsx)
export const LocationCardStyle: Story = {
  render: () => (
    <Card className="w-full bg-neutral-800 rounded-3xl py-10 px-12 mb-4 relative">
      <div className="flex flex-row">
        <div className="flex gap-10 w-full">
          <div className="flex flex-col w-48 items-start gap-4">
            <div className="bg-icon-strong p-4 rounded-full gap-2.5">
              <MapPin className="w-6 h-6 stroke-warning-foreground stroke-1" />
            </div>
            <p className="text-2xl font-bold text-warning-foreground text-start">
              Location
            </p>
          </div>
          <div className="flex-1">
            <div className="grid grid-cols-3 gap-x-10 gap-y-6 mb-6">
              <div className="col-start-1 col-end-2 gap-3 pb-6 text-white">
                <p className="font-normal text-sm text-neutral-300 uppercase">
                  Address
                </p>
                <p className="text-base font-normal">123 Main Street</p>
                <p className="text-base font-normal">Chicago, IL, 60601</p>
              </div>
              <div className="col-start-2 col-end-3">
                <p className="text-sm font-normal text-neutral-300 uppercase mb-1">
                  Website
                </p>
                <p className="text-sm font-normal text-white">www.example.com</p>
              </div>
              <div className="col-start-3 col-end-3 gap-4 pb-6">
                <div className="bg-black w-[300px] rounded-xl p-6 gap-6 text-white">
                  <div className="gap-3 h-full">
                    <p className="text-sm font-bold uppercase text-neutral-300">
                      WORKING HOURS
                    </p>
                    <div className="text-sm font-normal text-white">
                      Mon-Fri: 8AM-5PM
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  ),
};

// Card with Actions
export const WithActions: Story = {
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

// Card with Badge
export const WithBadge: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Card with Badge</CardTitle>
          <Badge variant="success">New</Badge>
        </div>
        <CardDescription>This card includes a status badge.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card content with badge information.</p>
      </CardContent>
    </Card>
  ),
};

// Multiple Cards Layout (as used in carrier details)
export const MultipleCards: Story = {
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

// Card without Header
export const WithoutHeader: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardContent className="pt-6">
        <p>This card doesn't have a header section.</p>
        <p>All content is in the main content area.</p>
      </CardContent>
    </Card>
  ),
};

// Card without Footer
export const WithoutFooter: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card without Footer</CardTitle>
        <CardDescription>This card doesn't have a footer section.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card content goes here.</p>
      </CardContent>
    </Card>
  ),
};

// Custom Styled Card
export const CustomStyled: Story = {
  render: () => (
    <Card className="w-[350px] border-2 border-blue-200 bg-blue-50">
      <CardHeader className="bg-blue-100">
        <CardTitle className="text-blue-800">Custom Styled Card</CardTitle>
        <CardDescription className="text-blue-600">
          This card has custom styling applied.
        </CardDescription>
      </CardHeader>
      <CardContent className="bg-blue-50">
        <p className="text-blue-700">Custom styled content.</p>
      </CardContent>
      <CardFooter className="bg-blue-100">
        <Button className="bg-blue-600 hover:bg-blue-700">Custom Button</Button>
      </CardFooter>
    </Card>
  ),
};

// Card with Form Elements
export const WithForm: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Form Card</CardTitle>
        <CardDescription>This card contains form elements.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <label className="text-sm font-medium">Name</label>
          <input 
            className="w-full p-2 border rounded-md" 
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label className="text-sm font-medium">Email</label>
          <input 
            className="w-full p-2 border rounded-md" 
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

// Dark Theme Card (as used in the app)
export const DarkTheme: Story = {
  render: () => (
    <Card className="w-[350px] bg-neutral-800 text-white border-neutral-700">
      <CardHeader>
        <CardTitle className="text-white">Dark Theme Card</CardTitle>
        <CardDescription className="text-neutral-300">
          This card uses the dark theme styling from the app.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-neutral-200">Content in dark theme.</p>
      </CardContent>
      <CardFooter>
        <Button variant="secondary">Action</Button>
      </CardFooter>
    </Card>
  ),
};
