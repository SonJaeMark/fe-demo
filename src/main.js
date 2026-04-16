import { LoginView } from "./ui/views/loginView.js";
import { RegistrationView } from "./ui/views/registrationView.js";
import { AdminDashboardView } from "./ui/views/adminDashboardView.js";
import { StudentDashboardView } from "./ui/views/studentDashboardView.js";
import { RegistrarDashboardView } from "./ui/views/registrarDashboardView.js";

const app = document.getElementById("app");

const routes = {
  login: LoginView,
  register: RegistrationView,
  adminDashboard: AdminDashboardView,
  studentDashboard: StudentDashboardView,
  registrarDashboard: RegistrarDashboardView
};

function navigate(route) {
  const view = routes[route];
  if (view) {
    app.innerHTML = view();
  }
}

function handleHashChange() {
  const hash = window.location.hash.substring(1); // remove #
  navigate(hash || "login");
}

// Listen to hash changes
window.addEventListener("hashchange", handleHashChange);

// Initial load
handleHashChange();