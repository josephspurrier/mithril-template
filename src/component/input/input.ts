import m from 'mithril';

interface Attrs {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  value: string;
  oninput: (e: { target: HTMLInputElement }) => void;
}

export const Input = (): m.Component<Attrs> => {
  return {
    view: ({ attrs }) =>
      m('div', { class: 'field' }, [
        m('label', { class: 'label' }, attrs.label),
        m('div', { class: 'control' }, [
          m('input', {
            class: 'input',
            name: attrs.name,
            type: attrs.type,
            'data-cy': attrs.name,
            required: attrs.required,
            oninput: attrs.oninput,
            value: attrs.value,
          }),
        ]),
      ]),
  };
};
