import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';

import LazyLoader from 'components/ui/loaders/loader-lazy';
import { IRoute } from 'types/routes/route-types';

import { authRoutes } from './configuration/auth-config';
import { panelRoutes } from './configuration/panel-config';

export const routeTree: IRoute[] = [
  ...authRoutes,
  ...panelRoutes,
  {
    path: '*',
    element: LazyLoader(lazy(() => import('../pages/not-found/not-found'))),
  },
];

const Router = () => useRoutes(routeTree);

export default Router;
