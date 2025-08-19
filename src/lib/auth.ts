import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import { User, UserRole } from '@/types';

// Mock user database - in production, this would be a real database
const mockUsers: User[] = [
  {
    id: '1',
    username: 'admin',
    email: 'admin@eternaldawn.com',
    role: 'Admin',
    createdAt: new Date('2024-01-01'),
    isActive: true,
  },
  {
    id: '2',
    username: 'moderator',
    email: 'mod@eternaldawn.com',
    role: 'Mod',
    createdAt: new Date('2024-01-02'),
    isActive: true,
  },
  {
    id: '3',
    username: 'staff',
    email: 'staff@eternaldawn.com',
    role: 'Staff',
    createdAt: new Date('2024-01-03'),
    isActive: true,
  },
];

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        // Find user by email
        const user = mockUsers.find(u => u.email === credentials.email);
        if (!user) {
          return null;
        }

        // In production, you would hash passwords and compare them
        // For demo purposes, we'll use a simple check
        const isValidPassword = credentials.password === 'password123';
        
        if (!isValidPassword) {
          return null;
        }

        return {
          id: user.id,
          email: user.email,
          name: user.username,
          role: user.role,
        };
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string;
        session.user.role = token.role as UserRole;
      }
      return session;
    }
  },
  pages: {
    signIn: '/login',
    error: '/login',
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET || 'your-secret-key',
};

export const roleHierarchy: Record<UserRole, number> = {
  'Owner': 5,
  'Admin': 4,
  'Mod': 3,
  'Staff': 2,
  'Member': 1,
};

export function hasPermission(userRole: UserRole, requiredRole: UserRole): boolean {
  return roleHierarchy[userRole] >= roleHierarchy[requiredRole];
}

export function canManageRole(userRole: UserRole, targetRole: UserRole): boolean {
  return roleHierarchy[userRole] > roleHierarchy[targetRole];
} 