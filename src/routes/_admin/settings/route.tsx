import { createFileRoute, Outlet } from "@tanstack/react-router";

import { SettingLayout } from "@/app/layouts/SettingLayout";

export const Route = createFileRoute("/_admin/settings")({
  component: RouteComponent,
  staticData: {
    breadcrumb: "Ajustes",
  },
});

function RouteComponent() {
  return (
    <SettingLayout>
      <Outlet />
    </SettingLayout>
  );
}
