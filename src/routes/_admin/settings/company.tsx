import { createFileRoute } from "@tanstack/react-router";

import { CompanySettings } from "@/app/settings/Company";

export const Route = createFileRoute("/_admin/settings/company")({
  component: RouteComponent,
  staticData: { breadcrumb: "Empresa" },
});

function RouteComponent() {
  return <CompanySettings />;
}
