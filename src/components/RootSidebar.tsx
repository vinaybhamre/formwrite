"use client";

import { cn } from "@/lib/utils";
import { FileEditIcon, LayoutTemplateIcon, User2Icon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type SidebarLinkProps = {
  text: string;
  href: string;
  Icon: JSX.Element;
  isActive?: boolean;
};

function SidebarLink({ text, href, Icon, isActive }: SidebarLinkProps) {
  return (
    <Link href={href}>
      <div className="flex gap-5">
        <div className="">{Icon}</div>
        <p
          className={cn(
            "text-xl font-semibold",
            ` ${isActive ? "text-primary" : "text-zinc-500"}`,
          )}
        >
          {text}
        </p>
      </div>
    </Link>
  );
}

const RootSidebar = () => {
  const pathname = usePathname();

  return (
    <div className=" md:py-16 md:px-8 md:w-2/12 flex flex-col gap-8 h-screen border-r border-r-zinc-300">
      <SidebarLink
        text="My Forms"
        href="/app"
        Icon={<FileEditIcon color={pathname === "/app" ? "#000" : "#71717a"} />}
        isActive={pathname === "/app"}
      />
      <SidebarLink
        text="Templates"
        href="/app/templates"
        Icon={
          <LayoutTemplateIcon
            color={pathname === "/app/templates" ? "#000" : "#71717a"}
          />
        }
        isActive={pathname === "/app/templates"}
      />
      <SidebarLink
        text="Account"
        href="/app/account"
        Icon={
          <User2Icon color={pathname === "/app/account" ? "#000" : "#71717a"} />
        }
        isActive={pathname === "/app/account"}
      />
    </div>
  );
};

export default RootSidebar;
