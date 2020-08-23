import m from 'mithril';
import { Breadcrumb } from '@/component/breadcrumb/breadcrumb';
import { SimplePage } from '@/component/simple-page';

export const AboutPage: m.ClosureComponent = () => {
  return {
    view: () =>
      m('div', [
        m(Breadcrumb, {
          levels: [
            { icon: 'fa-home', name: 'Welcome', url: '/' },
            {
              icon: 'fa-address-card',
              name: 'About',
              url: location.pathname,
            },
          ],
        }),
        m(
          SimplePage,
          {
            title: 'About',
          },
          [
            m('div', [
              'This shows you how to build a website using ',
              m('strong', 'Mithril'),
              ' and ',
              m('strong', 'Bulma'),
              '.',
            ]),
          ],
        ),
      ]),
  };
};
