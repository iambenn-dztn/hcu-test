import React from 'react';

import { Box, FormControl, MenuItem, Select } from '@mui/material';

const filterOptions = [
  {
    value: 'all',
    label: 'All',
  },
  {
    value: 'completed',
    label: 'Completed',
  },
  {
    value: 'uncompleted',
    label: 'Uncompleted',
  },
];

interface IPropsFilterTodo {
  filter: { completed: string };
  handleFilterChange: (event: any) => void;
}

export default function FilterTodo({
  filter,
  handleFilterChange,
}: IPropsFilterTodo) {
  return (
    <Box display="flex" alignItems="center" gap={1}>
      <FormControl sx={{ mt: 1, width: 150 }}>
        <Select value={filter.completed} onChange={handleFilterChange}>
          {filterOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
