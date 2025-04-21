import { Container } from '@mui/material';
import { WelcomeBanner } from '@/page-components/admin/WelcomeBanner';
import styles from './layout.module.css';

export default async function AdminLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = await params;

  return (
    <div className={styles.wrapper}>
      <Container sx={{ height: '100%' }}>
        <div className={styles.content}>
          <WelcomeBanner locale={locale} />
          {children}
        </div>
      </Container>
    </div>
  );
}
