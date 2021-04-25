import m from 'mithril';
import { Breadcrumb } from '@/component/breadcrumb/breadcrumb';
import * as NoteStore from '@/page/notepad/notestore';
import { Note } from '@/page/notepad/note';

export const NotepadPage: m.ClosureComponent = () => {
  let list = [] as NoteStore.Note[];

  NoteStore.load()
    .then((arr: NoteStore.Note[]) => {
      list = arr;
    })
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    .catch(() => {});

  let current: NoteStore.Note = {
    id: '',
    message: '',
  };

  const clear = (): void => {
    current = {
      id: '',
      message: '',
    };
  };

  return {
    view: () =>
      m('div', [
        m(Breadcrumb, {
          levels: [
            { icon: 'fa-home', name: 'Welcome', url: '/' },
            {
              icon: 'fa-sticky-note',
              name: 'Notepad',
              url: location.pathname,
            },
          ],
        }),
        m('section', { id: 'note-section' }, [
          m('div', { class: 'container is-fluid' }, [
            m('div', { class: 'box' }, [
              m('div', { class: 'field' }, [
                m('label', { class: 'label' }, 'To Do'),
                m('div', { class: 'control' }, [
                  m('input', {
                    class: 'input',
                    type: 'text',
                    placeholder: 'What would you like to do?',
                    name: 'note-add',
                    'data-cy': 'note-text',
                    onkeypress: function (e: KeyboardEvent) {
                      if (e.key !== 'Enter') {
                        return;
                      }
                      NoteStore.submit(current)
                        .then(() => {
                          // TODO: This could be optimized instead of reloading all.
                          NoteStore.load()
                            .then((arr: NoteStore.Note[]) => {
                              list = arr;
                            })
                            // eslint-disable-next-line @typescript-eslint/no-empty-function
                            .catch(() => {});
                          clear();
                        }) // eslint-disable-next-line @typescript-eslint/no-empty-function
                        .catch(() => {});
                    },
                    oninput: function (e: { target: HTMLInputElement }) {
                      current.message = e.target.value;
                    },
                    value: current.message,
                  }),
                ]),
              ]),
              m('nav', { class: 'level is-mobile' }, [
                m('div', { class: 'level-left' }, [
                  m(
                    'a',
                    {
                      class: 'level-item',
                      title: 'Add note',
                      onclick: '{NoteStore.submit}',
                    },
                    [
                      m('span', { class: 'icon is-small has-text-success' }, [
                        m('i', {
                          class: 'far fa-plus-square',
                          'data-cy': 'add-note-link',
                        }),
                      ]),
                    ],
                  ),
                ]),
              ]),
            ]),
            m('div', [
              m('ul', { id: 'listTodo' }, [
                list.map((n: NoteStore.Note) =>
                  m(Note, {
                    key: n.id,
                    id: n.id,
                    message: n.message,
                    oninput: function (e: { target: HTMLInputElement }) {
                      n.message = e.target.value;
                    },
                    removeNote: function (id: string) {
                      list = list.filter((i) => {
                        return i.id !== id;
                      });
                    },
                  }),
                ),
              ]),
            ]),
          ]),
        ]),
      ]),
  };
};
