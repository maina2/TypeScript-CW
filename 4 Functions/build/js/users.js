"use strict";
// Example of a function using alias
const log = (message) => {
    console.log(`[LOG]: ${message}`);
};
// Creating users
const user1 = {
    id: 1,
    name: "Alice",
    role: "admin",
    isActive: true,
};
const user2 = {
    id: "A2",
    name: "Bob",
    role: "viewer",
    isActive: false,
};
// Array of users
const users = [user1, user2];
// Function that uses ProcessUser alias
const printUserInfo = (user) => {
    log(`User ${user.name} (ID: ${user.id}) is a ${user.role}`);
};
// Process all users
users.forEach(printUserInfo);
const admin = {
    id: 99,
    name: "Charlie",
    role: "admin",
    isActive: true,
    privileges: ["manage-users", "edit-content"],
};
// Function that checks user privileges
const checkAdminPrivileges = (user) => {
    log(`Admin ${user.name} has privileges: ${user.privileges.join(", ")}`);
};
checkAdminPrivileges(admin);
