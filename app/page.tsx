import Link from "next/link"

export default function LandingPage() {
  return (
    <>
      <h1 className="text-5xl tracking-tight font-semibold">Landing Page</h1>
      <Link href="/chat">Chat</Link>
    </>
  )
}
