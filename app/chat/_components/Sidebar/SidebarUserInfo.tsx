"use client"
import { useSession } from "next-auth/react";
import { User } from "@nextui-org/react";

export default function SidebarUserInfo() {
    const { data: session } = useSession();
    const userImage = session?.user?.image ?? "";

    return (
        <div className="absolute bottom-0 left-0 right-0 p-3">
            <User 
                name={session?.user?.name ?? "Unknown User"}
                avatarProps={{
                    src: userImage
                  }}
            />
            
        </div>
    )
}
