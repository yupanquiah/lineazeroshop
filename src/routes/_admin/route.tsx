import { createFileRoute, Outlet } from "@tanstack/react-router";

import { AppLayout } from "@/app/layouts/AppLayout";
import { getSessionFn } from "@/data/session";

export const Route = createFileRoute("/_admin")({
  component: RouteComponent,
  loader: async () => {
    const session = await getSessionFn();

    return { user: session.user };
  },
});

function RouteComponent() {
  const { user } = Route.useLoaderData();

  return (
    <AppLayout user={user}>
      <Outlet />
    </AppLayout>
  );
}
