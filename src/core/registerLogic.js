// registerLogic.js
// Test accounts for each role
const testAccounts = [
  { username: 'admin@example.com', password: 'admin123', role: 'admin' },
  { username: 'student@example.com', password: 'student123', role: 'student' },
  { username: 'registrar@example.com', password: 'registrar123', role: 'registrar' }
];

// Function to register a new user
export function registerUser(username, password, role) {
  // Check if user already exists
  const existingUser = testAccounts.find(user => user.username === username);
  if (existingUser) {
    return { success: false, message: 'User already exists' };
  }
  // Add new user
  testAccounts.push({ username, password, role });
  return { success: true, message: 'User registered successfully' };
}

// Function to get all users (for testing)
export function getUsers() {
  return testAccounts;
}