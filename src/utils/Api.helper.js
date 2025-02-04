import { AppConfig, CookieTypes, IsServerSide } from "@/constants/App.const";
import { getCookie } from '@/utils/Api.helper';

export const getCustomHeaders = (defaultToken) => {
  let customHeader = {
    'Content-Type': 'application/json',
    'X-Timezone-Offset': String(new Date().getTimezoneOffset() * -1),
    'x-env-type': IsServerSide ? 'server' : 'client',
    'x-api-type': 'main',
    'x-env': process.env.NEXT_PUBLIC_ENV,
    'x-next-public-app-name': AppConfig.appName,
    'x-next-public-app-version': AppConfig.appVersion,
  };


  if (IsServerSide) {
    //@DESC: ssr required get from next header: 
    //customHeader['cookie', 'x-host', 'x-locale', 'Accept-Language']
    customHeader['Access-Control-Allow-Origin'] = '*'
  }

  if (!IsServerSide) {
    // @DESC: set token from cookie
    const token = getCookie(CookieTypes.JWT_AUTH);
    if (token && !defaultToken) customHeader['Authorization'] = `Bearer ${token}`;

    // @DESC: set next locale from cookie
    const next_locale = getCookie(CookieTypes.NEXT_LOCALE);
    if (next_locale) {
      customHeader['Accept-Language'] = next_locale;
      customHeader['x-locale'] = next_locale;
    }
  }

  return customHeader;

}