import {Meta, StoryObj} from "@storybook/react";

import {Alert, AlertDescription, AlertTitle} from "./alert";

import {action} from "@storybook/addon-actions";
import {AlertCircle, Terminal} from "lucide-react";

const meta: Meta<typeof Alert> = {
  title: "Components/ui/alert",
  component: Alert,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: "select",
      description: "Alert variants",
      options: ["default", "destructive"],
    },
    onClick: {
      action: "clicked",
      description: "Alert click event",
    },
    children: {
      control: "text",
      description: "Alert text",
    },
    className: {
      control: "text",
      description: "Alert classes",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default",
    children: (
      <Alert>
        <Terminal className="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>
    ),
    className: "w-full",
    onClick: action("default click"),
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Your session has expired. Please log in again.
        </AlertDescription>
      </Alert>
    ),
    className: "",
    onClick: action("destructive click"),
  },
};
