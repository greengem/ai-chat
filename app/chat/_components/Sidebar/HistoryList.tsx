import HistoryItem from "./HistoryItem"

export default function HistoryList() {
    return (
        <div className="p-5">
            <ul>
                <HistoryItem />
                <HistoryItem />
            </ul>
        </div>
    )
}
