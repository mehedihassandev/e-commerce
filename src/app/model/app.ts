import { IconHashType } from '../utils/src/lib/icon-hash';

export interface IMenu {
  id: string;
  linkTitle: string;
  linkUrl: string;
  icon?: IconHashType;
}
