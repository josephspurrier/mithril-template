import m from 'mithril';
import { SimplePage } from '@/component/simple-page';

export default {
  title: 'Component/Simple Page',
  component: SimplePage,
};

export const withContent = (args: {
  title: string;
  description: string;
  content: string;
}): m.Component => ({
  view: () =>
    m(
      SimplePage,
      {
        title: args.title,
        description: args.description,
      },
      args.content,
    ),
});
withContent.args = {
  title: 'This is the title.',
  description: 'This is the description.',
  content: 'This is the content.',
};
withContent.argTypes = {
  title: { name: 'Title', control: { type: 'text' } },
  description: { name: 'Description', control: { type: 'text' } },
  content: { name: 'Content', control: { type: 'text' } },
};
