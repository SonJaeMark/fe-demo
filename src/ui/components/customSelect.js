export function CustomSelect({ label, name, options = [] }) {
  return `
    <div class="mb-4">
      <label class="block text-sm font-medium text-gray-700 mb-1">
        ${label}
      </label>
      <select name="${name}" class="w-full px-3 py-2 border rounded-lg">
        ${options.map(opt => `<option value="${opt}">${opt}</option>`).join("")}
      </select>
    </div>
  `;
}