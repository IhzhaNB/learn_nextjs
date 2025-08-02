"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import "./styles.css";

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div>
      {navLinks.map((item, index) => {
        // Logika untuk menentukan apakah link aktif
        // Ini akan true jika pathname saat ini sama persis dengan href link
        // Atau jika pathname saat ini dimulai dengan href link (untuk nested routes),
        // tapi hati-hati untuk link root (misalnya '/')
        const isActive =
          pathname === item.href ||
          (pathname.startsWith(item.href) && item.href !== "/");

        return (
          <Link
            className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}
            href={item.href}
            key={index}
          >
            {item.name}
          </Link>
        );
      })}
      {children}
    </div>
  );
}
