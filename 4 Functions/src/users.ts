// Alias for primitive types
type ID = number | string;

// Alias for a union type
type UserRole = "admin" | "editor" | "viewer";

// Alias for an object type
type User = {
  id: ID;
  name: string;
  role: UserRole;
  isActive: boolean;
};

// Alias for an array of Users
type UserList = User[];

// Alias for a function type
type Logger = (message: string) => void;

// Example of a function using alias
const log: Logger = (message) => {
  console.log(`[LOG]: ${message}`);
};

// Creating users
const user1: User = {
  id: 1,
  name: "Alice",
  role: "admin",
  isActive: true,
};

const user2: User = {
  id: "A2",
  name: "Bob",
  role: "viewer",
  isActive: false,
};

// Array of users
const users: UserList = [user1, user2];

// Alias for a function that processes users
type ProcessUser = (user: User) => void;

// Function that uses ProcessUser alias
const printUserInfo: ProcessUser = (user) => {
  log(`User ${user.name} (ID: ${user.id}) is a ${user.role}`);
};

// Process all users
users.forEach(printUserInfo);

// Alias for a combined type (Admin & User)
type Admin = {
  privileges: string[];
};

type AdminUser = User & Admin;

const admin: AdminUser = {
  id: 99,
  name: "Charlie",
  role: "admin",
  isActive: true,
  privileges: ["manage-users", "edit-content"],
};

// Function that checks user privileges
const checkAdminPrivileges = (user: AdminUser) => {
  log(`Admin ${user.name} has privileges: ${user.privileges.join(", ")}`);
};

checkAdminPrivileges(admin);
