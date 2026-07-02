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
        <div className='flex h-screen items-center justify-center'>
          <h1 className='font-bold text-md'>
            You are unauthorized to see this page
          </h1>
        </div>
      );
    }

    return <WrappedComponent {...props} />;
  };
}
