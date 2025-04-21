import { FC } from 'react';
import Image from 'next/image';
import { Box, Typography } from '@mui/material';
import { useTranslation } from '@/lib/i18n';
import logoImage from '@/assets/images/logo.png';
import { adminTrns, NC } from './trns';

const LOGO_ALT = 'Treedis clone logo';

interface Props {
  locale: string;
}

export const WelcomeBanner: FC<Props> = async ({ locale }) => {
  const { t: tAdmin } = await useTranslation(locale, NC);

  return (
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
        {tAdmin(adminTrns.bannerLine1)}&nbsp;
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
          {tAdmin(adminTrns.bannerHighlight)}
        </Typography>
        <br />
        {tAdmin(adminTrns.bannerLine2)}
        <br />
        {tAdmin(adminTrns.bannerLine3)}
      </Typography>
    </Box>
  );
};
