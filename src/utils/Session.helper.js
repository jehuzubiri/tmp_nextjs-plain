import cookie from 'js-cookie';
import { IsServerSide } from '@/constants/App.const';

const getCookieFromBrowser = (key) => {
  return cookie.get(key);
};

const getCookieFromServer = (key, headers) => {
  if (!headers || !headers.cookie) return undefined;
  const rawCookie = headers.cookie.split(';').find((c) => c.trim().startsWith(`${key}=`));
  if (!rawCookie) return undefined;
  return rawCookie.split('=')[1];
};

//@DESC exported functions starts here...
export const setCookie = (
  key,
  value,
  domain,
  expires = 10,
  path = '/'
) => {
  if (!IsServerSide) cookie.set(key, value, {
    expires,
    path: path,
    ...(domain
      ? {
        domain,
        sameSite: 'None',
        secure: true,
      }
      : {}),
  });
};

export const removeCookie = (key) => {
  if (!IsServerSide) cookie.remove(key, {
    expires: 1
  });
};

export const getCookie = (key, headers) => {
  return !IsServerSide ? getCookieFromBrowser(key) : getCookieFromServer(key, headers);
};

export const checkCookie = (key) => {
  return cookie.get(key) !== undefined;
};