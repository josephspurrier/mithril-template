import Cookie from 'js-cookie';

export interface Auth {
  accessToken: string;
  loggedIn: boolean;
}

const cookieName = 'auth';

export const save = (auth: Auth): void => {
  Cookie.set(cookieName, auth);
};

export const clear = (): void => {
  Cookie.remove(cookieName);
};

export const bearerToken = (): string => {
  const auth = Cookie.get(cookieName) as string;
  if (auth) {
    const at = JSON.parse(auth) as Auth;
    if (at) {
      return `Bearer ${at.accessToken}`;
    }
  }

  return '';
};

export const isLoggedIn = (): boolean => {
  try {
    const auth = Cookie.get(cookieName);
    return auth !== undefined;
  } catch (err) {
    console.log(err);
  }

  return false;
};
