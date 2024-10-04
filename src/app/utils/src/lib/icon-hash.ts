import { Contactless, Home, Info } from '@mui/icons-material';

export const iconHash = {
  home: Home,
  about: Info,
  contact: Contactless
};

export type IconHashType = keyof typeof iconHash;
