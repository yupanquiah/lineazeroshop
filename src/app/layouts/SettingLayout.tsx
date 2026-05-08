import { Link } from "@tanstack/react-router";
import { ReactNode } from "react";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function SettingLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Tabs>
        <TabsList>
          <TabsTrigger value="company" asChild>
            <Link to="/settings/company">Empresa</Link>
          </TabsTrigger>

          <TabsTrigger value="appearance" asChild>
            <Link to="/settings/appearance">Apariencia</Link>
          </TabsTrigger>
        </TabsList>
      </Tabs>
      {children}
    </>
  );
}
