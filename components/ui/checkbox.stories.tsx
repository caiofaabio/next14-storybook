import {expect} from "@storybook/jest";

import {Meta, StoryObj} from "@storybook/react";
import {within, userEvent} from "@storybook/testing-library";
import {Checkbox} from "./checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Components/ui/checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    id: {
      control: "text",
      description: "Checkbox id",
    },
    disabled: {
      control: "boolean",
      description: "Checkbox disabled",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    id: "terms",
    disabled: false,
  },
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Checkbox {...args} />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
      </label>
    </div>
  ),
  play: async ({canvasElement}) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole("checkbox", {
      name: /Accept terms and conditions/i,
    });

    await userEvent.click(checkbox);
    expect(checkbox).toBeChecked();

    await userEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
  },
};

export const Disabled: Story = {
  args: {
    id: "terms2",
    disabled: true,
  },
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Checkbox {...args} />
      <label
        htmlFor="terms2"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
      </label>
    </div>
  ),
  play: async ({canvasElement}) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole("checkbox", {
      name: /Accept terms and conditions/i,
    });

    await userEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
  },
};
