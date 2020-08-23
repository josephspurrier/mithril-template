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
  const auth = Cookie.get(cookieName);
  if (auth === undefined) {
    return '';
  }

  const v = JSON.parse(auth);
  return 'Bearer ' + v.accessToken;
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
