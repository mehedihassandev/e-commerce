import { Menu, ShoppingCart } from '@mui/icons-material';
import {
  AppBar,
  Badge,
  Box,
  Drawer,
  IconButton,
  InputBase,
  List,
  Toolbar,
  Typography,
  useTheme
} from '@mui/material';
import { createElement, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { menus } from '../../../../layout/menus';
import { LINKS } from '../../../../navigation/route-constant';
import { RootState } from '../../../../redux/store';
import { ContentWrapper, iconHash } from '../../../../utils/src';

export const Header = () => {
  const theme = useTheme();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const cartItems = useSelector(
    (state: RootState) => state.cartReducer.cartItems
  );

  const handleOpenDrawer = () => {
    setDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <AppBar position="fixed">
      <ContentWrapper
        sx={{
          backgroundColor: theme.palette.secondary.main,
          color: 'white',
          boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)'
        }}
      >
        <Toolbar disableGutters>
          {/* Logo on the left */}
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to={LINKS.HOME}
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none'
            }}
          >
            LOGO
          </Typography>

          {/* Search bar in the middle */}
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
            <InputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              sx={{
                color: 'black',
                backgroundColor: theme.palette.background.paper,
                borderRadius: 1,
                padding: '0 10px',
                width: '100%',
                maxWidth: '600px'
              }}
            />
          </Box>

          {/* Menu items on the right */}
          <Box
            sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}
          >
            {menus.map((menu) => (
              <Link
                key={menu.id}
                to={menu.linkUrl}
                style={{
                  margin: '0 10px',
                  color: 'white',
                  display: 'block',
                  textDecoration: 'none',
                  fontSize: '1rem'
                }}
              >
                {menu.linkTitle}
              </Link>
            ))}

            <IconButton size="large" color="inherit">
              <Badge badgeContent={cartItems.length} color="default">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </Box>

          {/* Drawer for mobile view */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenDrawer}
              color="inherit"
            >
              <Menu />
            </IconButton>
            <Drawer
              anchor="left"
              open={drawerOpen}
              onClose={handleCloseDrawer}
              sx={{ display: { xs: 'block', md: 'none' } }}
              PaperProps={{ style: { width: '80%' } }}
            >
              <Typography variant="h6" sx={{ p: 2, textAlign: 'center' }}>
                LOGO
              </Typography>
              <List>
                {menus.map((menu) => (
                  <Link
                    key={menu.id}
                    to={menu.linkUrl}
                    style={{ textDecoration: 'none' }}
                    onClick={handleCloseDrawer}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        p: '5px 8px'
                      }}
                    >
                      {menu.icon && (
                        <Box sx={{ mr: 1, color: theme.palette.grey[800] }}>
                          {createElement(iconHash[menu.icon])}
                        </Box>
                      )}
                      <Typography
                        sx={{
                          pb: 0.5,
                          fontSize: '1.1rem',
                          color: 'black',
                          textDecoration: 'none'
                        }}
                      >
                        {menu.linkTitle}
                      </Typography>
                    </Box>
                  </Link>
                ))}
              </List>
            </Drawer>
          </Box>
        </Toolbar>
      </ContentWrapper>
    </AppBar>
  );
};
export default Header;
