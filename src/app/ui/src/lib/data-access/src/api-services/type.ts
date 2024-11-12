import axios from 'axios';

export interface IRequestParamsOptions {
  api: typeof axios;
  url: string;
  headers?: Record<string, string>;
}
