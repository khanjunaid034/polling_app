export default function Option(props) {
    return (
        <div className="flex flex-row justify-between">
            <p>{props.option}</p>
            <div className="flex gap-4">
                <p>({props.optionPercentage}%)</p>
                <p>{props.optionVotes} Votes</p>
            </div>
        </div>
    )
}