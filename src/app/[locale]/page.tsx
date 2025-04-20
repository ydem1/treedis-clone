import Link from 'next/link';
import { useTranslation } from '@/lib/i18n';

export default async function Home({ params }: { params: { locale: string } }) {
  const { locale } = await params;

  const { t: tHero } = await useTranslation(locale, 'admin');

  console.log(locale);

  return (
    <div>
      <p>Home</p>
      <Link href={'/login'}>{tHero('name')}</Link>
      <br />
      <Link href={'/register'}>register</Link>
    </div>
  );
}
