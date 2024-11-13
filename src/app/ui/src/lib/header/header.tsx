import { Favorite, Menu, ShoppingCart } from '@mui/icons-material';
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

  const whitelistItems = useSelector(
    (state: RootState) => state.whitelistReducer.whitelistedProducts
  );

  const handleOpenDrawer = () => {
    setDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <AppBar position="fixed">
      {/* Top green bar */}
      {/* <Box
        sx={{
          backgroundColor: theme.palette.primary.main,
          color: 'white',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '2px 10px'
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }} >
        <Typography>+1234567890</Typography>
        <Typography variant="body2">Welcome To Our Online Store!</Typography>
        <Box>
          <Button
            color="inherit"
            sx={{ color: 'white', textTransform: 'none' }}
          >
            $ Currency <ExpandMore />
          </Button>
          <Button
            color="inherit"
            sx={{ color: 'white', textTransform: 'none' }}
          >
            English <ExpandMore />
          </Button>
        </Box>
        </Toolbar>
      </Box> */}
      <ContentWrapper
        sx={{
          backgroundColor: 'white',
          color: 'black',
          boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
          px: {
            xs: 2,
            sm: 4,
            md: 6,
            lg: 10
          }
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
              color: 'black',
              textDecoration: 'none'
            }}
          >
            LOGO
          </Typography>

          {/* Search bar in the middle */}
          <Box
            sx={{
              flexGrow: 1,
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <InputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              sx={{
                color: 'black',
                backgroundColor: theme.palette.background.paper,
                borderRadius: 1,
                padding: '0 10px',
                width: '100%',
                maxWidth: '600px',
                border: `1px solid ${theme.palette.grey[300]}`
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
                  color: 'black',
                  display: 'block',
                  textDecoration: 'none',
                  fontSize: '1rem'
                }}
              >
                {menu.linkTitle}
              </Link>
            ))}

            <IconButton
              size="large"
              color="inherit"
              component={Link}
              to={LINKS.CART}
            >
              <Badge
                badgeContent={cartItems.length}
                sx={{
                  '& .MuiBadge-badge': {
                    backgroundColor: theme.palette.primary.main,
                    color: 'white'
                  }
                }}
              >
                <ShoppingCart
                  sx={{
                    color: theme.palette.primary.main
                  }}
                />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              color="inherit"
              component={Link}
              to={LINKS.FAVORITE}
            >
              <Badge
                badgeContent={whitelistItems.length}
                sx={{
                  '& .MuiBadge-badge': {
                    backgroundColor: theme.palette.primary.main,
                    color: 'white'
                  }
                }}
              >
                <Favorite
                  sx={{
                    color: theme.palette.primary.main
                  }}
                />
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
