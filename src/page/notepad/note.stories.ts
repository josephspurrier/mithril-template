import m from 'mithril';
import { Note } from '@/page/notepad/note';
import { Flash } from '@/component/flash/flash';
import { rest } from 'msw';
import { worker } from '@/helper/mock/browser';
import { apiServer } from '@/helper/global';

export default {
  title: 'Component/Note',
  component: Note,
};

export const noteView = (args: { fail: boolean }): m.Component => ({
  oninit: () => {
    const shouldFail = args.fail;

    worker.use(
      ...[
        rest.put(apiServer() + '/api/v1/note/1', (req, res, ctx) => {
          if (shouldFail) {
            return res(
              ctx.status(400),
              ctx.json({
                message: 'There was an error.',
              }),
            );
          } else {
            return res(
              ctx.status(200),
              ctx.json({
                message: 'ok',
              }),
            );
          }
        }),
        rest.delete(apiServer() + '/api/v1/note/1', (req, res, ctx) => {
          if (shouldFail) {
            return res(
              ctx.status(400),
              ctx.json({
                message: 'There was an error.',
              }),
            );
          } else {
            return res(
              ctx.status(200),
              ctx.json({
                message: 'ok',
              }),
            );
          }
        }),
      ],
    );
  },
  view: () =>
    m('div', [
      m('ul', [
        m(Note, {
          id: '1',
          oninput: function (): void {
            console.log('changed');
          },
          removeNote: function (): void {
            console.log('removed');
          },
        }),
      ]),
      m(Flash),
    ]),
});

noteView.storyName = 'Note';
noteView.args = {
  fail: false,
};
noteView.argTypes = {
  fail: { name: 'Fail', control: { type: 'boolean' } },
};
