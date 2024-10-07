import { Box, Grid, IconButton, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { createElement } from 'react';
import { Link } from 'react-router-dom';
import { socialMedia } from '../../../../constant/footer-constant';
import { menus } from '../../../../layout/menus';
import { ContentWrapper, iconHash } from '../../../../utils/src';

const FooterLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.secondary,
  textDecoration: 'none',
  marginRight: theme.spacing(3),
  transition: 'color 0.3s',
  '&:hover': {
    color: theme.palette.primary.main
  },
  '&:focus': {
    outline: '2px solid',
    outlineColor: theme.palette.primary.main,
    outlineOffset: '2px'
  }
}));

const SocialIcon = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.secondary,
  marginLeft: theme.spacing(2),
  transition: 'color 0.3s, transform 0.3s',
  '&:hover': {
    color: theme.palette.primary.main,
    transform: 'scale(1.1)'
  },
  '&:focus': {
    outline: '2px solid',
    outlineColor: theme.palette.primary.main,
    outlineOffset: '2px'
  }
}));

export const Footer = () => {
  return (
    <ContentWrapper
      sx={{
        backgroundColor: '#f5f5f5',
        boxShadow: '0px -2px 10px rgba(0, 0, 0, 0.1)',
        padding: '40px 150px',
        marginTop: '50px'
      }}
    >
      <Grid container>
        <Grid item xs={12} md={6}>
          <Box display="flex" flexWrap="wrap">
            {menus.map((menu) => (
              <FooterLink key={menu.id} to={menu.linkUrl}>
                {menu.linkTitle}
              </FooterLink>
            ))}
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box display="flex" justifyContent="flex-end">
            {socialMedia.map((media, index) => (
              <SocialIcon
                key={index}
                aria-label={media.label}
                rel="noopener noreferrer"
              >
                {createElement(iconHash[media.icon as keyof typeof iconHash])}
              </SocialIcon>
            ))}
          </Box>
        </Grid>
      </Grid>
      <Box mt={3} textAlign="center">
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()}
          <Box
            component="a"
            href="https://www.mehedihassan.me/"
            target="_blank"
            sx={{
              color: 'primary.main',
              textTransform: 'capitalize',
              fontWeight: 'bold',
              textDecoration: 'none',
              display: 'inline-block',
              p: 1,
              '&:hover': {
                textDecoration: 'underline'
              }
            }}
          >
            Md. Mehedi Hassan.
          </Box>
          All rights reserved.
        </Typography>
      </Box>
    </ContentWrapper>
  );
};

export default Footer;
