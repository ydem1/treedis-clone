import { Inter } from 'next/font/google';
import { PageLayout } from '@/components/Layouts/PageLayout';
import { languages } from '@/lib/i18n/settings';
import { ThemeRegistry } from '@/lib/mui/ThemeRegistry';
import { LANGUAGES_WITH_RTL } from '@/constants/languagesWithRtl';
import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Treedis Clone',
  description: 'Login & Register Clone',
};

export const generateStaticParams = async () => {
  return languages.map(locale => ({ locale }));
};

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function RootLayout({ children, params }: LayoutProps) {
  const { locale } = await params;

  const direction = LANGUAGES_WITH_RTL.includes(locale) ? 'rtl' : 'ltr';

  return (
    <html lang={locale} dir={direction}>
      <body className={inter.className}>
        <PageLayout>
          <ThemeRegistry>{children}</ThemeRegistry>
        </PageLayout>
      </body>
    </html>
  );
}
