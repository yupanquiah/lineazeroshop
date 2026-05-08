import { createFileRoute } from "@tanstack/react-router";

import { Appearance } from "@/app/settings/Appearance";

export const Route = createFileRoute("/_admin/settings/appearance")({
  component: RouteComponent,
  staticData: { breadcrumb: "Apariencia" },
});

function RouteComponent() {
  return <Appearance />;
}
