import { CustomInput } from "../components/customInput.js";
import { CustomButton } from "../components/customButton.js";

export function LoginForm() {
  return `
    <form id="loginForm" class="bg-white p-6 rounded-lg shadow w-96">
      <h2 class="text-xl font-bold mb-4">Login</h2>

      ${CustomInput({ label: "Email", type: "email", name: "email" })}
      ${CustomInput({ label: "Password", type: "password", name: "password" })}

      ${CustomButton({ text: "Login", type: "submit" })}
    </form>
  `;
}