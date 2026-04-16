export function CustomInput({ label, type = "text", name, placeholder }) {
  return `
    <div class="mb-4">
      <label class="block text-sm font-medium text-gray-700 mb-1">
        ${label}
      </label>
      <input
        type="${type}"
        name="${name}"
        placeholder="${placeholder}"
        class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
    </div>
  `;
}