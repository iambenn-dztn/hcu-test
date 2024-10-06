import { AxiosError } from 'axios';

export interface IHttpErrorBody {
  code?: string;
  message: string;
}

export class BaseError extends Error {
  constructor(message?: string) {
    super(message);
    this.name = new.target.name;
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export class HttpError extends BaseError {
  protected readonly axiosError: AxiosError;
  public readonly errorCode?: string;
  public readonly status: number = 500;

  constructor(error: AxiosError) {
    super(error.message);
    this.axiosError = error;

    if (this.axiosError.response) {
      const errorBody = this.axiosError.response.data as IHttpErrorBody;
      this.errorCode = errorBody?.code || 'unknown';
      this.message = errorBody?.message || 'Internal Server Error';
      this.status = this.axiosError.response.status;
    } else {
      this.message = 'Network Error';
    }
  }
}
