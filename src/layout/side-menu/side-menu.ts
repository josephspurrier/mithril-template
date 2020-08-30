import m from 'mithril';
import '@/layout/side-menu/side-menu.scss';
import style from '@/layout/side-menu/side-menu.scss';

// https://bulma.io/documentation/components/menu/

export const SideMenu: m.ClosureComponent = () => {
  return {
    view: () =>
      m('div', { class: style.local }, [
        m('aside', { class: 'menu aside' }, [
          m('p', { class: 'menu-label' }, 'Authenticated'),
          m('ul', { class: 'menu-list' }, [
            m(
              'li',
              m(
                m.route.Link,
                {
                  href: '/',
                  'data-cy': 'welcome-link',
                  class: location.pathname === '/' ? 'is-active' : '',
                },
                [
                  m(
                    'span',
                    { class: 'icon is-small' },
                    m('i', {
                      class: 'fas fa-home',
                      'aria-hidden': 'true',
                    }),
                  ),
                  'Welcome',
                ],
              ),
            ),
            m(
              'li',
              m(
                m.route.Link,
                {
                  href: '/notepad',
                  'data-cy': 'notepad-link',
                  class: location.pathname === '/notepad' ? 'is-active' : '',
                },
                [
                  m(
                    'span',
                    { class: 'icon is-small' },
                    m('i', {
                      class: 'fas fa-sticky-note',
                      'aria-hidden': 'true',
                    }),
                  ),
                  'Notepad',
                ],
              ),
            ),
          ]),
          m('p', { class: 'menu-label' }, 'Public'),
          m('ul', { class: 'menu-list' }, [
            m(
              'li',
              m(
                m.route.Link,
                {
                  href: '/about',
                  'data-cy': 'about-link',
                  class: location.pathname === '/about' ? 'is-active' : '',
                },
                [
                  m(
                    'span',
                    { class: 'icon is-small' },
                    m('i', {
                      class: 'fas fa-address-card',
                      'aria-hidden': 'true',
                    }),
                  ),
                  'About',
                ],
              ),
            ),
          ]),
        ]),
      ]),
  };
};
