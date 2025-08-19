'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { signOut } from 'next-auth/react';
import { UserRole, DashboardStats, UserActivity } from '@/types';
import { hasPermission } from '@/lib/auth';

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [stats, setStats] = useState<DashboardStats>({
    totalMembers: 0,
    activeMembers: 0,
    pendingApplications: 0,
    recentActivity: 0,
  });
  const [recentActivity, setRecentActivity] = useState<UserActivity[]>([]);

  useEffect(() => {
    if (status === 'loading') return;
    
    if (!session) {
      router.push('/login');
      return;
    }

    // Mock data - in production, this would come from an API
    setStats({
      totalMembers: 156,
      activeMembers: 89,
      pendingApplications: 12,
      recentActivity: 23,
    });

    setRecentActivity([
      {
        id: '1',
        type: 'login',
        description: 'User logged in',
        timestamp: new Date(),
        userId: '1',
        username: 'admin',
      },
      {
        id: '2',
        type: 'application_review',
        description: 'New application submitted',
        timestamp: new Date(Date.now() - 1000 * 60 * 30),
        userId: '2',
        username: 'moderator',
      },
    ]);
  }, [session, status, router]);

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  const userRole = session.user.role as UserRole;

  const getRoleColor = (role: UserRole) => {
    switch (role) {
      case 'Owner':
        return 'text-purple-400 bg-purple-400/10 border-purple-400/20';
      case 'Admin':
        return 'text-red-400 bg-red-400/10 border-red-400/20';
      case 'Mod':
        return 'text-orange-400 bg-orange-400/10 border-orange-400/20';
      case 'Staff':
        return 'text-blue-400 bg-blue-400/10 border-blue-400/20';
      default:
        return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
    }
  };

  const getRoleFeatures = (role: UserRole) => {
    const features = [
      { name: 'View Profile', available: true },
      { name: 'Edit Profile', available: true },
      { name: 'View Members', available: hasPermission(role, 'Staff') },
      { name: 'Review Applications', available: hasPermission(role, 'Mod') },
      { name: 'Manage Users', available: hasPermission(role, 'Admin') },
      { name: 'System Settings', available: hasPermission(role, 'Owner') },
    ];
    return features;
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-b border-orange-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-white">Dashboard</h1>
              <p className="text-gray-400 mt-1">Welcome back, {session.user.name}</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className={`px-3 py-1 rounded-full border text-sm font-medium ${getRoleColor(userRole)}`}>
                {userRole}
              </div>
              <button
                onClick={() => signOut({ callbackUrl: '/' })}
                className="px-4 py-2 bg-red-500/10 border border-red-500/20 text-red-400 rounded-lg hover:bg-red-500/20 transition-colors duration-200"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
            <div className="flex items-center">
              <div className="p-2 bg-blue-500/10 rounded-lg">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-400">Total Members</p>
                <p className="text-2xl font-bold text-white">{stats.totalMembers}</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
            <div className="flex items-center">
              <div className="p-2 bg-green-500/10 rounded-lg">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-400">Active Members</p>
                <p className="text-2xl font-bold text-white">{stats.activeMembers}</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
            <div className="flex items-center">
              <div className="p-2 bg-yellow-500/10 rounded-lg">
                <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-400">Pending Applications</p>
                <p className="text-2xl font-bold text-white">{stats.pendingApplications}</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
            <div className="flex items-center">
              <div className="p-2 bg-purple-500/10 rounded-lg">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-400">Recent Activity</p>
                <p className="text-2xl font-bold text-white">{stats.recentActivity}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Quick Actions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {getRoleFeatures(userRole).map((feature, index) => (
                  <button
                    key={index}
                    disabled={!feature.available}
                    className={`p-4 rounded-lg border transition-all duration-200 ${
                      feature.available
                        ? 'bg-gray-700/50 border-gray-600 text-white hover:bg-gray-700 hover:border-orange-500/50'
                        : 'bg-gray-800/30 border-gray-700 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{feature.name}</span>
                      {feature.available ? (
                        <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Recent Activity</h3>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2"></div>
                    <div className="flex-1">
                      <p className="text-sm text-white">{activity.description}</p>
                      <p className="text-xs text-gray-400">
                        {activity.username} • {activity.timestamp.toLocaleTimeString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 