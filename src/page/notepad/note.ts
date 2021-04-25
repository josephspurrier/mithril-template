import m from 'mithril';
import { debounce } from '@/helper/debounce';
import * as NoteStore from '@/page/notepad/notestore';

interface Attrs {
  id: string;
  message?: string;
  oninput: (e: { target: HTMLInputElement }) => void;
  removeNote: (id: string) => void;
}

interface State {
  saving: string;
}

export const Note = (): m.Component<Attrs, State> => {
  return {
    view: ({ attrs, state }) =>
      m('li', { class: 'mt-2' }, [
        m('div', { class: 'box' }, [
          m('div', { class: 'content' }, [
            m('div', { class: 'editable' }, [
              m('input', {
                class: 'input individual-note',
                id: attrs.id,
                type: 'text',
                value: attrs.message,
                oninput: attrs.oninput,
                onkeyup: function (e: { target: HTMLInputElement }) {
                  debounce(
                    attrs.id,
                    () => {
                      NoteStore.runUpdate(attrs.id, e.target.value);
                      state.saving = 'Saving...';
                      m.redraw();
                      setTimeout(() => {
                        state.saving = '';
                        m.redraw();
                      }, 1000);
                    },
                    1000,
                  );
                },
              }),
            ]),
          ]),
          m('nav', { class: 'level is-mobile' }, [
            m('div', { class: 'level-left' }, [
              m(
                'a',
                {
                  class: 'level-item',
                  title: 'Delete note',
                  onclick: function () {
                    NoteStore.runDelete(attrs.id)
                      .then(() => {
                        attrs.removeNote(attrs.id);
                      })
                      .catch(() => {
                        console.log('Could not remove note.');
                      });
                  },
                },
                [
                  m('span', { class: 'icon is-small has-text-danger' }, [
                    m('i', {
                      class: 'fas fa-trash',
                      'data-cy': 'delete-note-link',
                    }),
                  ]),
                ],
              ),
            ]),
            m(
              'div',
              { class: 'level-right', style: { 'min-height': '1.2rem' } },
              [m('span', { class: 'is-size-7 has-text-grey' }, state.saving)],
            ),
          ]),
        ]),
      ]),
  };
};
