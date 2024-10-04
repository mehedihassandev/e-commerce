import { IMenu } from '../model/app';
import { ROUTES } from '../navigation/route-constant';

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
