import Image from 'next/image';
import { Box, Typography } from '@mui/material';
import logoImage from '@/assets/images/logo.png';

const LOGO_ALT = 'Treedis clone logo';

export const WelcomeBanner = () => (
  <Box
    sx={{
      display: {
        xs: 'none',
        md: 'flex',
      },
      flexDirection: 'column',
      justifyContent: 'center',
      flexBasis: '100%',
      height: '100%',
    }}
  >
    <Box display="flex">
      <Image src={logoImage} alt={LOGO_ALT} width={35} height={50} />
    </Box>

    <Typography variant="h1">
      Take &nbsp;
      <Typography
        component="span"
        variant="inherit"
        sx={{
          display: 'inline-block',
          backgroundColor: 'primary.main',
          color: 'common.white',
          paddingInline: '4px',
          borderRadius: '10px',
        }}
      >
        reality
      </Typography>
      <br />
      to the next
      <br />
      level
    </Typography>
  </Box>
);
