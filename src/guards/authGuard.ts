export function authGuard(to: any, from: any, next: any) {
    if (localStorage.getItem("token")) {
      next(); // allow to enter route
    } else {
      next("/login"); // go to '/login';
    }
  }