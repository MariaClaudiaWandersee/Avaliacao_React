import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

export const PageLayout = () => {
  const DrawerApp = () => (
    <Box style={{ minWidth: "260px" }}>
      <Typography variant="h5">Menu</Typography>
      <List>
        <ListItem>
          <ListItemButton to="/" LinkComponent={Link}>
            <ListItemText primary={"Home"} />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton to="/album" LinkComponent={Link}>
            <ListItemText primary={"Álbum"} />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton component="a" href="/sobre">
            <ListItemText primary={"Sobre"} />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton to="/noticias" LinkComponent={Link}>
            <ListItemText primary={"Notícias"} component="a" href="/noticias" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton to="/contato" LinkComponent={Link}>
            <ListItemText primary={"Contatos"} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const ContainerMenu = () => {
    const [aberto, setAberto] = useState(false);

    const lideComOMenu = () => {
      setAberto(!aberto);
    };

    return (
      <Box>
        <AppBar>
          <Toolbar>
            <IconButton onClick={lideComOMenu}>
              <MenuIcon></MenuIcon>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Box>
          <Drawer open={aberto} onClose={lideComOMenu}>
            <DrawerApp />
          </Drawer>
        </Box>
      </Box>
    );
  };

  return (
    <>
      <ContainerMenu />
      <Box style={{ marginTop: "80px" }}>
        <Outlet />
      </Box>
    </>
  );
};
