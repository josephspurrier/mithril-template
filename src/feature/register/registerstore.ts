import m from 'mithril';
import { start, finish, text } from '@/helper/submit';
import { showFlash, MessageType } from '@/component/flash/flash';
import { apiServer } from '@/helper/global';

export interface User {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

export interface RegisterResponse {
  status: string;
  record_id: string;
}

export interface ErrorResponse {
  message: string;
}

export const register = (body: User): Promise<void> => {
  return m.request({
    method: 'POST',
    url: apiServer() + '/api/v1/register',
    body,
  });
};

export const submitText = (s: string): string => {
  return text(s);
};

export const submit = (e: InputEvent, u: User): Promise<void> => {
  start(e);

  return register(u)
    .then((raw: unknown) => {
      finish();

      const data = raw as RegisterResponse;
      if (data && data.status == 'Created') {
        showFlash('User registered.', MessageType.success);
        m.route.set('/login');
      } else {
        showFlash('Data returned is not valid.', MessageType.failed);
      }
    })
    .catch((err: XMLHttpRequest) => {
      finish();
      const response = err.response as ErrorResponse;
      if (response) {
        showFlash(response.message, MessageType.warning);
      } else {
        showFlash('An error occurred.', MessageType.warning);
      }
      throw err;
    });
};
