import { lazy } from 'react';

import LazyLoader from 'components/ui/loaders/loader-lazy';
import { IRoute } from 'types/routes/route-types';

export const authRoutes: IRoute[] = [
  {
    element: LazyLoader(lazy(() => import('../../layouts/auth/auth-layout'))),
    children: [
      {
        path: '/login',
        // element: LazyLoader(lazy(() => import('../../pages/login/login'))),
        authGuard: false,
      },
    ],
  },
];
