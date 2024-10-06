import {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';
import { HttpError } from './errors';

export interface IAxiosClient {
  get<T>(endPoint: string, config?: AxiosRequestConfig): Promise<T>;

  post<T, S>(
    endPoint: string,
    body: S,
    config?: AxiosRequestConfig
  ): Promise<T>;

  put<T, S>(endPoint: string, body: S, config?: AxiosRequestConfig): Promise<T>;

  delete<T>(endPoint: string, config?: AxiosRequestConfig): Promise<T>;
}

export class AxiosClient implements IAxiosClient {
  protected httpClient: AxiosInstance;

  constructor(httpClient: AxiosInstance) {
    this.httpClient = httpClient;
  }

  public async get<T>(
    endPoint: string,
    config?: AxiosRequestConfig
  ): Promise<T> {
    return this.httpClient
      .get<T>(endPoint, config)
      .then((response) => response.data)
      .catch((err) => {
        throw new HttpError(err as AxiosError);
      });
  }

  public async post<T, S>(
    endPoint: string,
    body: S,
    config?: AxiosRequestConfig
  ): Promise<T> {
    return this.httpClient
      .post<T>(endPoint, body, config)
      .then((response) => response.data)
      .catch((err) => {
        throw new HttpError(err as AxiosError);
      });
  }

  public async put<T, S>(
    endPoint: string,
    body: S,
    config?: AxiosRequestConfig
  ): Promise<T> {
    return this.httpClient
      .put<T>(endPoint, body, config)
      .then((response) => response.data)
      .catch((err) => {
        throw new HttpError(err as AxiosError);
      });
  }

  public async delete<T>(
    endPoint: string,
    config?: AxiosRequestConfig
  ): Promise<T> {
    return this.httpClient
      .delete<T>(endPoint, config)
      .then((response) => response.data)
      .catch((err) => {
        throw new HttpError(err as AxiosError);
      });
  }

  protected invalidApiResponseError(response: AxiosResponse): AxiosError {
    const err = new Error('Invalid API response') as AxiosError;
    const errRes: AxiosResponse = response;
    errRes.status = 500;
    errRes.data = {
      code: 500,
      message: 'Invalid API response',
    };
    err.response = errRes;
    err.isAxiosError = true;
    throw err;
  }
}
