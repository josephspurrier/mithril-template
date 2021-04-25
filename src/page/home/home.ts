import m from 'mithril';

export const HomePage: m.ClosureComponent = () => {
  return {
    view: () =>
      m('div', [
        m('section', { class: 'hero is-primary' }, [
          m('div', { class: 'hero-body' }, [
            m('div', { class: 'container is-fluid' }, [
              m('h1', { class: 'title' }, 'Welcome'),
              m('h2', { class: 'subtitle' }, 'Login was successful'),
            ]),
          ]),
        ]),
        m('section', m('div', { class: 'container is-fluid' }, content)),
      ]),
  };
};

const content = [
  m('p', { class: 'mt-4' }, [
    'Check out your ',
    m(m.route.Link, { href: '/notepad' }, 'notepad'),
    ' when you get a chance!',
  ]),
];
