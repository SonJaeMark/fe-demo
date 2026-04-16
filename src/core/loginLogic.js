// loginLogic.js
import { getUsers } from './registerLogic.js';

// Function to login a user
export function loginUser(username, password) {
  const users = getUsers();
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    return { success: true, user };
  } else {
    return { success: false, message: 'Invalid username or password' };
  }
}