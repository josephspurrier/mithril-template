import m from 'mithril';
import { Nav } from '@/layout/nav/nav';
import { SideMenu } from '@/layout/side-menu/side-menu';
import { Footer } from '@/layout/footer/footer';
import { Flash } from '@/component/flash/flash';
import style from '@/layout/footer/footer.scss';

export const DashboardLayout = (): m.Component => {
  return {
    view: ({ children }) =>
      m(
        'dashboard',
        {
          class: style.containerForFooter,
        },
        [
          m(Nav),
          m('div', { class: 'columns ' + style.beforeFooter }, [
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
