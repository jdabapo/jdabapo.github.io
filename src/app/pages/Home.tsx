import {
  Box,
  Grid,
  IconButton,
  Link,
  Stack,
  Tooltip,
  Typography,
<<<<<<< HEAD
} from '@mui/material';
import React, { useEffect } from 'react';
import logo from '../../static/favicon.png';
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFile,
} from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
=======
} from "@mui/material";
import React, { useEffect } from "react";
import logo from "../../static/favicon.png";
import { useLocation } from "react-router-dom";
import { links } from "./links";
>>>>>>> c4a0a05ae7ea1961db305a8a20f2f30eb74c9e99

interface Props {
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
}

export default function Home({ setSelectedIndex }: Props) {
  const { pathname } = useLocation();
  useEffect(() => {
    setSelectedIndex(-1);
  }, [setSelectedIndex]);

  useEffect(() => {
    document.title = process.env.REACT_APP_NAME!;
  }, [pathname]);

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: `calc(100vh - 20px - 33px)` }}
    >
      <Grid item xs={3}>
<<<<<<< HEAD
        <Stack direction={{ xs: 'column', sm: 'row-reverse' }} spacing={2}>
          <Box display="flex" sx={{ justifyContent: 'center' }}>
=======
        <Stack direction={{ xs: "column", sm: "row-reverse" }} spacing={2}>
          <Box display="flex" sx={{ justifyContent: "center" }}>
            <img src={logo} width="100px" alt="logo" />
>>>>>>> c4a0a05ae7ea1961db305a8a20f2f30eb74c9e99
          </Box>
          <Box>
            <Grid
              display="flex"
              justifyContent={{ xs: "center", sm: "flex-start" }}
            >
<<<<<<< HEAD
              <Typography variant="h3">Jeremy Abapo</Typography>
=======
              <Typography variant="h3">{process.env.REACT_APP_NAME}</Typography>
>>>>>>> c4a0a05ae7ea1961db305a8a20f2f30eb74c9e99
            </Grid>
            <Grid
              display="flex"
              justifyContent={{ xs: "center", sm: "flex-start" }}
            >
            </Grid>
            <Grid
              display="flex"
              justifyContent={{ xs: "center", sm: "flex-start" }}
            >
              <Stack direction="row" spacing={0.4}>
<<<<<<< HEAD
                <Tooltip title="Github" arrow>
                  <Link
                    target="_blank"
                    href={'https://github.com/jdabapo'}
                    underline="none"
                    color="inherit"
                  >
                    <IconButton color="inherit">
                      <FaGithub />
                    </IconButton>
                  </Link>
                </Tooltip>
                <Tooltip title="LinkedIn" arrow>
                  <Link
                    target="_blank"
                    href={'https://www.linkedin.com/in/jeremy-abapo/'}
                    underline="none"
                    color="inherit"
                  >
                    <IconButton color="inherit">
                      <FaLinkedin />
                    </IconButton>
                  </Link>
                </Tooltip>
                <Tooltip title="Mail" arrow>
                  <Link
                    target="_blank"
                    href={'mailto:jeremyabapoapps@gmail.com'}
                    underline="none"
                    color="inherit"
                  >
                    <IconButton color="inherit">
                      <FaEnvelope />
                    </IconButton>
                  </Link>
                </Tooltip>
                <Tooltip title="Resume" arrow>
                  <Link
                    target="_blank"
                    href={'"https://drive.google.com/file/d/1HKKDhBhXP0dS-qin0Z_pyZclCr30T1ZG/view?usp=sharing"'}
                    underline="none"
                    color="inherit"
                  >
                    <IconButton color="inherit">
                      <FaFile />
                    </IconButton>
                  </Link>
                </Tooltip>
=======
                {links.map((link) => (
                  <Tooltip key={link.index} title={link.title} arrow>
                    <Link
                      target="_blank"
                      href={link.href}
                      underline="none"
                      color="inherit"
                    >
                      <IconButton color="inherit">{link.icon}</IconButton>
                    </Link>
                  </Tooltip>
                ))}
>>>>>>> c4a0a05ae7ea1961db305a8a20f2f30eb74c9e99
              </Stack>
            </Grid>
          </Box>
        </Stack>
      </Grid>
    </Grid>
  );
}
