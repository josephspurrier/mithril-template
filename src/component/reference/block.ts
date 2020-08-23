import m from 'mithril';

export const Block = (): m.Component => {
  return {
    view: ({ children }) => m('div', children),
  };
};
