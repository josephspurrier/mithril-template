import m from 'mithril';
import { Nav } from './nav';

export default {
  title: 'Component/Nav',
  component: Nav,
};

export const menu = (): m.Component => ({
  view: () => m(Nav),
});
