'use client';

import { FC } from 'react';
import { useRouter } from 'next/navigation';
import { Box, Button } from '@mui/material';
import { useTranslation as useTranslationClient } from '@/lib/i18n/client';
import { LANGUAGES_WITH_RTL } from '@/constants/languagesWithRtl';
import { adminTrns, NC } from './trns';

interface Props {
  locale: string;
}

export const ToggleButton: FC<Props> = ({ locale }) => {
  const isRtl = LANGUAGES_WITH_RTL.includes(locale);

  const { t: tAdmin } = useTranslationClient(locale, NC);
  const router = useRouter();

  const handleChangeLanguage = () => {
    const language = locale === 'en' ? 'he' : 'en';

    const currentPath = window.location.pathname;
    const newPath = currentPath.replace(`/${locale}`, `/${language}`);
    router.push(newPath);
  };

  return (
    <Box
      sx={{
        position: 'absolute',
        top: '5%',
        right: !isRtl ? 0 : 'auto',
        left: isRtl ? 0 : 'auto',
      }}
    >
      <Button sx={{ height: 'auto' }} onClick={handleChangeLanguage}>
        {tAdmin(adminTrns.toggleButton)}
      </Button>
    </Box>
  );
};
