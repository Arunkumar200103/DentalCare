export interface MockUser {
  email: string;
  password: string;
  role: "user" | "nurse" | "doctor";
  name: string;
}

export const mockUsers: MockUser[] = [
  { email: "alice@demo.com", password: "123", role: "user", name: "Alice" },
  { email: "nurse@demo.com", password: "123", role: "nurse", name: "Nurse Joy" },
  { email: "doc@demo.com", password: "123", role: "doctor", name: "Dr. Smith" },
];
