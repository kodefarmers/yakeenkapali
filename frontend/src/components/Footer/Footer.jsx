import { Box, IconButton, Typography, Link } from "@mui/material";
import footerStyles from "../../styles/footerStyles";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  const { classes } = footerStyles();

  return (
    <Box className={classes.footer}>
      <Box>
        <Link href="#home" variant="h4" className={classes.footerTitle}>
          yakeenkapali.
        </Link>
      </Box>
      <Box className={classes.footerSocials}>
        <IconButton
          href="https://instagram.com/paubha_"
          target="_blank"
          rel="noopener"
        >
          <InstagramIcon />
        </IconButton>

        <IconButton
          href="https://dribbble.com/yakeenkapali"
          target="_blank"
          rel="noopener"
        >
          <img
            src="/dribbble.svg"
            alt="Dribbble"
            width={22}
            height={22}
            style={{ filter: "invert(1)" }}
          />
        </IconButton>

        <IconButton
          href="https://www.linkedin.com/in/yakeenkapali/"
          target="_blank"
          rel="noopener"
        >
          <LinkedInIcon />
        </IconButton>
      </Box>
      <Box className={classes.footerCopyrights}>
        <Typography variant="outline">
          &copy; {new Date().getFullYear()} yakeenkapali. All rights reserved
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
