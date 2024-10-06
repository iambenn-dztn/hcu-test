import React from 'react';

import { StoryFn, Meta } from '@storybook/react';
import { useForm } from 'react-hook-form';

import TextField from './TextField';

export default {
  title: 'Components/TextField',
  component: TextField,
} as Meta<typeof TextField>;

const Template: StoryFn<typeof TextField> = (args: any) => {
  const { control } = useForm();
  return (
    <React.Fragment>
      <TextField {...args} control={control} />
    </React.Fragment>
  );
};

export const Default = Template.bind({});
Default.args = {
  name: 'example',
  label: 'Example Label',
  rules: { required: 'This field is required' },
  sx: { marginBottom: 2 },
  errors: {},
};
