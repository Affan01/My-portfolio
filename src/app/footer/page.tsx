// import Link from "next/link";
// import { FaLinkedin } from "react-icons/fa";
// import { FaInstagramSquare } from "react-icons/fa";
// import { FaFacebookSquare } from "react-icons/fa";function Footer(){
//     return(
        

//            <footer className=" block absolute my-15 w-[1313px] unicode-bidi-isolate mx-[-40px] p-4 bg-[#f4efef] border-t-2 border-[#f2f2f2] rounded-b-[40px] ">
//            <div className="flex justify-evenly items-center">
//            <div className="flex items-center mr-96">
//            <Link href="/"><FaLinkedin size={45} className="text-secondary"></FaLinkedin></Link>
//            <Link href="/"><FaInstagramSquare size={45} className="text-secondary"/></Link>
//            <Link href="/"><FaFacebookSquare size={45} className="text-secondary"/></Link>
//             </div>
//             <div className="ml-48 ">
//                 <h1 className="text-secondary text-sm">© 2024 All rights reserved.</h1>
//             </div>
//             </div>
//             </footer>
            
//     )
// }export default Footer;



import Link from "next/link";
import { FaLinkedin, FaInstagramSquare, FaFacebookSquare } from "react-icons/fa";

function Footer() {
    return (
        
        <footer className="bg-whh">
            <div className="flex flex-col  md:flex-row justify-between items-center">
                <div className="flex lg:ml-28 space-x-4 mb-4 md:mb-0">
                    <Link href="https://www.linkedin.com/in/affan-hussain-01a5532b4/"><FaLinkedin size={45} className="text-secondary"/></Link>
                    <Link href="https://www.instagram.com/affan_hussain.official?igsh=b3FxNnMwamY3NXp5"><FaInstagramSquare size={45} className="text-secondary"/></Link>
                    <Link href="https://www.facebook.com/profile.php?id=100005523945887"><FaFacebookSquare size={45} className="text-secondary"/></Link>
                </div>
                <div className="text-center md:text-left">
                    <h1 className="lg:mr-28 text-secondary  text-sm">© 2024 All rights reserved.</h1>
                </div>
            </div>
        </footer>
    );
}

export default Footer;


// import React from "react";

// function Footer() {
//   return (
//     <footer className="bg-whh text-white py-10 mt-20 rounded-b-[40px] w-full">
//       <div className="container mx-auto px-4 lg:flex lg:justify-between lg:items-center">
//         {/* Footer Links */}
//         <div className="mb-6 lg:mb-0">
//           <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
//           <ul className="space-y-2">
//             <li><a href="#about" className="hover:text-primary">About</a></li>
//             <li><a href="#services" className="hover:text-primary">Services</a></li>
//             <li><a href="#experience" className="hover:text-primary">Experience</a></li>
//             <li><a href="#contact" className="hover:text-primary">Contact</a></li>
//           </ul>
//         </div>

//         {/* Footer Contact */}
//         <div className="mb-6 lg:mb-0">
//           <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
//           <ul className="space-y-2">
//             <li>Phone: +123 456 7890</li>
//             <li>Email: example@example.com</li>
//             <li>Address: 123 Street Name, City, Country</li>
//           </ul>
//         </div>

//         {/* Footer Social Media */}
//         <div>
//           <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
//           <ul className="flex space-x-4">
//             <li><a href="#" className="hover:text-primary">Facebook</a></li>
//             <li><a href="#" className="hover:text-primary">Twitter</a></li>
//             <li><a href="#" className="hover:text-primary">Instagram</a></li>
//           </ul>
//         </div>
//       </div>

//       {/* Footer Bottom */}
//       <div className="mt-10 border-t border-gray-700 pt-4 text-center">
//         <p>&copy; 2024 Your Company. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// }

// export default Footer;

