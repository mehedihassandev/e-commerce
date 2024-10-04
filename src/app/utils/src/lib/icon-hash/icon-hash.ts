import {
  AutoAwesome,
  Facebook,
  Home,
  Instagram,
  LinkedIn,
  LocalOffer,
  Twitter
} from '@mui/icons-material';

export const iconHash = {
  home: Home,
  popular: AutoAwesome,
  offer: LocalOffer,
  facebook: Facebook,
  instagram: Instagram,
  twitter: Twitter,
  linkedin: LinkedIn
};

export type IconHashType = keyof typeof iconHash;
