import { TablerIcon } from "@tabler/icons-react";
import { ToOptions } from "@tanstack/react-router";
import { User } from "better-auth";

export interface BreadcrumbItem {
  title: string;
  to: ToOptions["to"];
}

export interface NavItem {
  title: string;
  href: ToOptions["to"];
  icon?: TablerIcon | null;
  isActive?: boolean;
}

export interface NavUserProps {
  user: User;
}
