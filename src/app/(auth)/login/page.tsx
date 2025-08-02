import { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Login to your page" }, // Ini akan mengabaikan template dari layout induk
};

export default function Login() {
  return <div>Login</div>;
}
