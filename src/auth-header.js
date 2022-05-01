export default function authHeader() {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  let user = JSON.parse(localStorage.getItem("user"));
  if (user && user.token) {
    return { Authorization: "Bearer " + user.token };
  } else {
    return {};
  }
}