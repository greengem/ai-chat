import InputBar from "./InputBar"
import MessageList from "./MessageList"

export default function ChatWindow() {
  return (
    <div className="mb-20">
      <MessageList />
      <InputBar />
    </div>
  )
}
