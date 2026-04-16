export function CustomButton({ text, type = "button", variant = "primary" }) {
  const base = "px-4 py-2 rounded-lg font-medium transition";

  const styles = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300"
  };

  return `
    <button type="${type}" class="${base} ${styles[variant]}">
      ${text}
    </button>
  `;
}