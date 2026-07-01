'use client';

import { ComponentType, useEffect } from 'react';
import { Role, useAuthStore } from '@/stores/useAuthStore';

export default function useAuthGuard<P extends object>(
  WrappedComponent: ComponentType<P>,
  allowedRoles: Role[],
) {
  return function AuthGuardComponent(props: P) {
    const { user } = useAuthStore();
    const isAuthorized = allowedRoles.includes(user?.role as Role);

    if (!isAuthorized) {
      return (
        <h1 className='font-bold text-2xl'>
          User role unauthorized to open this page
        </h1>
      );
    }

    return <WrappedComponent {...props} />;
  };
}
