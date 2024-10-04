import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { createElement, useState } from 'react';
import { Link } from 'react-router-dom';

import { Drawer, List, useTheme } from '@mui/material';
import { iconHash } from '../utils/src/lib/icon-hash';
import { menus } from './menus';

export function Header() {
  const theme = useTheme();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleOpenDrawer = () => {
    setDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href=""
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

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenDrawer}
              color="inherit"
            >
              <MenuIcon />
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

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none'
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {menus.map((menu) => (
              <Link
                key={menu.id}
                to={menu.linkUrl}
                style={{
                  margin: '0 10px',
                  color: 'white',
                  display: 'block',
                  textDecoration: 'none', // Add this to remove underline
                  fontSize: '1rem'
                }}
              >
                {menu.linkTitle}
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
