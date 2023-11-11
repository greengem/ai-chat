"use client";
import { useSidebarVisibility } from "@/contexts/SidebarContext";
import { Button, Input } from "@nextui-org/react";
import { IconSend } from "@tabler/icons-react";

export default function InputBar() {
    const { isSidebarVisible, toggleSidebar } = useSidebarVisibility();

    return (
        <div className="absolute bottom-0 right-0 left-0 p-5 bg-default-200">
            <div className="flex gap-x-2">
                <Input placeholder="Start typing" size="sm" />
                <Button radius="full" size="lg" isIconOnly><IconSend /></Button>
            </div>
        </div>
    )
}