import React from 'react';

import { Box, TextField, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';

interface IFormInput {
  name: string;
}

interface IPropsTodoForm {
  onSubmit: SubmitHandler<IFormInput>;
}

const useStyles = makeStyles({
  addButton: {
    height: 55,
    marginBottom: 30,
    width: '150px',
  },
});

export default function TodoForm({ onSubmit }: IPropsTodoForm) {
  const classes = useStyles();
  const {
    handleSubmit,
    control,
    formState: { errors, isDirty },
    reset,
  } = useForm<IFormInput>({
    defaultValues: {
      name: '',
    },
  });

  const handleAddTodo = async (data: IFormInput) => {
    await onSubmit(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(handleAddTodo)}>
      <Box display="flex">
        <Controller
          name="name"
          control={control}
          rules={{
            required: 'This is required field',
            validate: (value: string) => {
              const trimmedValue = value.trim();

              return trimmedValue.length > 0 || 'This is required';
            },
          }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Type your task..."
              error={!!errors.name}
              fullWidth
              helperText={errors.name ? errors.name.message : ''}
            />
          )}
        />

        <Button
          type="submit"
          size="large"
          variant="contained"
          color="primary"
          className={classes.addButton}
          disabled={!isDirty || !!errors.name}
        >
          Add Task
        </Button>
      </Box>
    </form>
  );
}
