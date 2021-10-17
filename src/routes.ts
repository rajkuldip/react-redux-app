import { App } from './App';
import { Home } from './modules';

export const routes = [
    {
      path: '/',
      exact: true,
      component: App,
    },
    {
      path: '/home',
      component: Home,
    },
  ]