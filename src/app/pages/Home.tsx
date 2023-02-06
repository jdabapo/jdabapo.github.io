import {
  Box,
  Grid,
  IconButton,
  Link,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material';
import React, { useEffect } from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFile,
} from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

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
        <Stack direction={{ xs: 'column', sm: 'row-reverse' }} spacing={2}>
          <Box display="flex" sx={{ justifyContent: 'center' }}>
          </Box>
          <Box>
            <Grid
              display="flex"
              justifyContent={{ xs: "center", sm: "flex-start" }}
            >
              <Typography variant="h3">Jeremy Abapo</Typography>
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
              </Stack>
            </Grid>
          </Box>
        </Stack>
      </Grid>
    </Grid>
  );
}
