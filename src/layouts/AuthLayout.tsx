import { IconChevronLeft, IconShoppingCart } from "@tabler/icons-react";
import { Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { AuthLayoutProps } from "@/types/ui";

export function AuthLayout({ children, ...props }: AuthLayoutProps) {
  return (
    <div
      className="relative grid min-h-dvh w-full place-content-center p-6 md:p-10"
      {...props}
    >
      <Button
        className="absolute top-8 left-8 font-semibold opacity-70 hover:opacity-100"
        variant="link"
        render={
          <Link to="/">
            <IconChevronLeft aria-hidden="true" />
            Inicio
          </Link>
        }
      />
      <main className="flex w-full max-w-lg flex-col items-center justify-center gap-6">
        <div className="flex items-center gap-2 self-center font-medium">
          <IconShoppingCart />
          Acme Inc.
        </div>
        {children}
      </main>
    </div>
  );
}
