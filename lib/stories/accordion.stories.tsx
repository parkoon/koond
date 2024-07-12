import type { Meta } from '@storybook/react'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/accordion'

const meta = {
  title: 'ui/Accordion',
  component: Accordion,
  tags: ['autodocs'],
} satisfies Meta<typeof Accordion>

export default meta

export const Default = () => (
  <Accordion type="single" collapsible>
    <AccordionItem value="1">
      <AccordionTrigger>Lorem ipsum dolor sit 1</AccordionTrigger>
      <AccordionContent>
        adipisicing elit. Harum esse minus assumenda maiores earum? Sequi doloribus omnis ratione
        error, at, commodi laboriosam ullam possimus minus ut saepe! Ad, corrupti dolor!
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="2">
      <AccordionTrigger>Lorem ipsum dolor sit 2</AccordionTrigger>
      <AccordionContent>
        adipisicing elit. Harum esse minus assumenda maiores earum? Sequi doloribus omnis ratione
        error, at, commodi laboriosam ullam possimus minus ut saepe! Ad, corrupti dolor!
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="3">
      <AccordionTrigger>Lorem ipsum dolor sit 3</AccordionTrigger>
      <AccordionContent>
        adipisicing elit. Harum esse minus assumenda maiores earum? Sequi doloribus omnis ratione
        error, at, commodi laboriosam ullam possimus minus ut saepe! Ad, corrupti dolor!
      </AccordionContent>
    </AccordionItem>
  </Accordion>
)

export const Borderless = () => (
  <Accordion type="single" collapsible bordered={false}>
    <AccordionItem value="1">
      <AccordionTrigger>Lorem ipsum dolor sit 1</AccordionTrigger>
      <AccordionContent>
        adipisicing elit. Harum esse minus assumenda maiores earum? Sequi doloribus omnis ratione
        error, at, commodi laboriosam ullam possimus minus ut saepe! Ad, corrupti dolor!
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="2">
      <AccordionTrigger>Lorem ipsum dolor sit 2</AccordionTrigger>
      <AccordionContent>
        adipisicing elit. Harum esse minus assumenda maiores earum? Sequi doloribus omnis ratione
        error, at, commodi laboriosam ullam possimus minus ut saepe! Ad, corrupti dolor!
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="3">
      <AccordionTrigger>Lorem ipsum dolor sit 3</AccordionTrigger>
      <AccordionContent>
        adipisicing elit. Harum esse minus assumenda maiores earum? Sequi doloribus omnis ratione
        error, at, commodi laboriosam ullam possimus minus ut saepe! Ad, corrupti dolor!
      </AccordionContent>
    </AccordionItem>
  </Accordion>
)
export const Multiple = () => (
  <Accordion type="multiple">
    <AccordionItem value="1">
      <AccordionTrigger>Lorem ipsum dolor sit 1</AccordionTrigger>
      <AccordionContent>
        adipisicing elit. Harum esse minus assumenda maiores earum? Sequi doloribus omnis ratione
        error, at, commodi laboriosam ullam possimus minus ut saepe! Ad, corrupti dolor!
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="2">
      <AccordionTrigger>Lorem ipsum dolor sit 2</AccordionTrigger>
      <AccordionContent>
        adipisicing elit. Harum esse minus assumenda maiores earum? Sequi doloribus omnis ratione
        error, at, commodi laboriosam ullam possimus minus ut saepe! Ad, corrupti dolor!
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="3">
      <AccordionTrigger>Lorem ipsum dolor sit 3</AccordionTrigger>
      <AccordionContent>
        adipisicing elit. Harum esse minus assumenda maiores earum? Sequi doloribus omnis ratione
        error, at, commodi laboriosam ullam possimus minus ut saepe! Ad, corrupti dolor!
      </AccordionContent>
    </AccordionItem>
  </Accordion>
)

export const DefaultOpened = () => (
  <Accordion type="single" collapsible defaultValue="1">
    <AccordionItem value="1">
      <AccordionTrigger>Lorem ipsum dolor sit 1</AccordionTrigger>
      <AccordionContent>
        adipisicing elit. Harum esse minus assumenda maiores earum? Sequi doloribus omnis ratione
        error, at, commodi laboriosam ullam possimus minus ut saepe! Ad, corrupti dolor!
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="2">
      <AccordionTrigger>Lorem ipsum dolor sit 2</AccordionTrigger>
      <AccordionContent>
        adipisicing elit. Harum esse minus assumenda maiores earum? Sequi doloribus omnis ratione
        error, at, commodi laboriosam ullam possimus minus ut saepe! Ad, corrupti dolor!
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="3">
      <AccordionTrigger>Lorem ipsum dolor sit 3</AccordionTrigger>
      <AccordionContent>
        adipisicing elit. Harum esse minus assumenda maiores earum? Sequi doloribus omnis ratione
        error, at, commodi laboriosam ullam possimus minus ut saepe! Ad, corrupti dolor!
      </AccordionContent>
    </AccordionItem>
  </Accordion>
)
