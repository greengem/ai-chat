import HistoryItem from "./HistoryItem"

export default function HistoryList() {
    return (
        <div className="p-5 whitespace-nowrap">
            <ul>
                <HistoryItem />
                <HistoryItem />
            </ul>
        </div>
    )
}
