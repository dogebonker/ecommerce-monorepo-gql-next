import Fuse from 'fuse.js';
import { take, drop } from 'lodash';
import Product from '../services/product/product.type';
import Coupon from '../services/coupon/coupon.type';
import Order from '../services/order/order.type';

export const filterItems = (
  items?: Product[],
  limit: number = 10,
  offset: number = 0,
  text?: string,
  type?: string,
  category?: string
): any => {
  let filteredItems = items!;

  // Text filter
  const fuse = new Fuse(items!, {
    threshold: 0.3,
    minMatchCharLength: 2,
    keys: ['title'],
  });

  if (text && text !== '') {
    filteredItems = fuse.search(text);
  }
  // Type filter
  if (type) {
    filteredItems = filteredItems.filter(item => item.type === type);
  }
  // Category filter
  if (category && category.split(',').length) {
    filteredItems = filteredItems.filter((item: Product) => {
      const isAvailable = item.categories.find((cat: any) =>
        category.split(',').includes(`${cat.slug}`)
      );
      if (isAvailable) {
        return true;
      }
      return false;
    });
  }
  const hasMore = offset + limit < filteredItems.length;

  filteredItems = filteredItems.slice(offset, offset + limit);
  return { items: filteredItems, hasMore };
};

export const filterOrder = async (
  items?: Order[],
  user?: number,
  limit: number = 7,
  text?: string
): Promise<Order[]> => {
  let filteredItems = items!;

  // Text filter
  const fuse = new Fuse(items!, {
    keys: ['id', 'products.title'],
  });

  if (text && text !== '') {
    filteredItems = fuse.search(text);
  }
  // Type filter
  if (user) {
    filteredItems = filteredItems.filter(item => item.userId === user);
  }

  filteredItems = take(filteredItems, limit);
  return await filteredItems;
};

export const getRelatedItems = async (
  type?: string,
  slug?: string,
  items?: Product[]
): Promise<Product[]> => {
  let filteredItems = items!;
  const findRelated = take(
    await filteredItems.filter(
      item => item.type === type && item.slug !== slug
    ),
    10
  );
  return findRelated;
};
