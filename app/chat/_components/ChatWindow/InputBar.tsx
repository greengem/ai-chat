import { Button, Input } from "@nextui-org/react";
import { IconSend } from "@tabler/icons-react";
export default function InputBar() {
    return (
        <div className="px-5 py-5 fixed bottom-0 left-64 right-0 bg-default-200">
            <div className="flex gap-x-2">
                <Input placeholder="Start typing" size="sm" />
                <Button radius="full" size="lg" isIconOnly><IconSend /></Button>
            </div>
        </div>
    )
}