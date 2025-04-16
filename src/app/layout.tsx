import { Inter } from 'next/font/google';
import { ThemeRegistry } from '@/lib/mui/ThemeRegistry';
import { PageLayout } from '@/components/Layouts/PageLayout';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Treedis Clone',
  description: 'Login & Register Clone',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PageLayout>
          <ThemeRegistry>{children}</ThemeRegistry>
        </PageLayout>
      </body>
    </html>
  );
}
