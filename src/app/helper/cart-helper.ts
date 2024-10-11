import { ICartItem } from '../model/cart';
import { IWhitelistItem } from '../model/whitelist';

export const getProductUniqueId = (
  id: string | undefined,
  cartItems: ICartItem[] | IWhitelistItem[]
): string => {
  if (id === undefined) {
    throw new Error('Product ID is undefined');
  }

  const existingItems = new Set(cartItems.map((item) => item.id.toString()));

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
