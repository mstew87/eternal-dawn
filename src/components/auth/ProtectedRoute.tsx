'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { UserRole } from '@/types';
import { hasPermission } from '@/lib/auth';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: UserRole;
  fallback?: React.ReactNode;
}

export default function ProtectedRoute({ 
  children, 
  requiredRole = 'Member',
  fallback 
}: ProtectedRouteProps) {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'loading') return;

    if (!session) {
      router.push('/login');
      return;
    }

    const userRole = session.user?.role as UserRole;
    if (!hasPermission(userRole, requiredRole)) {
      router.push('/dashboard');
      return;
    }
  }, [session, status, router, requiredRole]);

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  if (!session) {
    return fallback || (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white">Please sign in to continue.</div>
      </div>
    );
  }

  const userRole = session.user?.role as UserRole;
  if (!hasPermission(userRole, requiredRole)) {
    return fallback || (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white">You don't have permission to access this page.</div>
      </div>
    );
  }

  return <>{children}</>;
} 