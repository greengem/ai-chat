import ChatNavigation from "../ChatNavigation"
import InputBar from "./InputBar"
import MessageList from "./MessageList"

export default function ChatWindow() {
  return (
    <div className="relative h-full overflow-y-scroll">
      <ChatNavigation />
      <MessageList />
      <InputBar />
    </div>
  )
}
