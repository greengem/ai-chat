import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="text-center w-full">
      <h1 className="text-5xl tracking-tight font-semibold mb-10">Landing Page</h1>
      <Link href="/chat">Go to Chat</Link>
    </div>
  )
}
