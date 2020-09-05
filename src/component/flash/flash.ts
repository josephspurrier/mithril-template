import m from 'mithril';
import { randId } from '@/helper/random';

// Create a flash message class with Bulma.
// http://bulma.io/documentation/components/message/

// Types of flash message.
export enum MessageType {
  success = 'is-success',
  failed = 'is-danger',
  warning = 'is-warning',
  primary = 'is-primary',
  link = 'is-link',
  info = 'is-info',
  dark = 'is-dark',
}

// Structure of a flash message.
interface FlashMessage {
  message: string;
  style: MessageType;
}

const internalFlash = {
  list: [] as FlashMessage[],
  timeout: 4000, // milliseconds
  prepend: false,
  addFlash: (message: string, style: MessageType): void => {
    // Don't show a message if zero.
    if (internalFlash.timeout === 0) {
      return;
    }

    const msg: FlashMessage = {
      message: message,
      style: style,
    };

    //Check if the messages should stack in reverse order.
    if (internalFlash.prepend === true) {
      internalFlash.list.unshift(msg);
    } else {
      internalFlash.list.push(msg);
    }

    m.redraw();

    // Show forever if -1.
    if (internalFlash.timeout > 0) {
      setTimeout(() => {
        internalFlash.removeFlash(msg);
        m.redraw();
      }, internalFlash.timeout);
    }
  },
  removeFlash: (i: FlashMessage): void => {
    internalFlash.list = internalFlash.list.filter((v) => {
      return v !== i;
    });
  },
};

export const showFlash = (message: string, style: MessageType): void => {
  internalFlash.addFlash(message, style);
};

export const setFlashTimeout = (t: number): void => {
  internalFlash.timeout = t;
};

export const clearFlash = (): void => {
  internalFlash.list = [];
};

export const setPrepend = (b: boolean): void => {
  internalFlash.prepend = b;
};

export const Flash: m.Component = {
  view: () =>
    m(
      'div',
      {
        style: {
          position: 'fixed',
          bottom: '1.5rem',
          right: '1.5rem',
          'z-index': '100',
          margin: '0',
        },
      },
      [
        internalFlash.list.map((i) =>
          m('div', { class: `notification ${i.style}`, key: randId() }, [
            i.message,
            m('button', {
              class: 'delete',
              onclick: function () {
                internalFlash.removeFlash(i);
              },
            }),
          ]),
        ),
      ],
    ),
};
