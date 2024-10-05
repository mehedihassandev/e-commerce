import { AxiosError, AxiosResponse } from 'axios';
import { IRequestParamsOptions } from './type';

const API_URL = {
  GET_PRODUCTS:
    'https://Faker-API.proxy-production.allthingsdev.co/api/v1/companies'
};

export async function getProduct<R = any, D = any>(
  requestParamsOptions: IRequestParamsOptions<D>
): Promise<AxiosResponse<R>> {
  const { api, url, headers } = requestParamsOptions;

  try {
    const requestUrl = `${API_URL.GET_PRODUCTS}${url}`;

    const config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: requestUrl,
      headers: {
        'x-apihub-key': 'TRgRfuneznf1KZ29Uuf2jrQ0IuGiQBj2EnmodyxzP2DkRmuZvZ',
        'x-apihub-host': 'Faker-API.allthingsdev.co',
        'x-apihub-endpoint': '068a5941-4f63-4db1-a04d-efbbe5ed833b',
        ...headers
      }
    };

    const response = await api.request(config);

    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      return Promise.reject(error.message);
    }

    return Promise.reject(error);
  }
}
