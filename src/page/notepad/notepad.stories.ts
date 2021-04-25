import m from 'mithril';
import { NotepadPage } from '@/page/notepad/notepad';
import { Note } from '@/page/notepad/notestore';
import { randId } from '@/helper/random';
import { Flash } from '@/component/flash/flash';
import { rest } from 'msw';
import { worker } from '@/helper/mock/browser';
import { apiServer } from '@/helper/global';

export default {
  title: 'View/Notepad',
  component: NotepadPage,
};

interface MessageResponse {
  message: string;
}

export const notepad = (args: { fail: boolean }): m.Component => ({
  oninit: () => {
    const shouldFail = args.fail;

    const notes = [] as Note[];

    worker.use(
      ...[
        rest.get(apiServer() + '/api/v1/note', (req, res, ctx) => {
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
                notes: notes,
              }),
            );
          }
        }),
        rest.delete(apiServer() + '/api/v1/note/:noteId', (req, res, ctx) => {
          if (shouldFail) {
            return res(
              ctx.status(400),
              ctx.json({
                message: 'There was an error.',
              }),
            );
          } else {
            const { noteId } = req.params;
            console.log('Found:', noteId);
            return res(
              ctx.status(200),
              ctx.json({
                message: 'ok',
              }),
            );
          }
        }),
        rest.post(apiServer() + '/api/v1/note', (req, res, ctx) => {
          if (shouldFail) {
            return res(
              ctx.status(400),
              ctx.json({
                message: 'There was an error.',
              }),
            );
          } else {
            const m = req.body as MessageResponse;
            const id = randId();
            notes.push({ id: id, message: m.message });
            return res(
              ctx.status(201),
              ctx.json({
                message: 'ok',
              }),
            );
          }
        }),
        rest.put(apiServer() + '/api/v1/note/:noteId', (req, res, ctx) => {
          if (shouldFail) {
            return res(
              ctx.status(400),
              ctx.json({
                message: 'There was an error.',
              }),
            );
          } else {
            const { noteId } = req.params;
            console.log('Found:', noteId);
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
  view: () => m('main', [m(NotepadPage), m(Flash)]),
});
notepad.args = {
  fail: false,
};
notepad.argTypes = {
  fail: { name: 'Fail', control: { type: 'boolean' } },
};
