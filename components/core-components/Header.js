import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/system";
import MuiNextLink from "@components/core-components/MuiNextLink";
import Navbar from '@components/core-components/Navbar'
import SideDrawer from "@components/core-components/SideDrawer";
import Fab from "@mui/material/Fab";
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";
import BackToTop from "@components/core-components/BackToTop";
import { Stack } from "@mui/material";


const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

export const navLinks = [
  { title: 'Home', path: 'https://boardgameyawnclub.xyz/'},
];

const Header = () => {
  return (
    <>
    {/* <HideOnScroll> */}
        <AppBar position="fixed" sx={{ display: `flex`, alignItems: `flex-end`, backgroundColor: '#000000', color: '#ffffff'}} elevation={0}>
          <Toolbar>
            <Container
              maxWidth="lg"
              sx={{ display: `flex`, justifyContent: `space-between`, alignItems: 'flex-end' }}
            >
              <Stack direction="row" alignItems='center'>
                <Navbar navLinks={navLinks}/>
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
        href="https://opensea.io/collection/boardgameyawnclub"
        target="_blank"
        rel="noopener noreferrer"
        >
          <img src="/opensea.png" width="50%" />
        </MuiNextLink>
                <SideDrawer navLinks={navLinks} />
              </Stack>
            </Container>
          </Toolbar>
        </AppBar>
      {/* </HideOnScroll> */}
      <Offset id="back-to-top-anchor" />
      <BackToTop>
        <Fab color="fc8ffcf" size="large" aria-label="back to top">
          <KeyboardArrowUp />
        </Fab>
      </BackToTop>
    </>
  );
};

export default Header;
