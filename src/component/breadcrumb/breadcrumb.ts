import m from 'mithril';

// https://bulma.io/documentation/components/breadcrumb/

interface Level {
  icon: string;
  name: string;
  url: string;
}

interface Attrs {
  levels: Level[];
}

export const Breadcrumb = (): m.Component<Attrs> => {
  return {
    view: ({ attrs }) =>
      m(
        'div',
        { class: 'container is-fluid mt-4 mb-4' },
        m(
          'nav',
          { class: 'breadcrumb', 'aria-label': 'breadcrumbs' },
          m('ul', [
            attrs.levels.map((v: Level) =>
              m(
                'li',
                { class: location.pathname === v.url ? 'is-active' : '' },
                m(m.route.Link, { href: v.url }, [
                  m(
                    'span',
                    { class: 'icon is-small' },
                    m('i', { class: 'fas ' + v.icon, 'aria-hidden': 'true' }),
                  ),
                  m('span', v.name),
                ]),
              ),
            ),
          ]),
        ),
      ),
  };
};
