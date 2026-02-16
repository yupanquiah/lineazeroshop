import { IconChevronLeft } from "@tabler/icons-react";
import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex h-full min-h-dvh w-full items-center justify-center">
      <Link
        className="link absolute top-8 left-8 underline-offset-3 opacity-80 hover:underline hover:opacity-100"
        to="/"
      >
        <IconChevronLeft className="size-4.5" aria-hidden="true" />
        Inicio
      </Link>
      <main className="flex h-full w-full items-center justify-center">
        <Outlet />
      </main>
    </div>
  );
}
