import m from 'mithril';
import { Breadcrumb } from '@/component/breadcrumb/breadcrumb';

export default {
  title: 'Component/Breadcrumb',
  component: Breadcrumb,
};

export const Level1 = (): m.Component => ({
  view: () =>
    m(Breadcrumb, {
      levels: [{ icon: 'fa-home', name: 'Welcome', url: location.pathname }],
    }),
});

export const Level2 = (): m.Component => ({
  view: () =>
    m(Breadcrumb, {
      levels: [
        { icon: 'fa-home', name: 'Welcome', url: '/' },
        { icon: 'fa-sticky-note', name: 'Notepad', url: location.pathname },
      ],
    }),
});

export const Level3 = (): m.Component => ({
  view: () =>
    m(Breadcrumb, {
      levels: [
        { icon: 'fa-home', name: 'Welcome', url: '/' },
        { icon: 'fa-sticky-note', name: 'Notepad', url: '/notepad' },
        { icon: 'fa-edit', name: 'Edit', url: location.pathname },
      ],
    }),
});
