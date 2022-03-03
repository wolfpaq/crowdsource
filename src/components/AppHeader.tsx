import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CognitoUserInterface } from '@aws-amplify/ui-components';
import { AppBar, Box, IconButton, Link, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import { useIsAdminUser } from '../hooks/useIsAdminUser';

const PREFIX = 'Home';

const classes = {
  container: `${PREFIX}-container`,
  logo: `${PREFIX}-logo`,
  menu: `${PREFIX}-menu`,
  name: `${PREFIX}-name`,
};

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  [`&.${classes.container}`]: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    marginBottom: theme.spacing(3),
  },

  [`& .${classes.logo}`]: {
    width: 45,
    margin: theme.spacing(1),
  },

  [`& .${classes.menu}`]: {
    marginTop: 'auto',
    marginBottom: 'auto',
  },

  [`& .${classes.name}`]: {
    paddingRight: theme.spacing(1),
  },
}));

export default function AppHeader({
  signOut,
  user,
}: {
  signOut: () => void;
  user: CognitoUserInterface;
}) {
  const { t } = useTranslation('common');
  const navigate = useNavigate();
  const isAdmin = useIsAdminUser(user);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const openMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorEl(null);
  };

  const gotoAbout = () => {
    console.log('gotoAbout');
    closeMenu();
    // history.push('/about');
  };

  const gotoAdmin = () => {
    console.log('gotoAdmin');
    closeMenu();
    navigate('/admin');
  };

  const gotoHome = (evt: any) => {
    console.log('gotoHome', evt);
    // closeMenu();
    evt.preventDefault();
    navigate('/');
  };

  const logout = () => {
    closeMenu();
    signOut();
    // authService.logout();
  };
  return (
    <StyledAppBar position="static" className={classes.container}>
      <Link href="#" onClick={gotoHome}>
        <img className={classes.logo} alt="logo" src="/logo.svg" />
      </Link>
      <Box component="div" className={classes.menu}>
        <Box component="span" className={classes.name}>
          {user.attributes?.email}
        </Box>
        <IconButton onClick={openMenu} color="inherit" size="large">
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={open}
          onClose={closeMenu}>
          {isAdmin && (
            <MenuItem onClick={gotoAdmin}>{t('admin.admin')}</MenuItem>
          )}
          <MenuItem onClick={gotoAbout}>{t('app.about')}</MenuItem>
          <MenuItem onClick={logout}>{t('app.logout')}</MenuItem>
        </Menu>
      </Box>
    </StyledAppBar>
  );
}
