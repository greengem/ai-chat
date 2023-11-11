import Link from "next/link";

export default function HistoryItem() {
    return (
        <li>
            <Link href={`/chat/1`}>History Item</Link>
        </li>
    )
}
