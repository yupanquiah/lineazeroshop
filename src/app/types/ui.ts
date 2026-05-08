import type { ReactNode } from "react";

import type { BreadcrumbItem } from "@/app/types/navigation";

export type AppLayoutProps = {
  children: ReactNode;
  breadcrumbs?: BreadcrumbItem[];
};
