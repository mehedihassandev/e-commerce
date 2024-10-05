import { ROUTES } from '../navigation/route-constant';
import { IMenu } from '../ui/src/lib/data-access/src';

export const menus: IMenu[] = [
  {
    id: 'home',
    linkTitle: 'Home',
    linkUrl: ROUTES.HOME,
    icon: 'home'
  },
  {
    id: 'popular',
    linkTitle: 'Popular',
    linkUrl: ROUTES.POPULAR,
    icon: 'popular'
  },
  {
    id: 'offers',
    linkTitle: 'Offers',
    linkUrl: ROUTES.OFFERS,
    icon: 'offer'
  }
];
