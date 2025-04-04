/*
 * Copyright 2025 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';
import { Form } from '@base-ui-components/react/form';
import { Button } from '../Button';
import { Flex } from '../Flex';

const meta = {
  title: 'Components/Select',
  component: Select,
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const fontOptions = [
  { value: 'sans', label: 'Sans-serif' },
  { value: 'serif', label: 'Serif' },
  { value: 'mono', label: 'Monospace' },
  { value: 'cursive', label: 'Cursive' },
];

export const Default: Story = {
  args: {
    options: fontOptions,
    name: 'font',
  },
};

export const Preview: Story = {
  args: {
    label: 'Font Family',
    options: fontOptions,
    placeholder: 'Select a font',
    name: 'font',
    style: { maxWidth: 260 },
  },
};

export const WithDescription: Story = {
  args: {
    ...Preview.args,
    description: 'Choose a font family for your document',
  },
};

export const Sizes: Story = {
  args: {
    ...Preview.args,
  },
  render: args => (
    <Flex direction="row" gap="2" style={{ width: '100%', maxWidth: 540 }}>
      <Select {...args} size="small" />
      <Select {...args} size="medium" />
    </Flex>
  ),
};

export const Required: Story = {
  args: {
    ...Preview.args,
    required: true,
  },
};

export const Disabled: Story = {
  args: {
    ...Preview.args,
    disabled: true,
  },
};

export const DisabledOption: Story = {
  args: {
    ...Preview.args,
    options: [
      ...fontOptions,
      { value: 'comic-sans', label: 'Comic sans', disabled: true },
    ],
  },
};

export const NoOptions: Story = {
  args: {
    ...Preview.args,
    options: undefined,
  },
};

export const WithValue: Story = {
  args: {
    ...Preview.args,
    value: 'mono',
    defaultValue: 'serif',
  },
};

export const WithDefaultValue: Story = {
  args: {
    ...Preview.args,
    defaultValue: 'serif',
    options: fontOptions,
    name: 'font',
  },
};

const generateOptions = (count = 100) => {
  const firstWords = [
    'Moon',
    'Sun',
    'Star',
    'Cosmic',
    'Globe',
    'Flux',
    'Nova',
    'Echo',
    'Pulse',
    'Vertex',
    'Nexus',
    'Orbit',
    'Prism',
    'Quantum',
    'Zenith',
    'Aura',
    'Crystal',
    'Shadow',
    'Phantom',
    'Azure',
    'Ember',
    'Frost',
    'Horizon',
    'Mystic',
    'Raven',
    'Solstice',
    'Tempest',
    'Vortex',
    'Whisper',
    'Zephyr',
  ];

  const secondWords = [
    'green',
    'blue',
    'red',
    'black',
    'white',
    'silver',
    'gold',
    'copper',
    'bronze',
    'steel',
    'flow',
    'light',
    'dark',
    'dream',
    'stream',
    'life',
    'sight',
    'mind',
    'craft',
    'blend',
    'wave',
    'swift',
    'sharp',
    'soft',
    'bold',
    'clear',
    'deep',
    'lift',
    'shift',
    'grace',
  ];

  const thirdWords = [
    'Sans',
    'Serif',
    'Mono',
    'Script',
    'Display',
    'Slab',
    'Round',
    'Thin',
    'Bold',
    'Italic',
    'Pro',
    'Neo',
    'Prime',
    'Plus',
    'One',
    'Two',
    'Nova',
    'Ultra',
    'Elite',
    'Max',
    'Type',
    'Text',
    'View',
    'Graph',
    'Print',
    'Read',
    'Write',
    'Book',
    'Note',
    'Letter',
  ];

  const randomElement = <T extends any>(array: T[]): T =>
    array[Math.floor(Math.random() * array.length)];

  const uniqueRandomNames = Array.from({ length: count })
    .map(() => {
      const firstName = randomElement(firstWords);
      const secondName = randomElement(secondWords);
      const thirdName = randomElement(thirdWords);
      return `${firstName}${secondName} ${thirdName}`;
    })
    .reduce((accSet, label) => {
      accSet.add(label);
      return accSet;
    }, new Set<string>())
    .values();

  return Array.from(uniqueRandomNames).map(label => ({
    value: label.toLocaleLowerCase('en-US').replaceAll(' ', '-'),
    label,
  }));
};

export const WithManyOptions: Story = {
  args: {
    label: 'Font Family',
    options: generateOptions(),
    name: 'font',
  },
};

export const withErrorAndDescription: Story = {
  args: {
    ...Preview.args,
    error: 'Invalid font family',
  },
};
