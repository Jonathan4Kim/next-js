import Link from "next/link"
import Resume from "./experiences/page"
import NavBar from "./navigation-bar"
import "./globals.css"

export default function Home() {
  return (
      <>
      <div className="flex flex-col align-middle">
        <NavBar></NavBar>
        <div className="flex text-center uppercase bg-red-500 md:bg-green-500 h-[42rem]">Initial</div>
        <br className="bg-red-300"></br>
        <div className="bg-indigo-800 text-center h-80">Prior Engagements</div>
        <br className="bg-red-300"></br>
        <div className="bg-slate-500">Footer</div>
      </div>
    </>
  )
}