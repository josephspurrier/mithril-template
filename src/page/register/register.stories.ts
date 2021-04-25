import m from 'mithril';
import { RegisterPage } from '@/page/register/register';
import { Flash } from '@/component/flash/flash';
import { rest } from 'msw';
import { worker } from '@/helper/mock/browser';
import { apiServer } from '@/helper/global';

export default {
  title: 'View/Register',
  component: RegisterPage,
};

export const register = (args: {
  fail: boolean;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}): m.Component => ({
  oninit: () => {
    const shouldFail = args.fail;

    worker.use(
      ...[
        rest.post(apiServer() + '/api/v1/register', (req, res, ctx) => {
          if (shouldFail) {
            return res(
              ctx.status(400),
              ctx.json({
                message: 'There was an error.',
              }),
            );
          } else {
            return res(
              ctx.status(201),
              ctx.json({
                status: 'Created',
                record_id: '1',
              }),
            );
          }
        }),
      ],
    );
  },
  view: () =>
    m('main', [
      m(RegisterPage, {
        firstName: args.firstName,
        lastName: args.lastName,
        email: args.email,
        password: args.password,
      }),
      m(Flash),
    ]),
});
register.args = {
  fail: false,
  firstName: 'John',
  lastName: 'Smith',
  email: 'jsmith@example.com',
  password: 'password',
};
register.argTypes = {
  fail: { name: 'Fail', control: { type: 'boolean' } },
  firstName: { name: 'First Name', control: { type: 'text' } },
  lastName: { name: 'Last Name', control: { type: 'text' } },
  email: { name: 'Email', control: { type: 'text' } },
  password: { name: 'Password', control: { type: 'text' } },
};
