import React from 'react';

import { Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { SubmitHandler } from 'react-hook-form';

import { ITodo } from '../../apis/domains/todos/todo.interface';
import FilterTodo from './Filter';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const useStyles = makeStyles({
  container: {
    textAlign: 'center',
    width: '50% !important',
    marginTop: '100px !important',
  },
});

interface IFormInput {
  name: string;
}

interface IPropsTodoListPage {
  onSubmit: SubmitHandler<IFormInput>;
  filter: { completed: string };
  handleFilterChange: (event: any) => void;
  todos: ITodo[];
  handleChangeStatus: (todo: ITodo) => void;
}

export default function TodoListPage({
  onSubmit,
  filter,
  handleFilterChange,
  todos,
  handleChangeStatus,
}: IPropsTodoListPage) {
  const classes = useStyles();

  const handleAddTodo = async (data: IFormInput) => {
    await onSubmit(data);
  };

  return (
    <Container className={classes.container}>
      <TodoForm onSubmit={handleAddTodo} />

      <FilterTodo filter={filter} handleFilterChange={handleFilterChange} />

      <TodoList todos={todos} handleChangeStatus={handleChangeStatus} />
    </Container>
  );
}
