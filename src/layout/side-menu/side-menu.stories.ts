import m from 'mithril';
import { SideMenu } from '@/layout/side-menu/side-menu';

export default {
  title: 'Component/Side Menu',
};

export const sideMenu = (): m.Component => ({
  view: () =>
    m('div', { class: 'columns mt-4 ml-4' }, [
      m('div', { class: 'column is-one-third' }, m(SideMenu)),
      m('div', { class: 'column has-background-grey-lighter' }, 'Content'),
    ]),
});
