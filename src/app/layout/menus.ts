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
    id: 'about',
    linkTitle: 'About',
    linkUrl: ROUTES.ABOUT,
    icon: 'about'
  },
  {
    id: 'contact',
    linkTitle: 'Contact',
    linkUrl: ROUTES.CONTACT,
    icon: 'contact'
  }
];
