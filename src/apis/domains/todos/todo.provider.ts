import { axiosInstance } from '../../../utils/httpClient';
import { TodoService } from './todo.service';

const todoResource = new TodoService(axiosInstance);

export { todoResource };
