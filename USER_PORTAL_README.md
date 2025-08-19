# Eternal Dawn User Portal

A comprehensive user portal with role-based authentication and access control for the Eternal Dawn gaming community.

## Features

### 🔐 Authentication System

- **NextAuth.js Integration**: Secure authentication with JWT tokens
- **Login/Register Pages**: Modern, responsive forms with validation
- **Session Management**: Persistent login sessions
- **Form Validation**: Zod schema validation with React Hook Form

### 👥 Role-Based Access Control

The system implements a hierarchical role system with the following roles (in order of permissions):

1. **Owner** (Highest) - Full system access
2. **Admin** - User management and system settings
3. **Mod** - Application review and moderation
4. **Staff** - Member management and basic admin features
5. **Member** (Lowest) - Basic user access

### 🎯 Role-Specific Features

#### Owner

- Full system access
- System settings and configuration
- User role management
- Backup and restore functionality

#### Admin

- User management (view, edit, delete users)
- Application review and approval
- System settings access
- Analytics and reporting
- Moderation tools

#### Mod

- Application review and approval
- Basic moderation tools
- Member management (view only)
- Activity monitoring

#### Staff

- Member management (view only)
- Basic admin features
- Application processing

#### Member

- Profile management
- Basic dashboard access
- Community features

### 📱 User Interface

#### Dashboard

- **Role-based Dashboard**: Different features based on user role
- **Statistics Cards**: Key metrics and community stats
- **Quick Actions**: Role-appropriate action buttons
- **Recent Activity**: Real-time activity feed
- **Responsive Design**: Works on desktop and mobile

#### Authentication Pages

- **Login Page**: Clean, modern design with demo accounts
- **Registration Page**: Comprehensive signup form
- **Error Handling**: User-friendly error messages
- **Loading States**: Smooth loading animations

### 🛡️ Security Features

#### Protected Routes

- **Authentication Guards**: Redirect unauthenticated users
- **Role-based Access**: Prevent unauthorized access
- **Session Validation**: Secure session management

#### Form Security

- **Input Validation**: Client and server-side validation
- **Password Requirements**: Secure password policies
- **CSRF Protection**: Built-in NextAuth protection

## Demo Accounts

For testing purposes, the following demo accounts are available:

| Role      | Email                 | Password    |
| --------- | --------------------- | ----------- |
| Admin     | admin@eternaldawn.com | password123 |
| Moderator | mod@eternaldawn.com   | password123 |
| Staff     | staff@eternaldawn.com | password123 |

## Technical Implementation

### Dependencies

```json
{
  "next-auth": "^4.24.5",
  "react-hook-form": "^7.48.2",
  "@hookform/resolvers": "^3.3.2",
  "zod": "^3.22.4",
  "bcryptjs": "^2.4.3"
}
```

### File Structure

```
src/
├── app/
│   ├── login/page.tsx          # Login page
│   ├── register/page.tsx       # Registration page
│   ├── dashboard/page.tsx      # User dashboard
│   ├── admin/page.tsx          # Admin panel
│   └── api/auth/[...nextauth]/ # NextAuth API routes
├── components/
│   ├── auth/
│   │   └── ProtectedRoute.tsx  # Route protection component
│   ├── providers/
│   │   └── SessionProvider.tsx # NextAuth provider
│   └── layout/
│       └── Header.tsx          # Updated header with auth
├── lib/
│   └── auth.ts                 # Authentication configuration
└── types/
    ├── index.ts                # Type definitions
    └── next-auth.d.ts          # NextAuth type extensions
```

### Key Components

#### ProtectedRoute

```typescript
<ProtectedRoute requiredRole="Admin">
  <AdminPanel />
</ProtectedRoute>
```

#### Role-based Features

```typescript
const features = [
  { name: "View Profile", available: true },
  { name: "Edit Profile", available: true },
  { name: "View Members", available: hasPermission(role, "Staff") },
  { name: "Review Applications", available: hasPermission(role, "Mod") },
  { name: "Manage Users", available: hasPermission(role, "Admin") },
  { name: "System Settings", available: hasPermission(role, "Owner") },
];
```

## Getting Started

1. **Install Dependencies**

   ```bash
   npm install
   ```

2. **Environment Variables**
   Create a `.env.local` file:

   ```
   NEXTAUTH_SECRET=your-secret-key-here
   NEXTAUTH_URL=http://localhost:3000
   ```

3. **Run Development Server**

   ```bash
   npm run dev
   ```

4. **Access the Portal**
   - Visit `http://localhost:3000/login`
   - Use demo accounts to test different roles
   - Navigate to `/dashboard` for user dashboard
   - Access `/admin` for admin panel (Admin+ roles only)

## Future Enhancements

### Planned Features

- **User Profile Management**: Edit profile, avatar upload
- **Application System**: Member application workflow
- **Forum Integration**: Role-based forum access
- **Notification System**: Real-time notifications
- **Activity Logging**: Comprehensive audit trail
- **API Integration**: Connect to external services

### Security Improvements

- **Two-Factor Authentication**: Enhanced security
- **Password Reset**: Self-service password recovery
- **Account Lockout**: Brute force protection
- **Session Management**: Advanced session controls

### User Experience

- **Dark/Light Theme**: Theme switching
- **Mobile App**: React Native companion app
- **Progressive Web App**: Offline capabilities
- **Internationalization**: Multi-language support

## Contributing

1. Follow the existing code style and patterns
2. Add proper TypeScript types for new features
3. Include role-based access control for new pages
4. Test with different user roles
5. Update documentation for new features

## License

This project is part of the Eternal Dawn gaming community platform.
