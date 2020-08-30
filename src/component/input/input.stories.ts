import m from 'mithril';
import { Input } from '@/component/input/input';

export default {
  title: 'Component/Input',
  component: Input,
};

enum InputTypes {
  text = 'text',
  color = 'color',
  date = 'date',
  'datetime-local' = 'datetime-local',
  email = 'email',
  hidden = 'hidden',
  month = 'month',
  number = 'number',
  password = 'password',
  range = 'range',
  search = 'search',
  time = 'time',
  week = 'week',
}

export const input = (args: {
  firstName: string;
  inputType: InputTypes;
}): m.Component => ({
  view: () =>
    m(Input, {
      name: 'first_name',
      label: 'First Name',
      value: args.firstName,
      type: args.inputType,
      oninput: function (): void {
        console.log('changed');
      },
    }),
});
input.args = {
  firstName: 'John',
  inputType: InputTypes.text,
};
input.argTypes = {
  firstName: { name: 'Value', control: { type: 'text' } },
  inputType: {
    name: 'Type',
    control: { type: 'select', options: InputTypes },
  },
};
