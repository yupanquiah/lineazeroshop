import { ReactNode } from "react";

import { AppHeader } from "@/app/components/AppHeader";
import { AppSidebar } from "@/app/components/AppSidebar";
import { SidebarInset, SidebarProvider } from "@/app/components/ui/sidebar";
import { NavUserProps } from "@/app/types/navigation";

interface Props extends NavUserProps {
  children: ReactNode;
}

export function AppLayout({ children, user }: Props) {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar user={user} variant="inset" />
      <SidebarInset>
        <AppHeader />
        <main className="flex flex-col gap-4 p-4 md:gap-6 md:py-6">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
