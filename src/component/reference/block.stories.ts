import m from 'mithril';
import { action } from '@storybook/addon-actions';
import { Block } from '@/component/reference/block';

export default {
  title: 'Example/Block',
  component: Block,
};

export const button = (args: {
  disabled: boolean;
  label: string;
}): m.Component => ({
  view: () =>
    m(
      'button',
      {
        disabled: args.disabled,
        onclick: function () {
          action('button-click');
          console.log('Clicked!');
        },
      },
      args.label,
    ),
});
button.args = {
  disabled: false,
  label: 'Hello Storybook',
};
button.argTypes = {
  disabled: { name: 'Toggle', control: { type: 'boolean' } },
  label: { name: 'Text', control: { type: 'text' } },
};

export const dynamicText = (args: {
  name: string;
  age: number;
}): m.Component => ({
  view: () => {
    const name = args.name;
    const age = args.age;
    const content = `I am ${name} and I'm ${age} years old.`;

    return m('', content);
  },
});
dynamicText.args = {
  name: 'Joe',
  age: 32,
};
dynamicText.argTypes = {
  name: { name: 'Name', control: { type: 'text' } },
  age: {
    name: 'Age',
    control: { type: 'number', min: 0, max: 100, step: 1 },
  },
};

export const long = (args: { text: string }): m.Component => {
  return {
    view: () => m(Block, args.text),
  };
};
long.args = {
  text: 'Long',
};
long.argTypes = {
  text: { name: 'Text', control: { type: 'text' } },
};

export const short = (args: { text: string }): m.Component => ({
  view: () => m(Block, args.text),
});
short.args = {
  text: 'Short',
};
short.argTypes = {
  text: { name: 'Text', control: { type: 'text' } },
};

export const emoji = (): m.Component => ({
  view: () =>
    m('block', [
      m('form', [
        m('span', { role: 'img', 'aria-label': 'so cool' }, '😀 😎 👍 💯'),
      ]),
    ]),
});
