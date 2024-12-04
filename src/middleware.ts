import { NextResponse } from 'next/server';

import type { NextRequest } from 'next/server';

// eslint-disable-next-line import/prefer-default-export
export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || '';
  const subdomain = host.split('.')[0];
  const { pathname } = request.nextUrl;

  const subdomainLocaleMap: Record<string, string> = {
    ua: 'uk',
    ca: 'en-CA',
    au: 'en-AU',
    uk: 'en-GB',
  };

  const localeFromSubdomain = subdomainLocaleMap[subdomain];

  if (pathname.includes('/static') || pathname.includes('/favicon.ico')) {
    return NextResponse.next();
  }

  const href = request.nextUrl.href;
  const hrefChunks = href.split('/');
  const pathnameLocale = hrefChunks[hrefChunks.length - 1];

  if (Object.values(subdomainLocaleMap).some(locale => (locale = pathnameLocale))) {
    const redirectSubdomain = Object.keys(subdomainLocaleMap).find(key => subdomainLocaleMap[key] === pathnameLocale);
    const newUrl = new URL(request.url);
    newUrl.hostname = `${redirectSubdomain}.${host.split('.').slice(1).join('.')}`;
    newUrl.pathname = pathname.replace(`/${pathnameLocale}`, '');
    return NextResponse.redirect(newUrl.toString());
  }

  const locale = localeFromSubdomain || 'en';
  const url = request.nextUrl.clone();
  url.locale = locale;

  return NextResponse.rewrite(url);
}
