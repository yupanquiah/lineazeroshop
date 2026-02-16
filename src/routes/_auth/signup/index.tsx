import { createFileRoute } from "@tanstack/react-router";

import { Register } from "@/auth/Register";

export const Route = createFileRoute("/_auth/signup/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Register />;
}
