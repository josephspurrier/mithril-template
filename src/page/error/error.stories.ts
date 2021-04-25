import m from 'mithril';
import { ErrorPage } from '@/page/error/error';

export default {
  title: 'View/Error',
  component: ErrorPage,
};

export const error = (): m.Component => ({
  view: () => m(ErrorPage),
});
