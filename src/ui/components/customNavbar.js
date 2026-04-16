export function CustomNavbar() {
  return `
    <nav class="bg-indigo-600 text-white p-4 flex justify-between">
      <h1 class="font-bold">My App</h1>
      <div class="space-x-4">
        <button onclick="window.location.hash='#login'">Login</button>
        <button onclick="window.location.hash='#register'">Register</button>
      </div>
    </nav>
  `;
}