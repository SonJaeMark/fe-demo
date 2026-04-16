import { CustomNavbar } from "../components/customNavbar.js";
import { RegistrationForm } from "../module/registrationForm.js";
import { registerUser } from "../../core/registerLogic.js";

export function RegistrationView () {
  const html = `
    ${CustomNavbar()}
    <div class="flex justify-center items-center h-screen">
      ${RegistrationForm()}
    </div>
  `;

  // Set up event listener after rendering
  setTimeout(() => {
    const form = document.getElementById("registerForm");
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = form.querySelector('input[name="name"]').value;
        const email = form.querySelector('input[name="email"]').value;
        const password = form.querySelector('input[name="password"]').value;
        const role = form.querySelector('select[name="role"]').value.toLowerCase();
        const result = registerUser(email, password, role);
        if (result.success) {
          alert(result.message);
          window.location.hash = "#login";
        } else {
          alert(result.message);
        }
      });
    }
  }, 100);

  return html;
}