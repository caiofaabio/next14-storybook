import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {Alert, AlertDescription, AlertTitle} from "@/components/ui/alert";
import {Button} from "@/components/ui/button";
import {Checkbox} from "@/components/ui/checkbox";

import {AlertCircle} from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Button variant="destructive">Button Home</Button>
      <div className="w-3/6">
        <Accordion type="single" collapsible>
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
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Your session has expired. Please log in again.
        </AlertDescription>
      </Alert>
      <br />
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <label
          htmlFor="terms"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Accept terms and conditions
        </label>
      </div>
      <br />
      <div className="flex items-center space-x-2">
        <Checkbox id="terms2" disabled />
        <label
          htmlFor="terms2"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Accept terms and conditions
        </label>
      </div>
    </main>
  );
}
