import axios from 'axios';

export interface IRequestParamsOptions<D> {
  api: typeof axios;
  url: string;
  headers?: Record<string, string>;
}
