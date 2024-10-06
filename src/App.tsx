import React, { useEffect, useState } from 'react';

import { SubmitHandler } from 'react-hook-form';

import { IAddTodoPayload, ITodo } from './apis/domains/todos/todo.interface';
import { todoResource } from './apis/domains/todos/todo.provider';
import { useFetchQuery } from './utils/useFetchQuery';
import TodoListPage from './views/todo-list';

interface IFormInput {
  name: string;
}

const App: React.FC = () => {
  const { data, refetch } = useFetchQuery(() => todoResource.getTodos());

  const [filter, setFilter] = useState({
    completed: 'all',
  });
  const [allTodos, setAllTodos] = useState<ITodo[]>([]);

  const onSubmit: SubmitHandler<IFormInput> = async (data: IFormInput) => {
    await todoResource.addTodo({
      name: data.name,
      completed: false,
    });

    refetch();
  };

  const handleFilterChange = (e: any) => {
    setFilter((prev) => ({
      ...prev,
      completed: e.target.value as string,
    }));
  };

  const handleChangeStatus = async (todo: IAddTodoPayload) => {
    await todoResource.updateTodo({
      ...todo,
      completed: !todo.completed,
    });

    refetch();
  };

  useEffect(() => {
    if (!data) return;

    if (filter.completed === 'all') {
      setAllTodos(data);
      return;
    }

    const newAllTodos = data.filter((todo) => {
      if (filter.completed === 'completed') {
        return todo.completed;
      }

      return !todo.completed;
    });

    setAllTodos(newAllTodos);
  }, [data, filter]);

  useEffect(() => {
    if (!data) return;
    setAllTodos(data);
  }, [data]);

  return (
    <TodoListPage
      onSubmit={onSubmit}
      filter={filter}
      handleFilterChange={handleFilterChange}
      todos={allTodos}
      handleChangeStatus={handleChangeStatus}
    />
  );
};

export default App;
