import "./App.css";
import { Routes, Route } from "react-router-dom"

import CreatePoll from "./components/CreatePoll"
import RegisterVote from "./components/RegisterVote"
import ViewResult from "./components/ViewResult"
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<CreatePoll />}></Route>
        <Route path='/register-vote' element={<RegisterVote />}></Route>
        <Route path='/view-result' element={<ViewResult />}></Route>
      </Routes>
    </>
  )
}