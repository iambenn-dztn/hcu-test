import { AxiosInstance } from 'axios';
import { AxiosClient, IAxiosClient } from '../../../utils/AxiosClient';

export abstract class BaseRepository {
  protected httpClient: IAxiosClient;

  constructor(axiosClient: AxiosInstance) {
    this.httpClient = new AxiosClient(axiosClient);
  }
}
