"use client";
import { useSidebarVisibility } from "@/contexts/SidebarContext";
import HistoryList from "./HistoryList"
import SidebarUserInfo from "./SidebarUserInfo";
import SidebarBranding from "./SidebarBranding";

export default function AppSidebar() {
    const { isSidebarVisible, toggleSidebar } = useSidebarVisibility();

    return (
        <>
            <aside className={`transform transition-all duration-200 ease-in-out ${isSidebarVisible ? 'w-64' : 'w-0'}  bg-default-100 h-full flex-none overflow-hidden`}>
                <SidebarBranding />
                <HistoryList />
                <SidebarUserInfo />
            </aside>
        </>
    )
}
