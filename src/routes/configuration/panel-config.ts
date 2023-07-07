import { lazy } from 'react';

import LazyLoader from 'components/ui/loaders/loader-lazy';
import { IRoute } from 'types/routes/route-types';

export const panelRoutes: IRoute[] = [
  {
    element: LazyLoader(lazy(() => import('../../layouts/panel/panel-layout'))),
    children: [
      {
        path: '/',
        element: LazyLoader(
          lazy(() => import('../../pages/dashboard/dashboard'))
        ),
        authGuard: false,
      },
    ],
  },
];
