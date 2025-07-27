// User types
export interface User {
  id: string;
  username: string;
  email: string;
  role: 'user' | 'admin' | 'moderator';
  avatar?: string;
  discordId?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Guild application types
export interface GuildApplication {
  id: string;
  userId: string;
  game: 'Diablo IV' | 'Path of Exile' | 'Path of Exile 2' | 'Last Epoch' | 'Dune Awakening' | 'Division 2' | 'Destiny 2';
  characterName: string;
  characterLevel: number;
  experience: string;
  availability: string;
  whyJoin: string;
  status: 'pending' | 'approved' | 'rejected';
  createdAt: Date;
  updatedAt: Date;
}

// Forum types
export interface ForumPost {
  id: string;
  title: string;
  content: string;
  authorId: string;
  category: 'general' | 'gaming' | 'community' | 'announcements';
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

// Discord integration types
export interface DiscordMember {
  id: string;
  username: string;
  discriminator: string;
  avatar: string;
  roles: string[];
  joinedAt: Date;
  status: 'online' | 'idle' | 'dnd' | 'offline';
}

// Navigation types
export interface NavItem {
  label: string;
  href: string;
  icon?: string;
  children?: NavItem[];
} 