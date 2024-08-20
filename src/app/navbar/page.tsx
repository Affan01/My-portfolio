// import Link from "next/link";
// function Navbar(){
//     return(
// <nav className="flex justify-between bg-whh text-secondary p-7  border-2 border-whh">
//     <div className="flex">
//         <div className=" flex justify-center text-white text-center text-[28px] font-extrabold mt-[3px] w-[44px] h-[44px] float-left border rounded-full bg-primary">
//         <Link href="/">A</Link></div>
//     <div className=" text-[20px]  float-left leading-10 text-black font-semibold font-poppins-Helvetica-sans-serif mt-1 ml-2">
//         <span className="font-normal">Affan</span>Hussain</div>
//     </div>
//     {/* Links DIV */}
//     <div className=" flex mt-[10px] gap-16 font-poppins-Helvetica-sans-serif text-secondary">
//      <Link href="/" className="transition delay-0  hover:text-black">Home</Link>
//      <Link href="/resume" className="transition delay-0  hover:text-black">Resume</Link>
//      <Link href="/portfolio" className="transition delay-0  hover:text-black">Portfolio</Link>
//      <Link href="/blog" className="transition delay-0  hover:text-black">Blog</Link>
//      <Link href="/contact" className="transition delay-0  hover:text-black">Contact</Link>
//      </div>
    

// </nav>
//     )
// }export default Navbar;


'use client'
import Link from "next/link";
import { useState } from "react";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-whh text-secondary p-7 border-2 border-whh relative">
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <div className="flex justify-center text-white text-center text-[28px] font-extrabold mt-[3px] w-[44px] h-[44px] border rounded-full bg-primary">
                        <Link href="/">A</Link>
                    </div>
                    <div className="text-[20px] leading-10 text-black font-semibold font-poppins-Helvetica-sans-serif mt-1 ml-2">
                        <span className="font-normal">Affan</span> Hussain
                    </div>
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-secondary focus:outline-none">
                        ☰
                    </button>
                </div>
                <div className="hidden md:flex gap-12 mt-4 md:mt-0 font-poppins-Helvetica-sans-serif text-secondary">
                    <Link href="/" className="transition delay-0 hover:text-black">Home</Link>
                    <Link href="/resume" className="transition delay-0 hover:text-black">Resume</Link>
                    <Link href="/portfolio" className="transition delay-0 hover:text-black">Portfolio</Link>
                    <Link href="/blog" className="transition delay-0 hover:text-black">Blog</Link>
                    <Link href="/contact" className="transition delay-0 hover:text-black">Contact</Link>
                </div>
            </div>
            <div className={`absolute  top-full left-0 right-0 bg-whh flex flex-col md:hidden font-poppins-Helvetica-sans-serif text-secondary z-50 shadow-lg transition-transform duration-300 ease-in-out transform ${isOpen ? 'scale-y-100' : 'scale-y-0'} origin-top`}>
                <Link href="/" className="transition delay-0 hover:text-black py-2 px-4">Home</Link>
                <Link href="/resume" className="transition delay-0 hover:text-black py-2 px-4">Resume</Link>
                <Link href="/portfolio" className="transition delay-0 hover:text-black py-2 px-4">Portfolio</Link>
                <Link href="/blog" className="transition delay-0 hover:text-black py-2 px-4">Blog</Link>
                <Link href="/contact" className="transition delay-0 hover:text-black py-2 px-4">Contact</Link>
            </div>
        </nav>
    );
}

export default Navbar;
