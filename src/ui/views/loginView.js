import { CustomNavbar } from "../components/customNavbar.js";
import { LoginForm } from "../module/loginForm.js";
import { loginUser } from "../../core/loginLogic.js";

export function LoginView() {
  const html = `
    ${CustomNavbar()}
    <div class="flex justify-center items-center h-screen">
      ${LoginForm()}
    </div>
  `;

  // Set up event listener after rendering
  setTimeout(() => {
    const form = document.getElementById("loginForm");
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = form.querySelector('input[name="email"]').value;
        const password = form.querySelector('input[name="password"]').value;
        const result = loginUser(email, password);
        if (result.success) {
          alert(`Login successful! Welcome ${result.user.role}`);
          window.location.hash = `#${result.user.role}Dashboard`;
        } else {
          alert(result.message);
        }
      });
    }
  }, 100);

  return html;
}