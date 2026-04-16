import { CustomInput } from "../components/customInput.js";
import { CustomButton } from "../components/customButton.js";
import { CustomSelect } from "../components/customSelect.js";

export function RegistrationForm() {
  return `
    <form id="registerForm" class="bg-white p-6 rounded-lg shadow w-96">
      <h2 class="text-xl font-bold mb-4">Register</h2>

      ${CustomInput({ label: "Full Name", name: "name" })}
      ${CustomInput({ label: "Email", type: "email", name: "email" })}
      ${CustomInput({ label: "Password", type: "password", name: "password" })}

      ${CustomSelect({
        label: "Role",
        name: "role",
        options: ["Student", "Admin", "Registrar"]
      })}

      ${CustomButton({ text: "Register", type: "submit" })}
    </form>
  `;
}