import React from "react";

interface LayoutProps {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
  login: React.ReactNode;
}

export default function layout({
  children,
  notifications,
  revenue,
  users,
  login,
}: LayoutProps) {
  const isLogin = true;

  return isLogin ? (
    <div>
      <div>{children}</div>
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>{users}</div>
          <div>{revenue}</div>
        </div>
        <div style={{ display: "flex", flex: 1 }}>{notifications}</div>
      </div>
    </div>
  ) : (
    login
  );
}
