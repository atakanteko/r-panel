import React from 'react';

import ApplicationLoader from './loader-app';

function LazyLoader(
  Component: React.LazyExoticComponent<any>
): React.ReactNode {
  return (
    <React.Suspense fallback={<ApplicationLoader />}>
      <Component />
    </React.Suspense>
  );
}

export default LazyLoader;
