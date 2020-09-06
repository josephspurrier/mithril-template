import m from 'mithril';
import { Nav } from '@/layout/nav/nav';
import { Footer } from '@/layout/footer/footer';
import { Flash } from '@/component/flash/flash';
import style from '@/layout/footer/footer.scss';

export const MainLayout = (): m.Component => {
  return {
    view: ({ children }) => (
      <main class={style.containerForFooter}>
        {m(Nav)}
        <section class={style.beforeFooter}>{children}</section>
        {m(Footer)}
        {m(Flash)}
      </main>
    ),
  };
};
