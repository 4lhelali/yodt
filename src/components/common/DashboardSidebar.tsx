"use client";

import { Calendar, FileText, Home } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DashboardSidebarFooter from "./DashboardSidebarFooter";

const DashboardSidebar = () => {
  const path = usePathname();

  const items = [
    {
      title: "Home",
      url: "/dashboard",
      icon: Home,
      current: path === "/dashboard",
    },
    {
      title: "Posts",
      url: "/dashboard/posts",
      icon: FileText,
      current: path.includes("/dashboard/posts"),
    },
    {
      title: "Events",
      url: "/dashboard/events",
      icon: Calendar,
      current: path.includes("/dashboard/events"),
    },
  ];

  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="my-6 flex items-center justify-center">
            <Image src="/images/logo.png" alt="Logo" width={100} height={100} />
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className={item.current ? "bg-secondary" : ""}
                  >
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <DashboardSidebarFooter />
      </SidebarFooter>
    </Sidebar>
  );
};

export default DashboardSidebar;
