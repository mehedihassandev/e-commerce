import { IconHashType } from '../utils/src';

export interface IMenu {
  id: string;
  linkTitle: string;
  linkUrl: string;
  icon?: IconHashType;
}

export interface ISocialIcon {
  label: string;
  icon: IconHashType;
}
