import { useEffect, useState } from "react"
import hostname from "../../hostname"
import axios from "axios"

export default function RegisterVote() {

    const [apiData, setApiData] = useState(null)

    const fetchData = async () => {
        const result = await axios.get(`${hostname}/polls/fetch`)
        setApiData(result.data)
    }

    const submitVote = async (e) => {
        e.preventDefault()
        const selectedOption = e.target.name

        const axiosOptions = {
            url: `${hostname}/polls/updateVote`,
            method: 'PATCH',
            data: { selectedOption: selectedOption }
        }

        try {
            const response = await axios(axiosOptions)
            // console.log(response);
            alert(response.data.message)
            
        } catch (error) {
            console.log(error)
            alert(error.response.data.message || "Error occurred")
        }
        
    }

    useEffect(() => {
        fetchData()
    }, [])

    if (!apiData) {
        return <p>Loading...</p>
    }

    return (
        <div className="flex justify-center text-center">
            {/* <h2>Register Vote</h2> */}
            <div className="border-blue-800 border-2 w-80 rounded-2xl my-5 px-5 py-5">
                <h2 className="text-xl text-center text-blue-900">Leave your responses</h2>
                <h3 className="font-bold mt-5">{apiData.question}</h3>
                <div className="grid grid-rows-2 grid-cols-2 gap-1 mt-5">
                    <button className="border rounded-md bg-blue-300 cursor-pointer" onClick={submitVote} name="option1">{apiData.option1}</button>
                    <button className="border rounded-md bg-blue-300 cursor-pointer" onClick={submitVote} name="option2">{apiData.option2}</button>
                    <button className="border rounded-md bg-blue-300 cursor-pointer" onClick={submitVote} name="option3">{apiData.option3}</button>
                    <button className="border rounded-md bg-blue-300 cursor-pointer" onClick={submitVote} name="option4">{apiData.option4}</button>
                </div>
            </div>
        </div>
    )
}
