import m from 'mithril';
import { SimplePage } from '@/component/simple-page';

export const ErrorPage: m.ClosureComponent = () => {
  return {
    view: () =>
      m(SimplePage, {
        title: 'Error',
        description: 'The page is not found.',
      }),
  };
};
