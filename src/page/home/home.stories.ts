import m from 'mithril';
import { HomePage } from '@/page/home/home';

export default {
  title: 'View/Home',
  component: HomePage,
};

export const home = (): m.Component => ({
  view: () => m(HomePage),
});
