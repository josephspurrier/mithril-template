import m from 'mithril';
import { Nav } from '@/layout/nav/nav';
import { Footer } from '@/layout/footer/footer';
import { Flash } from '@/component/flash/flash';
import style from '@/layout/footer/footer.scss';

export const MainLayout = (): m.Component => {
  return {
    view: ({ children }) => {
      return m(
        'main',
        {
          class: style.containerForFooter,
        },
        [
          m(Nav),
          m('section', { class: style.beforeFooter }, children),
          m(Footer),
          m(Flash),
        ],
      );
    },
  };
};
