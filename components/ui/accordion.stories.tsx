import {Meta, StoryObj} from "@storybook/react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./accordion";

const meta: Meta<typeof Accordion> = {
  title: "Components/ui/accordion",
  component: Accordion,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    type: {
      control: {type: "select"},
      options: ["single", "multiple"],
    },
    collapsible: {
      control: {type: "boolean"},
    },
    children: {
      control: false,
    },
  },
};
export default meta;

type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  args: {
    type: "single",
    collapsible: true,
    children: (
      <div className="w-full">
        <Accordion type="single" collapsible className="min-w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Title 1</AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              qui enim quaerat consequatur alias dicta odit aliquam eligendi
              obcaecati adipisci ullam similique, doloribus, voluptas sint
              corrupti. Maxime sunt corrupti natus.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Title 2</AccordionTrigger>
            <AccordionContent>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem eos quasi ut qui, neque iste id excepturi tenetur iure,
              obcaecati maiores, delectus provident fugiat incidunt magni rerum
              fuga cumque quaerat.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    ),
  },
};
