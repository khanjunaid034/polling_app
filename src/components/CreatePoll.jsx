import hostname from "../../hostname"
import { useState } from "react"
import axios from "axios"

export default function CreatePoll() {

    // declare and set initial state for formData
    const [formData, setFormData] = useState({
        question: "",
        option1: "",
        option2: "",
        option3: "",
        option4: "",
    })

    const handleFormChange = (e) => {
        const {name , value} = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const formSubmit = async(e) => {
        e.preventDefault()
        // get the keys of formData object to check if any field is empty
        const myKeys = Object.keys(formData)
        for(const key of myKeys) {
            if(formData[key].trim() == "") {
                alert("Fill all fields")
                return
            }
        }

        const axiosOptions = {
            url: `${hostname}/polls/create`,
            method: 'PUT',
            data: formData
        }

        try {
            const response = await axios(axiosOptions)
            alert("Poll created")
        } catch (error) {
            console.error(error)
        }
    }

    return(
        <>
            <h2 className="text-center text-3xl my-2 font-bold">Create Poll</h2>
            <form className="flex flex-col gap-2 items-center" onSubmit={formSubmit}>
                <input className="formElements" type="text" name="question" value={formData.question} onChange={handleFormChange} placeholder="Enter question"/>
                <input className="formElements" type="text" name="option1" value={formData.option1} onChange={handleFormChange} placeholder="Set option 1"/>
                <input className="formElements" type="text" name="option2" value={formData.option2} onChange={handleFormChange} placeholder="Set option 2"/>
                <input className="formElements" type="text" name="option3" value={formData.option3} onChange={handleFormChange} placeholder="Set option 3"/>
                <input className="formElements" type="text" name="option4" value={formData.option4} onChange={handleFormChange} placeholder="Set option 4"/>
                <button className="formElements cursor-pointer bg-blue-300" type="submit">Submit</button>
            </form>
        </>
    )
}