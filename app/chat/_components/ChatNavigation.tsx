import Link from "next/link";

export default function ChatNavigation() {
    return (
        <header className="p-5 bg-default-100">
            <nav>
                <Link href="/">Back</Link>
            </nav>
        </header>
    )
}