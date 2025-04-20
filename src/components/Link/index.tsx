'use client';

import { FC } from 'react';
import Link, { LinkProps } from 'next/link';
import { useParams } from 'next/navigation';

type LocalizedLinkProps = LinkProps & {
  children: React.ReactNode;
};

export const LocalizedLink: FC<LocalizedLinkProps> = ({
  href,
  children,
  ...props
}) => {
  const { locale } = useParams() as { locale: string };

  const localizedHref = `/${locale}${href}`;

  return (
    <Link href={localizedHref} {...props}>
      {children}
    </Link>
  );
};
