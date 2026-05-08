import { createFileRoute } from "@tanstack/react-router";

import { Dashboard } from "@/app/dashboard/Dashboard";

export const Route = createFileRoute("/_admin/dashboard")({
  component: RouteComponent,
  staticData: { breadcrumb: "Dashboard" },
});

function RouteComponent() {
  return <Dashboard />;
}
