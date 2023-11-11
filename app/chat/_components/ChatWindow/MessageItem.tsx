import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { IconShare, IconBrandOpenai } from "@tabler/icons-react";
import Image from "next/image";

export default function MessageItem() {
    return (
        <>
        <div className="bg-default-900 text-default-100 rounded-3xl p-5 flex">
            <IconBrandOpenai size={46} className="flex-none mr-3" />
            <p className="text-sm shrink">Message Item. Message Item. Message Item. Message Item. Message Item. Message Item. Message Item. Message Item. Message Item. Message Item. Message Item. Message Item. Message Item. Message Item. Message Item. Message Item. Message Item. Message Item. Message Item. Message Item. Message Item. Message Item. Message Item. Message Item. Message Item. Message Item. Message Item. Message Item. Message Item. Message Item. Message Item. Message Item. Message Item. Message Item. Message Item. Message Item. Message Item. Message Item. Message Item. Message Item. Message Item. Message Item. Message Item. Message Item. Message Item. Message Item. Message Item. Message Item. Message Item. Message Item. Message Item. Message Item. Message Item. Message Item. Message Item. Message Item. Message Item. Message Item. Message Item. Message Item. Message Item. Message Item. Message Item. Message Item. Message Item. Message Item. Message Item. Message Item. Message Item. Message Item. Message Item. Message Item.</p>
            <IconShare size={16} className="flex-none mr-1" />
        </div>
        </>
    )
}