"use client";

import { IconSettings, type Icon } from "@tabler/icons-react";
import { Link, LinkProps } from "@tanstack/react-router";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/app/components/ui/sidebar";

interface Props {
  title: string;
  to: NonNullable<LinkProps["to"]>;
  icon: Icon;
}

const items: Props[] = [
  {
    title: "Settings",
    to: "/settings",
    icon: IconSettings,
  },
];

export function NavSecondary({ ...props }) {
  return (
    <SidebarGroup {...props}>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <Link to={item.to}>
                  <item.icon />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
