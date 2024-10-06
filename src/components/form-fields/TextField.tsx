import React from 'react';

import { Controller, Control, FieldValues, Path } from 'react-hook-form';
import MUITextField from '@mui/material/TextField';

export interface TextFieldProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label: string;
  rules?: Record<string, unknown>;
  sx?: Record<string, unknown>;
  errors?: Record<string, unknown>;
}

const TextField = <T extends FieldValues>({
  name,
  control,
  label,
  rules,
  sx,
  errors,
}: TextFieldProps<T>) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <MUITextField
            sx={sx}
            helperText={error ? error.message : null}
            error={!!error}
            onChange={onChange}
            value={value}
            fullWidth
            label={label}
            variant="outlined"
          />
        )}
      />
    </>
  );
};

export default TextField;
