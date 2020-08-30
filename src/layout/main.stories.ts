import m from 'mithril';
import { MainLayout } from '@/layout/main';
import { SimplePage } from '@/component/simple-page';

export default {
  title: 'Component/Layout Main',
  component: MainLayout,
};

export const simplePage = (args: {
  title: string;
  description: string;
  content: string;
}): m.Component => ({
  view: () => {
    return m(
      MainLayout,
      m(
        SimplePage,
        {
          title: args.title,
          description: args.description,
        },
        args.content,
      ),
    );
  },
});
simplePage.args = {
  title: 'This is the title.',
  description: 'This is a subtitle or description.',
  content: 'This is the content.',
};
simplePage.argTypes = {
  title: { name: 'Title', control: { type: 'text' } },
  description: { name: 'Description', control: { type: 'text' } },
  content: { name: 'Content', control: { type: 'text' } },
};
