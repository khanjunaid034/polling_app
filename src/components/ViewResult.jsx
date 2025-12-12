import { useEffect, useState } from "react"
import hostname from "../../hostname"
import axios from "axios"
import Option from "../components/Option"

export default function ViewResult() {

    const [apiData, setApiData] = useState(null)

    const fetchData = async () => {
        const result = await axios.get(`${hostname}/polls/fetch`)
        setApiData(result.data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    if (!apiData) {
        return <p>Loading...</p>
    }


    return (
        <>
            {/* <h2>View Result</h2> */}
            <div className="flex justify-center mt-5">

                <div className="flex flex-col items-center border w-90">
                    <h3 className="text-xl font-bold text-blue-700">Poll results</h3>

                    <p className="my-3 mb-5">{apiData.question}</p>
                    <div className="w-70 flex flex-col gap-5">
                        <Option option={apiData.option1} optionVotes={apiData.option1Votes} optionPercentage={apiData.option1Percentage}/>
                        <Option option={apiData.option2} optionVotes={apiData.option2Votes} optionPercentage={apiData.option2Percentage}/>
                        <Option option={apiData.option3} optionVotes={apiData.option3Votes} optionPercentage={apiData.option3Percentage}/>
                        <Option option={apiData.option4} optionVotes={apiData.option4Votes} optionPercentage={apiData.option4Percentage}/>
                    </div>

                </div>
            </div>
        </>
    )
}