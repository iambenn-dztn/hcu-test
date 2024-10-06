export interface ITodo {
  id: string;
  name: string;
  completed: boolean;
}

export interface IAddTodoPayload {
  id?: string;
  name: string;
  completed: boolean;
}
