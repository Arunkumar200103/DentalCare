export interface MockUser {
  id: string;
  email: string;
  password: string;
  name: string;
  role: 'user' | 'nurse' | 'doctor';
  avatar?: string;
}

export interface AuthContextType {
  user: MockUser | null;
  login: (user: MockUser) => void;
  logout: () => void;
}