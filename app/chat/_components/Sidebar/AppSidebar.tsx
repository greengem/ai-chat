"use client";
import { useSidebarVisibility } from "@/contexts/SidebarContext";
import HistoryList from "./HistoryList"
import SidebarUserInfo from "./SidebarUserInfo";
import SidebarBranding from "./SidebarBranding";

export default function AppSidebar() {
    const { isSidebarVisible, toggleSidebar } = useSidebarVisibility();

    return (
        <>
            <aside className={`w-[260px] bg-default-100 h-full flex-none ${isSidebarVisible ? 'block' : 'hidden'}`}>
                <SidebarBranding />
                <HistoryList />
                <SidebarUserInfo />
            </aside>
        </>
    )
}
