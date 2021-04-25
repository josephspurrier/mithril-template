import m from 'mithril';
import { MainLayout } from '@/layout/main';
import { DashboardLayout } from '@/layout/dashboard';
import { AboutPage } from '@/page/about/about';
import { LoginPage } from '@/page/login/login';
import { RegisterPage } from '@/page/register/register';
import { HomePage } from '@/page/home/home';
import { NotepadPage } from '@/page/notepad/notepad';
import { ErrorPage } from '@/page/error/error';
import { isLoggedIn } from '@/helper/cookiestore';
import { setup } from '@/helper/mock/browser';
import '~/node_modules/@fortawesome/fontawesome-free/js/all.js';
import '@/global.scss';

m.route.prefix = '';

m.route(document.body, '/', {
  '/': {
    onmatch: () => {
      if (!isLoggedIn()) m.route.set('/login');
    },
    render: () => m(DashboardLayout, m(HomePage)),
  },
  '/notepad': {
    onmatch: () => {
      if (!isLoggedIn()) m.route.set('/login');
    },
    render: () => m(DashboardLayout, m(NotepadPage)),
  },
  '/login': {
    onmatch: () => {
      if (isLoggedIn()) m.route.set('/');
    },
    render: () => m(MainLayout, m(LoginPage)),
  },
  '/register': {
    onmatch: () => {
      if (isLoggedIn()) m.route.set('/');
    },
    render: () => m(MainLayout, m(RegisterPage)),
  },
  '/about': {
    render: () => {
      if (isLoggedIn()) return m(DashboardLayout, m(AboutPage));
      return m(MainLayout, m(AboutPage));
    },
  },
  '/404': {
    render: () => m(MainLayout, m(ErrorPage)),
  },
  '/:404...': {
    onmatch: () => window.location.replace('/404'),
  },
});

// Setup the mock service worker if it's enabled.
setup();
