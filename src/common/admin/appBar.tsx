import { AppBar, TitlePortal, ToggleThemeButton } from 'react-admin';
import SettingsIcon from '@mui/icons-material/Settings';
import { IconButton } from '@mui/material';

const SettingsButton = () => (
  <IconButton color="inherit">
    <SettingsIcon />
  </IconButton>
);

export const CustomAppBar = () => (
  <AppBar>
    <TitlePortal />
    <ToggleThemeButton />
    <SettingsButton />
  </AppBar>
);
