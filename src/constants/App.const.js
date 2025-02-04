const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || '';
const siteName = process.env.NEXT_PUBLIC_SITE_NAME;
const appName = process.env.NEXT_PUBLIC_APP_NAME || 'tmp-nextjs-plain';
const appVersion = process.env.NEXT_PUBLIC_APP_VERSION || '1.0.0';
const runningLocal = process.env.NODE_ENV !== 'production';

export const IsServerSide = typeof window === 'undefined';

export const AppConfig = {
  host: siteUrl?.replace(/https:\/\//, ''),
  siteUrl,
  siteName,
  appVersion,
  appName,
  metaAlt: siteName,
  metaTitle: runningLocal ? `Local | Version ${appVersion}` : `${siteName} | App description lorem ipsum dolor here.`,
  metaDescription: `${siteName} | Your website description here. This should be a brief summary of your page's content.`,
  keywords: 'NextJsTemplate, JehuNextJsTemplate',
  theme_color: '#fac50f',
  background_color: '#0a0a0a',
};

export const CookieTypes = {
  //@DESC: user token
  JWT_AUTH: 'jwt_auth',
  USERNAME: 'username',
  //@DESC: store agent code from coming url
  NEXT_LOCALE: 'NEXT_LOCALE',
  AGENT_CODE: 'agent_code',
};
