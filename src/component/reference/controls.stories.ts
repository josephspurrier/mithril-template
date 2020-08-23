import m from 'mithril';

export default {
  title: 'Example/Controls',
};

interface Args {
  list: number[];
  toggle: boolean;
  numberBox: number;
  numberSlider: number;
  jsonEditor: unknown; // This is an object.
  radio: RadioOptions;
  inlineRadio: RadioOptions;
  multiCheck: RadioOptions[];
  inlineMultiCheck: RadioOptions[];
  singleSelect: RadioOptions;
  multiSelect: RadioOptions[];
  text: string;
  colorPicker: string;
  date: string;
}

export const controls = (args: Args): m.Component => {
  console.log(args);
  return {
    view: () => m('pre', JSON.stringify(args, undefined, 2)),
  };
};

// This is the output in a <pre>:
// {
//   "list": [
//     1,
//     2,
//     3
//   ],
//   "toggle": true,
//   "numberBox": 3,
//   "numberSlider": 2,
//   "jsonEditor": {
//     "data": "foo"
//   },
//   "radio": "loading",
//   "inlineRadio": "error",
//   "multiCheck": [
//     "loading",
//     "ready"
//   ],
//   "inlineMultiCheck": [
//     "loading"
//   ],
//   "singleSelect": "ready",
//   "multiSelect": [
//     "loading",
//     "loading"
//   ],
//   "text": "Column",
//   "colorPicker": "blue",
//   "date": "2020-08-16 12:30"
// }

enum RadioOptions {
  Loading = 'loading',
  Error = 'error',
  Ready = 'ready',
}

// Annotations: https://storybook.js.org/docs/mithril/essentials/controls#annotation

controls.args = {
  list: [1, 2, 3],
  toggle: true,
  numberBox: 3,
  numberSlider: 2,
  jsonEditor: { data: 'foo' },
  radio: RadioOptions.Loading,
  inlineRadio: RadioOptions.Error,
  multiCheck: [RadioOptions.Loading, RadioOptions.Ready],
  inlineMultiCheck: [RadioOptions.Loading],
  singleSelect: RadioOptions.Ready,
  multiSelect: [RadioOptions.Loading, RadioOptions.Loading],
  text: 'Column',
  colorPicker: 'blue',
  date: '2020-08-16 12:30',
} as Args;

controls.argTypes = {
  list: { name: 'List', control: { type: 'array', separator: ',' } },
  toggle: { name: 'Toggle', control: { type: 'boolean' } },
  numberBox: {
    name: 'Number',
    control: { type: 'number', min: 0, max: 20, step: 1 },
  },
  numberSlider: {
    name: 'Number Slider',
    control: { type: 'range', min: 0, max: 20, step: 2 },
  },
  jsonEditor: { name: 'JSON Editor', control: { type: 'object' } },
  radio: { name: 'Radio', control: { type: 'radio', options: RadioOptions } },
  inlineRadio: {
    name: 'Inline Radio',
    control: { type: 'inline-radio', options: RadioOptions },
  },
  multiCheck: {
    name: 'MultiCheck',
    control: { type: 'check', options: RadioOptions },
  },
  inlineMultiCheck: {
    name: 'Inline MultiCheck',
    control: { type: 'inline-check', options: RadioOptions },
  },
  singleSelect: {
    name: 'Single Select',
    control: { type: 'select', options: RadioOptions },
  },
  multiSelect: {
    name: 'Multi Select',
    control: { type: 'multi-select', options: RadioOptions },
  },
  text: { name: 'Text', control: { type: 'text' } },
  colorPicker: { name: 'Color Picker', control: { type: 'color' } },
  date: { name: 'Date', control: { type: 'date' } },
};
