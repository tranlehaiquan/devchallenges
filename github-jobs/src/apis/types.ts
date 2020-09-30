import { AxiosRequestConfig } from 'axios';

export interface ErrorResponseBody {
  code: number;
  message: string;
}

export interface GenericAxiosErrorResponse<T> {
  data: T;
  status: number;
  statusText: string;
  headers: any;
  config: AxiosRequestConfig;
}

export interface GenericAxiosError<T> extends Error {
  config: AxiosRequestConfig;
  code?: string;
  response?: GenericAxiosErrorResponse<T>;
}

type Paging = {
  pageIndex: number;
  pageTotal: number;
  itemTotal: number;
};

export interface GenericResponseBody<T> {
  code: number;
  data: T;
  message: string;
  paging?: Paging;
}

export type ErrorResponse = GenericAxiosError<ErrorResponseBody>;
