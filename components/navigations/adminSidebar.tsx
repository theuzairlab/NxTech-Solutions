"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "../ui/sidebar";
import {
    IconArrowLeft,
    IconAward,
    IconBrandTabler,
    IconBuilding,
    IconFileText,
    IconMail,
    IconSettings,
    IconStar,
    IconUserBolt,
} from "@tabler/icons-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { FolderGit2, MonitorCloud } from "lucide-react";

export function AdminSidebar() {
    const pathname = usePathname();
    const router = useRouter();
    const links = [
        {
            label: "Dashboard",
            href: "/dashboard",
            icon: (
                <IconBrandTabler className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
            ),
        },
        {
            label: "Users",
            href: "/dashboard/users",
            icon: (
                <IconUserBolt className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
            ),
        },
        {
            label: "Services",
            href: "/dashboard/services",
            icon: (
                <MonitorCloud className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
            ),
        },
        {
            label: "Projects",
            href: "/dashboard/projects",
            icon: (
                <FolderGit2 className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
            ),
        },
        {
            label: "Testimonials",
            href: "/dashboard/testimonials",
            icon: (
                <IconStar className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
            ),
        },
        {
            label: "Achievements",
            href: "/dashboard/achievements",
            icon: (
                <IconAward className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
            ),
        },
        {
            label: "Industries",
            href: "/dashboard/industries",
            icon: (
                <IconBuilding className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
            ),
        },
        {
            label: "Blogs",
            href: "/dashboard/blogs",
            icon: (
                <IconFileText className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
            ),
        },
        {
            label: "Contacts",
            href: "/dashboard/contacts",
            icon: (
                <IconMail className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
            ),

        },
        {
            label: "Settings",
            href: "/dashboard/settings",
            icon: (
                <IconSettings className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
            ),
        },
        
    ];
    const [open, setOpen] = useState(false);
    const { data: session } = useSession();

    const handleLogout = async (e: React.MouseEvent) => {
        e.preventDefault();
        await signOut({ callbackUrl: "/" });
    };

    return (
        <div className="h-screen border-r border-neutral-200 bg-primary pr-4">
            <Sidebar open={open} setOpen={setOpen}>
                <SidebarBody className="justify-between gap-10 h-full">
                    <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
                        {open ? <Logo onClick={() => router.push("/")} /> : <LogoIcon onClick={() => router.push("/")} />}
                        <div className="mt-8 flex flex-col gap-2">
                            {links.map((link, idx) => (
                                <SidebarLink
                                    key={idx}
                                    link={link}
                                    className={cn(
                                        "rounded-md px-2",
                                        pathname === link.href &&
                                        "bg-neutral-200 text-neutral-900 dark:bg-neutral-700 dark:text-white"
                                    )}
                                />
                            ))}
                             <button
                                 onClick={handleLogout}
                                 className="flex w-full items-center gap-3 rounded-md px-2 py-2 text-sm cursor-pointer"
                             >
                                 <IconArrowLeft className="h-5 w-5 shrink-0" />
                                 <span className=" text-base group-hover/sidebar:translate-x-1 transition duration-150 whitespace-pre inline-block">
                                     Logout
                                 </span>
                             </button>
                    </div>
                </div>
                <div className="space-y-2">
                    <SidebarLink
                        link={{
                            label: session?.user?.name || session?.user?.email || "Admin",
                            href: "#",
                            icon: (
                                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary-foreground text-xs font-semibold text-primary">
                                    {(session?.user?.name || session?.user?.email || "A")
                                        .charAt(0)
                                        .toUpperCase()}
                                </div>
                            ),
                        }}
                    />

                </div>
            </SidebarBody>
        </Sidebar>
    </div >
  );
}
export const Logo = ({ onClick }: { onClick?: () => void }) => {
    return (
        <a
            href="#"
            onClick={(e) => {
                e.preventDefault();
                onClick?.();
            }}
            className="relative z-20 flex items-center space-x-2 py-1 text-sm font-semibold text-black"
        >
            <Image src="/icon.png" alt="NxTech Dashboard" width={30} height={30} className="shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white" />
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="font-medium text-base whitespace-pre text-black dark:text-white"
            >
                NxTech Dashboard
            </motion.span>
        </a>
    );
};
export const LogoIcon = ({ onClick }: { onClick?: () => void }) => {
    return (
        <a
            href="#"
            onClick={(e) => {
                e.preventDefault();
                onClick?.();
            }}
            className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
        >
            <Image src="/icon.png" alt="NxTech Dashboard" width={30} height={30} className="shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white" />
        </a>
    );
};

