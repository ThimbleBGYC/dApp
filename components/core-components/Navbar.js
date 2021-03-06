import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import MuiNextLink from "@components/core-components/MuiNextLink";

const Navbar = ({ navLinks }) => {
  return (
    <Toolbar
      component="nav"
      sx={{ 
        display: { xs: `none`, md: `flex` },
      }}
    >
      <Stack direction="row" spacing={1}>
        {navLinks.map(({ title, path }, i) => (
          <MuiNextLink
            key={`${title}${i}`}
            href={path}
            variant="button"
            sx={{ fontSize: '20px', color: '#ffffff', textDecoration: 'none', textTransform: 'none',  }}
          >
            {title}
          </MuiNextLink>
        ))}
      </Stack>
    </Toolbar>
  );
};

export default Navbar;
