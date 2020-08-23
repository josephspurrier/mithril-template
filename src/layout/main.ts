import m from 'mithril';
import { Nav } from '@/layout/nav/nav';
import { Footer } from '@/layout/footer/footer';
import { Flash } from '@/component/flash/flash';

export const MainLayout = (): m.Component => {
  return {
    view: ({ children }) => {
      return m(
        'main',
        {
          class: 'container-for-footer',
        },
        [
          m(Nav),
          m('section', { class: 'before-footer' }, children),
          m(Footer),
          m(Flash),
        ],
      );
    },
  };
};
