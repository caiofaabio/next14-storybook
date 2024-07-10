import {Meta, StoryObj} from "@storybook/react";

import {Button} from "./button";

import {action} from "@storybook/addon-actions";

const meta: Meta<typeof Button> = {
  title: "Components/ui/button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: "select",
      description: "Button variants",
      options: [
        "default",
        "secondary",
        "destructive",
        "outline",
        "ghost",
        "link",
      ],
    },
    size: {
      control: "select",
      description: "Button sizes",
      options: ["default", "sm", "lg", "icon"],
    },
    disabled: {
      control: "boolean",
    },
    onClick: {
      action: "clicked",
      description: "Button click event",
    },
    children: {
      control: "text",
      description: "Button text",
    },
    className: {
      control: "text",
      description: "Button classes",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default",
    size: "sm",
    disabled: false,
    onClick: action("default click"),
    children: "Default button",
    className: "shadow-lg",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    size: "sm",
    disabled: false,
    onClick: action("Secondary button click"),
    children: "Secondary button",
    className: "shadow-lg",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    size: "sm",
    disabled: false,
    onClick: action("Destructive button click"),
    children: "Destructive button",
    className: "shadow-lg",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    size: "lg",
    disabled: false,
    onClick: action("Outline button click"),
    children: "Outline button",
    className: "rounded-none  shadow-lg",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    size: "lg",
    disabled: false,
    onClick: action("Ghost button click"),
    children: "Ghost button",
    className: "shadow-lg",
  },
};

export const Link: Story = {
  args: {
    variant: "link",
    size: "sm",
    disabled: false,
    onClick: action("link click"),
    children: "Link button",
    className: "",
  },
};
