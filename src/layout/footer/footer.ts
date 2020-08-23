import m from 'mithril';

// https://bulma.io/documentation/layout/footer/

export const Footer: m.ClosureComponent = () => {
  return {
    view: () =>
      m(
        'footer',
        {
          class: 'footer',
          style: {
            color: '#999',
            background: '#404040',
            padding: '1rem 1rem 1rem',
          },
        },
        m(
          'div',
          { class: 'content has-text-centered' },
          m('p', 'Copyright © 2020 Your Company. All rights reserved.'),
        ),
      ),
  };
};
