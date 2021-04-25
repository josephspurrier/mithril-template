import m from 'mithril';
import { AboutPage } from '@/page/about/about';

export default {
  title: 'View/About',
  component: AboutPage,
};

export const about = (): m.Component => ({
  view: () => m(AboutPage),
});
