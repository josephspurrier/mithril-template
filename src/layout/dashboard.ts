import m from 'mithril';
import { Nav } from '@/layout/nav/nav';
import { SideMenu } from '@/layout/side-menu/side-menu';
import { Footer } from '@/layout/footer/footer';
import { Flash } from '@/component/flash/flash';

export const DashboardLayout = (): m.Component => {
  return {
    view: ({ children }) =>
      m(
        'dashboard',
        {
          class: 'container-for-footer',
        },
        [
          m(Nav),
          m('div', { class: 'columns before-footer' }, [
            m('div', { class: 'column is-2 is-hidden-mobile mt-4 ml-4' }, [
              m(SideMenu),
            ]),
            m('div', { class: 'column' }, children),
          ]),
          m(Footer),
          m(Flash),
        ],
      ),
  };
};
