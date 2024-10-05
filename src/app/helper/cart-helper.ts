import { ICartItem } from '../model/cart';

export const getProductUniqueId = (
  id: string | undefined,
  cartItems: ICartItem[]
): string => {
  if (id === undefined) {
    throw new Error('Product ID is undefined');
  }

  const existingItems = new Set(cartItems.map((item) => item.id));

  let uniqueId = id;
  let counter = 1;

  if (counter === 1) {
    uniqueId = `${id}-${counter.toString().padStart(1, '0')}`;
  }

  while (existingItems.has(uniqueId)) {
    counter++;
    uniqueId = `${id}-${counter.toString().padStart(1, '0')}`;
  }

  existingItems.add(uniqueId);

  return uniqueId;
};
