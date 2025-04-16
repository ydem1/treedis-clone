import { Container } from '@mui/material';
import { WelcomeBanner } from '@/page-components/admin/WelcomeBanner';
import styles from './layout.module.css';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.wrapper}>
      <Container sx={{ height: '100%' }}>
        <div className={styles.content}>
          <WelcomeBanner />
          {children}
        </div>
      </Container>
    </div>
  );
}
