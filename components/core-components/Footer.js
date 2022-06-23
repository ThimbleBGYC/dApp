import Box from "@mui/material/Box";
import styles from '@styles/Home.module.css';
import Typography from '@mui/material/Typography';
import { Stack } from "@mui/material";

const Footer = () => {
  return (
  <Box component="footer" alignItems="center" className={styles.footer} sx={{ py: 5, px: 4 }}>
        <Stack>
        <Typography >
          © {new Date().getFullYear()} Board Game Yawn Club, All Rights Reserved
        </Typography>
      </Stack>
  </Box>);
};

export default Footer;
