import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import TodoList from './TodoList';
import { ITodo } from '../../apis/domains/todos/todo.interface';

const mockTodos = [
  { id: '1', name: 'Task 1', completed: false },
  { id: '2', name: 'Task 2', completed: true },
];

const mockHandleChangeStatus = jest.fn();

describe('TodoList Component', () => {
  test('renders todos correctly', () => {
    render(
      <TodoList todos={mockTodos} handleChangeStatus={mockHandleChangeStatus} />
    );

    const task1 = screen.getByText('Task 1');
    const task2 = screen.getByText('Task 2');

    expect(task1).toBeTruthy();
    expect(task2).toBeTruthy();
  });

  test('checkboxes reflect the correct completion status', () => {
    render(
      <TodoList todos={mockTodos} handleChangeStatus={mockHandleChangeStatus} />
    );

    const checkboxes = screen.getAllByRole('checkbox');

    expect(checkboxes[0]).toHaveProperty('checked', false);
    expect(checkboxes[1]).toHaveProperty('checked', true);
  });

  test('calls handleChangeStatus when checkbox is clicked', () => {
    render(
      <TodoList todos={mockTodos} handleChangeStatus={mockHandleChangeStatus} />
    );

    const checkboxes = screen.getAllByRole('checkbox');

    fireEvent.click(checkboxes[0]);
    expect(mockHandleChangeStatus).toHaveBeenCalledWith(mockTodos[0]);

    fireEvent.click(checkboxes[1]);
    expect(mockHandleChangeStatus).toHaveBeenCalledWith(mockTodos[1]);
  });
});
