interface IRating {
  rate: number;
  count: number;
}
export interface ICartItem {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: IRating;
  quantity: number;
}
