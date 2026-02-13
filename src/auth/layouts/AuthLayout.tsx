import { IconChevronLeft } from "@tabler/icons-react";
import { Link } from "@tanstack/react-router";

import { AuthLayoutProps } from "@/auth/types/index";

export function AuthLayout({ children, ...props }: AuthLayoutProps) {
  return (
    <div
      className="flex h-full min-h-dvh w-full items-center justify-center"
      {...props}
    >
      <Link
        className="link absolute top-8 left-8 underline-offset-3 opacity-80 hover:underline hover:opacity-100"
        to="/"
      >
        <IconChevronLeft className="size-4.5" aria-hidden="true" />
        Inicio
      </Link>
      <main className="w-full max-w-sm">{children}</main>
    </div>
  );
}
