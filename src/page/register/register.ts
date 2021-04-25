import m from 'mithril';
import { submit, submitText, User } from '@/page/register/registerstore';

interface Attrs {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
}

export const RegisterPage: m.ClosureComponent<Attrs> = ({ attrs }) => {
  let user: User = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
  };

  const clear = () => {
    user = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
    };
  };

  // Prefill the fields.
  user.first_name = attrs.firstName || '';
  user.last_name = attrs.lastName || '';
  user.email = attrs.email || '';
  user.password = attrs.password || '';

  return {
    view: () =>
      m('div', [
        m('section', { class: 'section' }, [
          m('div', { class: 'container' }, [
            m('h1', { class: 'title' }, 'Register'),
            m('h2', { class: 'subtitle' }, 'Enter your information below.'),
          ]),
          m('div', { class: 'container mt-4' }, [
            m(
              'form',
              {
                name: 'register',
                onsubmit: function (e: InputEvent) {
                  submit(e, user)
                    .then(() => {
                      clear();
                    }) // eslint-disable-next-line @typescript-eslint/no-empty-function
                    .catch(() => {});
                },
              },
              [
                m('div', { class: 'field' }, [
                  m('label', { class: 'label' }, 'First Name'),
                  m('div', { class: 'control' }, [
                    m('input', {
                      class: 'input',
                      label: 'first_name',
                      name: 'first_name',
                      type: 'text',
                      'data-cy': 'first_name',
                      required: true,
                      oninput: function (e: { target: HTMLInputElement }) {
                        user.first_name = e.target.value;
                      },
                      value: user.first_name,
                    }),
                  ]),
                ]),
                m('div', { class: 'field' }, [
                  m('label', { class: 'label' }, 'Last Name'),
                  m('div', { class: 'control' }, [
                    m('input', {
                      class: 'input',
                      label: 'last_name',
                      name: 'last_name',
                      type: 'text',
                      'data-cy': 'last_name',
                      required: true,
                      oninput: function (e: { target: HTMLInputElement }) {
                        user.last_name = e.target.value;
                      },
                      value: user.last_name,
                    }),
                  ]),
                ]),
                m('div', { class: 'field' }, [
                  m('label', { class: 'label' }, 'Email'),
                  m('div', { class: 'control' }, [
                    m('input', {
                      class: 'input',
                      label: 'Email',
                      name: 'email',
                      type: 'text',
                      'data-cy': 'email',
                      required: true,
                      oninput: function (e: { target: HTMLInputElement }) {
                        user.email = e.target.value;
                      },
                      value: user.email,
                    }),
                  ]),
                ]),
                m('div', { class: 'field' }, [
                  m('label', { class: 'label' }, 'Password'),
                  m('div', { class: 'control' }, [
                    m('input', {
                      class: 'input',
                      label: 'Password',
                      name: 'password',
                      type: 'password',
                      'data-cy': 'password',
                      required: true,
                      oninput: function (e: { target: HTMLInputElement }) {
                        user.password = e.target.value;
                      },
                      value: user.password,
                    }),
                  ]),
                ]),
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
                      submitText('Create Account'),
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
                ]),
              ],
            ),
          ]),
        ]),
      ]),
  };
};
