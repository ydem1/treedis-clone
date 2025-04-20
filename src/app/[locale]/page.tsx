import { Box, Button, Typography } from '@mui/material';
import { LocalizedLink } from '@/components/Link';
import { useTranslation } from '@/lib/i18n';
import { PATHNAMES } from '@/constants/routes';

export default async function Home({ params }: { params: { locale: string } }) {
  const { locale } = await params;

  const { t: tHero } = await useTranslation(locale, 'admin');

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <Typography variant="h1" sx={{ marginBottom: '' }}>
        Welcome!
      </Typography>

      <Box
        sx={{
          display: 'flex',
          gap: '20px',
          alignItems: 'center',
        }}
      >
        <LocalizedLink href={PATHNAMES.LOGIN}>
          <Button type="submit" color="primary">
            {tHero('name')}
          </Button>
        </LocalizedLink>

        <LocalizedLink href={PATHNAMES.REGISTER}>
          <Button type="submit" color="primary">
            {tHero('name')}
          </Button>
        </LocalizedLink>
      </Box>
    </Box>
  );
}
