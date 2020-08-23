import m from 'mithril';
import { isLoggedIn, clear } from '@/helper/cookiestore';

export const Nav = (): m.Component => {
  const logout = () => {
    clear();
    m.route.set('/');
  };

  let navClass = '';
  let navMobileClass = '';

  const toggleNavClass = () => {
    navClass = navClass === '' ? 'is-active' : '';
  };
  const removeNavClass = () => {
    navClass = '';
  };

  const toggleMobileNavClass = () => {
    navMobileClass = navMobileClass === '' ? 'is-active' : '';
  };
  const removeMobileNavClass = () => {
    navMobileClass = '';
  };

  return {
    oncreate: () => {
      // Close the nav menus when an item is clicked.
      const links = document.querySelectorAll('.navbar-item');
      links.forEach((link) => {
        link.addEventListener('click', function () {
          removeNavClass();
          removeMobileNavClass();
        });
      });
    },
    view: () =>
      m(
        'nav',
        {
          class: 'navbar is-black',
          role: 'navigation',
          'aria-label': 'main navigation',
        },
        [
          m('div', { class: 'navbar-brand' }, [
            m(
              m.route.Link,
              { class: 'navbar-item', href: '/', 'data-cy': 'home-link' },
              m('strong', 'mithril-template'),
            ),
            m(
              'a',
              {
                class:
                  'navbar-burger burger mobile-navbar-top ' + navMobileClass,
                role: 'button',
                'aria-label': 'menu',
                'aria-expanded': 'false',
                'data-target': 'navbar-top',
                onclick: function () {
                  toggleNavClass();
                  toggleMobileNavClass();
                  return false;
                },
              },
              [
                m('span', { 'aria-hidden': 'true' }),
                m('span', { 'aria-hidden': 'true' }),
                m('span', { 'aria-hidden': 'true' }),
              ],
            ),
          ]),
          m(
            'div',
            {
              id: 'navbar-top',
              class: 'navbar-menu ' + navMobileClass,
              onmouseleave: () => {
                removeNavClass();
                removeMobileNavClass();
              },
            },
            m(
              'div',
              { class: 'navbar-end' },
              m('div', { class: 'navbar-item has-dropdown ' + navClass }, [
                m(
                  'a',
                  {
                    class: 'navbar-link',
                    onclick: () => {
                      toggleNavClass();
                      toggleMobileNavClass();
                      return false;
                    },
                  },
                  'Menu',
                ),
                m('div', { class: 'navbar-dropdown is-right' }, [
                  !isLoggedIn() &&
                    m(
                      m.route.Link,
                      { class: 'navbar-item', href: '/login' },
                      ' Login ',
                    ),
                  m(
                    m.route.Link,
                    {
                      class:
                        'navbar-item ' +
                        (location.pathname === '/about' ? 'is-active' : ''),
                      href: '/about',
                    },
                    'About',
                  ),
                  m('hr', { class: 'navbar-divider' }),
                  isLoggedIn() &&
                    m(
                      'a',
                      {
                        class: 'dropdown-item',
                        onclick: function () {
                          logout();
                        },
                      },
                      'Logout',
                    ),
                  m('div', { class: 'navbar-item' }, 'v1.0.0'),
                ]),
              ]),
            ),
          ),
        ],
      ),
  };
};
