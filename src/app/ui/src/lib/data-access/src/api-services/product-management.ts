import { AxiosError, AxiosResponse } from 'axios';
import { IRequestParamsOptions } from './type';

const API_URL = {
  GET_PRODUCTS: 'https://fakestoreapi.com/products'
};

export async function gerProduct<R = any, D = any>(
  requestParamsOptions: IRequestParamsOptions<D>
): Promise<AxiosResponse<R>> {
  const { api, url, headers } = requestParamsOptions;

  try {
    const requestUrl = API_URL.GET_PRODUCTS + url;
    const response = await api.get<R>(requestUrl, { headers });

    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      return Promise.reject(error.message);
    }

    return Promise.reject(error);
  }
}
