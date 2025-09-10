export function isAuthenticated() {
  return localStorage.getItem("karaoke_admin") === "true";
}

export function authenticate(password) {
  if (password === "merlinthedog") {
    localStorage.setItem("karaoke_admin", "true");
    return true;
  }
  return false;
}

export function logout() {
  localStorage.removeItem("karaoke_admin");
}
