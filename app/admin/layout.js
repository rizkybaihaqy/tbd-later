import { cookies } from "next/headers";

export default function AdminLayout({ dashboard, login }) {
  const isLoggedIn = cookies().get("auth").value === "true";
  return isLoggedIn ? dashboard : login;
}
