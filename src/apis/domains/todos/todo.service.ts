import { BaseRepository } from './../base/base.service';
import { IAddTodoPayload, ITodo } from './todo.interface';

export class TodoService extends BaseRepository {
  public async getTodos(): Promise<ITodo[]> {
    return await this.httpClient.get('/todos');
  }

  public async addTodo(todo: IAddTodoPayload): Promise<ITodo> {
    return await this.httpClient.post('/todos', todo);
  }

  public async updateTodo(todo: IAddTodoPayload): Promise<ITodo> {
    return await this.httpClient.put(`/todos/${todo.id}`, todo);
  }
}
