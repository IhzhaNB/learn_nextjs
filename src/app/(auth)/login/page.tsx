"use client";

// import { Metadata } from "next";
import { useRouter } from "next/navigation";

// export const metadata: Metadata = {
//   title: { absolute: "Login to your page" }, // Ini akan mengabaikan template dari layout induk
// };

export default function Login() {
  const router = useRouter();

  const handleLogin = () => {
    const masuk = confirm("Apakah anda ingin masuk?");

    if (masuk) {
      router.replace("/dashboard");
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Masuk</button>
    </div>
  );
}
