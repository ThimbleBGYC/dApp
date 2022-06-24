import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/icons-material/Menu";
import Stack from "@mui/material/Stack";
import MuiNextLink from "./MuiNextLink";
import { useState } from "react";

const SideDrawer = ({ navLinks }) => {
  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 250, marginBottom: `auto` }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Stack sx={{justifyContent: "center", textAlign: "center"}}>
      <IconButton aria-label="home" >
                <MuiNextLink activeClassName="active" href='/'>
                <img alt="logo" src='/logo.png' width={"90%"}/>
                </MuiNextLink>
              </IconButton>
      {navLinks.map(({ title, path }, i) => (
        <Typography
          variant='button'
          key={`${title}${i}`}
          sx={{

            my: 2,
            textTransform: 'none',
          }}
        >
          
        </Typography>
      ))}
      </Stack>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent={"center"}
        paddingLeft={8}
        marginTop={4}
      >
        <MuiNextLink
          sx={{ textDecoration: "none", color: 'white' }}
          href="https://boardgameyawnclub.xyz/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/home.png" width="50%"/>
        </MuiNextLink>
        <MuiNextLink
          sx={{ textDecoration: "none", color: 'white' }}
          href="https://twitter.com/BoardGameYC"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/twitter.png" width="50%"/>
        </MuiNextLink>
        <MuiNextLink
        sx={{ textDecoration: "none", color: 'white' }}
        href="https://opensea.io/board-game-yawn-club"
        target="_blank"
        rel="noopener noreferrer"
        >
          <img src="/opensea.png" width="50%" />
        </MuiNextLink>
      </Stack>
      <Typography sx={{color: '#f8f12f', textAlign:"center"}}>
          © {new Date().getFullYear()} Board Game Yawn Club, All Rights Reserved
        </Typography>
    </Box>
  );

  return (
    <>
      <IconButton
        edge="start"
        aria-label="menu"
        onClick={toggleDrawer("right", true)}
        sx={{
          color: `#ffffff`,
          display: { xs: `inline`, md: `none` },
        }}
      >
        <Menu fontSize="large"/>
      </IconButton>
      <Drawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer("right", false)}
        sx={{
          ".MuiDrawer-paper": {
            bgcolor: "#000000",
          },
        }}
      >
        {list("right")}
      </Drawer>
    </>
  );
};

export default SideDrawer;
