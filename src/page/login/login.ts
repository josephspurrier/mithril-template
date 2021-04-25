import m from 'mithril';
import { submit, submitText, User } from '@/page/login/loginstore';
import { Input } from '@/component/input/input';

interface Attrs {
  email?: string;
  password?: string;
}

export const LoginPage: m.ClosureComponent<Attrs> = ({ attrs }) => {
  let user: User = {
    email: '',
    password: '',
  };

  const clear = () => {
    user = {
      email: '',
      password: '',
    };
  };

  // Prefill the fields.
  user.email = attrs.email || '';
  user.password = attrs.password || '';

  return {
    view: () =>
      m(
        'div',
        {
          style: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            // TODO: Change this so it's more dynamic via CSS if possible.
            height: `${window.innerHeight - (52 + 56)}px`,
            minHeight: '380px',
          },
        },
        [
          m('div', { class: 'card' }, [
            m('section', { class: 'card-content' }, [
              m('div', { class: 'container' }, [
                m('h1', { class: 'title' }, 'Login'),
                m(
                  'h2',
                  { class: 'subtitle' },
                  'Enter your login information below.',
                ),
              ]),
              m('div', { class: 'container mt-4' }, [
                m(
                  'form',
                  {
                    name: 'login',
                    onsubmit: function (e: InputEvent) {
                      submit(e, user)
                        .then(() => {
                          clear();
                        })
                        // eslint-disable-next-line @typescript-eslint/no-empty-function, prettier/prettier
                        .catch(() => { });
                    },
                  },
                  [
                    m(Input, {
                      label: 'Email',
                      name: 'email',
                      required: true,
                      oninput: function (e: { target: HTMLInputElement }) {
                        user.email = e.target.value;
                      },
                      value: user.email,
                    }),
                    m(Input, {
                      label: 'Password',
                      name: 'password',
                      required: true,
                      type: 'password',
                      oninput: function (e: { target: HTMLInputElement }) {
                        user.password = e.target.value;
                      },
                      value: user.password,
                    }),
                    m('div', { class: 'field is-grouped' }, [
                      m('p', { class: 'control' }, [
                        m(
                          'button',
                          {
                            class: 'button is-primary',
                            id: 'submit',
                            type: 'submit',
                            'data-cy': 'submit',
                          },
                          submitText('Submit'),
                        ),
                      ]),
                      m('p', { class: 'control' }, [
                        m(
                          'button',
                          {
                            class: 'button is-light',
                            type: 'button',
                            onclick: function () {
                              clear();
                            },
                          },
                          'Clear',
                        ),
                      ]),
                      m('p', { class: 'control' }, [
                        m(
                          m.route.Link,
                          { class: 'button is-light', href: '/register' },
                          'Register',
                        ),
                      ]),
                    ]),
                  ],
                ),
              ]),
            ]),
          ]),
        ],
      ),
  };
};
