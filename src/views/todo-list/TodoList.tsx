import React from 'react';

import { Checkbox, List, ListItem, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

import { ITodo } from '@apis/domains/todos/todo.interface';

const useStyles = makeStyles({
  list: {
    width: '50%',
    margin: 'auto',
    display: 'flex',
    justifyContent: 'space-around',
    border: '1px solid light-gray',
  },
  text: {
    width: '70%',
  },
});

interface IPropsTodoListPage {
  todos: ITodo[];
  handleChangeStatus: (todo: ITodo) => void;
}

export default function TodoList({
  todos,
  handleChangeStatus,
}: IPropsTodoListPage) {
  const classes = useStyles();

  return (
    <List>
      {todos?.map((todo) => {
        return (
          <>
            <ListItem divider={true} className={classes.list}>
              <Checkbox
                onClick={() => handleChangeStatus(todo)}
                checked={todo.completed}
              />

              <Typography
                className={classes.text}
                style={{ color: todo.completed ? 'green' : '' }}
                key={todo.id}
              >
                {todo.name}
              </Typography>
            </ListItem>
          </>
        );
      })}
    </List>
  );
}
