import m from 'mithril';
import { LoginPage } from '@/page/login/login';
import { Flash } from '@/component/flash/flash';
import { rest } from 'msw';
import { worker } from '@/helper/mock/browser';
import { apiServer } from '@/helper/global';

export default {
  title: 'View/Login',
  component: LoginPage,
};

export const login = (args: {
  fail: boolean;
  email: string;
  password: string;
}): m.Component => ({
  oninit: () => {
    const shouldFail = args.fail;

    worker.use(
      ...[
        rest.post(apiServer() + '/api/v1/login', (req, res, ctx) => {
          if (shouldFail) {
            return res(
              ctx.status(400),
              ctx.json({
                message: 'There was an error.',
              }),
            );
          } else {
            return res(
              ctx.status(200),
              ctx.json({
                status: 'OK',
              }),
            );
          }
        }),
      ],
    );
  },
  view: () =>
    m('main', [
      m(LoginPage, {
        email: args.email,
        password: args.password,
      }),
      m(Flash),
    ]),
});
login.args = {
  fail: false,
  email: 'jsmith@example.com',
  password: 'password',
};
login.argTypes = {
  fail: { name: 'Fail', control: { type: 'boolean' } },
  email: { name: 'Email', control: { type: 'text' } },
  password: { name: 'Password', control: { type: 'text' } },
};
