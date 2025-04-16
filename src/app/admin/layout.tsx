import { Box, Container } from '@mui/material';
import { WelcomeBanner } from '@/page-components/admin/WelcomeBanner';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container sx={{ height: '100%' }}>
      <Box
        display="flex"
        justifyContent="space-between"
        gap="52px"
        sx={{ height: '100%' }}
      >
        <WelcomeBanner />
        {children}
      </Box>
    </Container>
  );
}
