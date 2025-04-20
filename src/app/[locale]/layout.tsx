import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';
import { PageLayout } from '@/components/Layouts/PageLayout';
import { languages } from '@/lib/i18n/settings';
import { ThemeRegistry } from '@/lib/mui/ThemeRegistry';
import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Treedis Clone',
  description: 'Login & Register Clone',
};

export const generateStaticParams = async () => {
  return languages.map(locale => ({ locale }));
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: {
    locale: string;
  };
}>) {
  const { locale } = await params;

  if (!languages.includes(locale)) notFound();

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <PageLayout>
          <ThemeRegistry>{children}</ThemeRegistry>
        </PageLayout>
      </body>
    </html>
  );
}
