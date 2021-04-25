import m from 'mithril';
import { start, finish, text } from '@/helper/submit';
import { showFlash, MessageType } from '@/component/flash/flash';
import { save, Auth } from '@/helper/cookiestore';
import { apiServer } from '@/helper/global';

export interface User {
  email: string;
  password: string;
}

export interface LoginResponse {
  status: string;
  token: string;
}

interface ErrorResponse {
  status: string;
  message: string;
}

export const login = (body: User): Promise<void> => {
  return m.request({
    method: 'POST',
    url: apiServer() + '/api/v1/login',
    body,
  });
};

export const submitText = (s: string): string => {
  return text(s);
};

export const submit = (e: InputEvent, u: User): Promise<void> => {
  start(e);

  return login(u)
    .then((raw: unknown) => {
      finish();

      const data = raw as LoginResponse;

      if (data && data.status === 'OK') {
        const auth: Auth = {
          accessToken: data.token,
          loggedIn: true,
        };
        save(auth);

        showFlash('Login successful.', MessageType.success);

        m.route.set('/');
      } else {
        showFlash('Data returned is not valid.', MessageType.failed);
      }
    })
    .catch((err: XMLHttpRequest) => {
      finish();
      showFlash((err.response as ErrorResponse).message, MessageType.warning);
      throw err;
    });
};
