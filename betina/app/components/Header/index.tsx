
import Link from "next/link"


export const Header =()=>{
    return(
        <>
        <header>

     <div className="bg-gradient-to-r to-black to-blue-500 p-5 text-black-900 text-2xl font-bold  header-container-styles ">
            <h1 className="hover:text-blue-900">Bethynna Dlambe</h1>

            <nav className="flex justify-end space-x-4 mt-4  items-right">
                <Link href="/" className="text-blue-900 hover:text-blue-300">Home</Link>
                <Link href="/about" className="text-blue-900 hover:text-blue-300">About</Link>
                <Link href="/skills" className="text-blue-900 hover:text-blue-300">Skills</Link>
                <Link href="/projects" className="text-blue-900 hover:text-blue-300">Projects</Link>
                <Link href="/contact" className="text-blue-900 hover:text-blue-300">Contact</Link>
            </nav>


            
            </div>
  
        </header>
        </>
    )
}