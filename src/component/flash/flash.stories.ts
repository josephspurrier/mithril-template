import m from 'mithril';
import {
  Flash,
  showFlash,
  setFlashTimeout,
  setPrepend,
  clearFlash,
  MessageType,
} from '@/component/flash/flash';

export default {
  title: 'Component/Flash',
  component: Flash,
};

export const success = (args: { text: string }): m.Component => ({
  oninit: () => {
    setFlashTimeout(-1);
    showFlash(args.text, MessageType.success);
  },
  onremove: () => {
    clearFlash();
  },
  view: () => m(Flash),
});
success.args = {
  text: 'This is a success message.',
};
success.argTypes = {
  text: { name: 'Text', control: { type: 'text' } },
};

export const failed = (args: { text: string }): m.Component => ({
  oninit: () => {
    setFlashTimeout(-1);
    showFlash(args.text, MessageType.failed);
  },
  onremove: () => {
    clearFlash();
  },
  view: () => m(Flash),
});
failed.args = {
  text: 'This is a failed message.',
};
failed.argTypes = {
  text: { name: 'Text', control: { type: 'text' } },
};

export const warning = (args: { text: string }): m.Component => ({
  oninit: () => {
    setFlashTimeout(-1);
    showFlash(args.text, MessageType.warning);
  },
  onremove: () => {
    clearFlash();
  },
  view: () => m(Flash),
});
warning.args = {
  text: 'This is a warning message.',
};
warning.argTypes = {
  text: { name: 'Text', control: { type: 'text' } },
};

export const primary = (args: { text: string }): m.Component => ({
  oninit: () => {
    setFlashTimeout(-1);
    showFlash(args.text, MessageType.primary);
  },
  onremove: () => {
    clearFlash();
  },
  view: () => m(Flash),
});
primary.args = {
  text: 'This is a primary message.',
};
primary.argTypes = {
  text: { name: 'Text', control: { type: 'text' } },
};

export const link = (args: { text: string }): m.Component => ({
  oninit: () => {
    setFlashTimeout(-1);
    showFlash(args.text, MessageType.link);
  },
  onremove: () => {
    clearFlash();
  },
  view: () => m(Flash),
});
link.args = {
  text: 'This is a link message.',
};
link.argTypes = {
  text: { name: 'Text', control: { type: 'text' } },
};

export const info = (args: { text: string }): m.Component => ({
  oninit: () => {
    setFlashTimeout(-1);
    showFlash(args.text, MessageType.info);
  },
  onremove: () => {
    clearFlash();
  },
  view: () => m(Flash),
});
info.args = {
  text: 'This is an info message.',
};
info.argTypes = {
  text: { name: 'Text', control: { type: 'text' } },
};

export const dark = (args: { text: string }): m.Component => ({
  oninit: () => {
    setFlashTimeout(-1);
    showFlash(args.text, MessageType.dark);
  },
  onremove: () => {
    clearFlash();
  },
  view: () => m(Flash),
});
dark.args = {
  text: 'This is an dark message.',
};
dark.argTypes = {
  text: { name: 'Text', control: { type: 'text' } },
};

export const action = (args: {
  text: string;
  numberSlider: number;
  prepend: boolean;
  messageType: MessageType;
}): m.Component => ({
  oninit: () => {
    setFlashTimeout(args.numberSlider);
    setPrepend(args.prepend);
  },
  onremove: () => {
    clearFlash();
  },
  view: () =>
    m('div', [
      m(
        'button',
        {
          onclick: () => {
            showFlash(args.text, args.messageType);
          },
        },
        'Show Flash',
      ),
      m(Flash),
    ]),
});
action.args = {
  text: 'This is a flash message',
  numberSlider: 2000,
  prepend: false,
  messageType: MessageType.success,
};
action.argTypes = {
  text: { name: 'Text', control: { type: 'text' } },
  numberSlider: {
    name: 'Timeout (milliseconds)',
    control: { type: 'range', min: 0, max: 10000, step: 1000 },
  },
  prepend: { name: 'Toggle', control: { type: 'boolean' } },
  messageType: {
    name: 'Type',
    control: { type: 'select', options: MessageType },
  },
};
