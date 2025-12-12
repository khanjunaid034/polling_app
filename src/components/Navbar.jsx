import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <>
            <ul className="flex flex-row bg-blue-400 font-bold text-white justify-evenly py-2 cursor-pointer">
                <Link to='/'>Create Poll</Link>
                <Link to='/register-vote'>Regiser Vote</Link>
                <Link to='/view-result'>View Result</Link>
            </ul>
        </>
    )
}