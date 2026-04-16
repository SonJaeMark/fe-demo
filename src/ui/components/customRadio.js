export function CustomRadio({ label, name, options = [] }) {
  return `
    <div class="mb-4">
      <p class="text-sm font-medium text-gray-700 mb-1">${label}</p>
      ${options.map(opt => `
        <label class="inline-flex items-center mr-4">
          <input type="radio" name="${name}" value="${opt}" class="mr-2">
          ${opt}
        </label>
      `).join("")}
    </div>
  `;
}