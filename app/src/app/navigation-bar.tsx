import Link from "next/link"

export default function NavBar() {
    return (
        <>
        <div className="flex flex-row h-20 space-x-4">
          <div>Logo</div>
          <div className="gap max-w-5xl"></div>
          <Link href="/experiences" className="hover:focus:first-letter:">Experiences</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/interests">Hobbies/Interests</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/support">Support</Link>
        </div>
        </>
    )
}