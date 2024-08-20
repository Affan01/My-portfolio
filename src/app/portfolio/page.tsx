import Navbar from "../navbar/page";
import Footer from "../footer/page";
import Link from "next/link";
import Image from "next/image";


function Portfolio() {
    return (
        <main className='container-page block relative  xl:max-w-[1280px] xl:m-24 xl:p-10 lg:max-w-[1024px] lg:m-20 bg-whh lg:p-10 40 70 60 rounded-[40px] md:max-w-f md:m-10 md:p-10 sm:max-w-full sm:bg-whh sm:m-0 sm:p-0'>
            <Navbar />
            <div className="flex flex-col md:flex-row justify-between items-center relative max-w-full h-[180px] bg-whh border-t-2 border-b-2 border-[#eae9e9] p-5 md:p-10 -mx-5 md:mx-0">
                <h1 className="text-3xl md:text-5xl font-bold ml-3">Portfolio</h1>
                <span className="text-sm text-center text-secondary mt-5 md:mt-0">My Work</span>
            </div>

            <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-center justify-center gap-5 mt-24 mb-24">
                    {/* 1 */}
                    <Link href='/project1'>
                        <div className="relative group overflow-hidden w-full xl:w-[600px] xl:h-[350px] max-sm:w-[350px] md:w-[450px] lg:w-[400px] h-[250px] max-sm:h-[200px] md:h-[250px] lg:h-[250px] border-2 rounded-xl shadow-lg">
                            <Image src="/Home.png" alt="portfolio" width={600} height={350} className="w-full h-full rounded-xl transition-all duration-500 group-hover:scale-105" />
                            <div className="absolute inset-0 flex items-center justify-center bg-secondary bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="text-[#e5e5e5] font-bold text-2xl">Beauty Product Store</span>
                            </div>
                        </div>
                    </Link>

                    {/* 2 */}
                    <Link href='/project2'>
                        <div className="relative group overflow-hidden w-full xl:w-[600px] xl:h-[350px] max-sm:w-[350px] md:w-[450px] lg:w-[400px] h-[250px] max-sm:h-[200px] md:h-[250px] lg:h-[250px] border-2 rounded-xl shadow-lg">
                            <Image src="/o1.png" alt="portfolio" width={600} height={350} className="w-full h-full rounded-xl transition-all duration-500 group-hover:scale-105" />
                            <div className="absolute inset-0 flex items-center justify-center bg-secondary bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="text-[#f5f4f4] font-bold text-2xl">Yoga Website</span>
                            </div>
                        </div>
                    </Link>
                    {/* 3 */}
                    <Link href='/project3'>
                        <div className="relative group overflow-hidden w-full xl:w-[600px] xl:h-[350px] max-sm:w-[350px] md:w-[450px] lg:w-[400px] h-[250px] max-sm:h-[200px] md:h-[250px] lg:h-[250px] border-2 rounded-xl shadow-lg">
                            <Image src="/c1.png" alt="portfolio" width={600} height={350} className="w-full h-full rounded-xl transition-all duration-500 group-hover:scale-105" />
                            <div className="absolute inset-0 flex items-center justify-center bg-secondary bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="text-[#d3d3d3] font-bold text-2xl">Food Store</span>
                            </div>
                        </div>
                    </Link>
                    {/* 4 */}
                    <Link href='/project4'>
                        <div className="relative group overflow-hidden w-full xl:w-[600px] xl:h-[350px] max-sm:w-[350px] md:w-[450px] lg:w-[400px] h-[250px] max-sm:h-[200px] md:h-[250px] lg:h-[250px] border-2 rounded-xl shadow-lg">
                            <Image src="/i1.png" alt="portfolio" width={600} height={350} className="w-full h-full rounded-xl transition-all duration-500 group-hover:scale-105" />
                            <div className="absolute inset-0 flex items-center justify-center bg-secondary bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="text-[#e5e5e5] font-bold text-2xl">Blog Website</span>
                            </div>
                        </div>
                    </Link>
                    {/* 5 */}
                    <Link href='/project5'>
                        <div className="relative group overflow-hidden w-full xl:w-[600px] xl:h-[350px] max-sm:w-[350px] md:w-[450px] lg:w-[400px] h-[250px] max-sm:h-[200px] md:h-[250px] lg:h-[250px] border-2 rounded-xl shadow-lg">
                            <Image src="/p1.png" alt="portfolio" width={600} height={350} className="w-full h-full rounded-xl transition-all duration-500 group-hover:scale-105" />
                            <div className="absolute inset-0 flex items-center justify-center bg-secondary bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="text-[#e5e5e5] font-bold text-2xl">Organic Fashion Store</span>
                            </div>
                        </div>
                    </Link>
                    {/* 6 */}
                    <Link href='/project6'>
                        <div className="relative group overflow-hidden w-full xl:w-[600px] xl:h-[350px] max-sm:w-[350px] md:w-[450px] lg:w-[400px] h-[250px] max-sm:h-[200px] md:h-[250px] lg:h-[250px] border-2 rounded-xl shadow-lg">
                            <Image src="/ff1.png" alt="portfolio" width={600} height={350} className="w-full h-full rounded-xl transition-all duration-500 group-hover:scale-105" />
                            <div className="absolute inset-0 flex items-center justify-center bg-secondary bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="text-[#e5e5e5] font-bold text-2xl">Final Year Project</span>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
            <Footer />
        </main>
    )
} export default Portfolio;



// import Navbar from "../navbar/page";
// import Footer from "../footer/page";
// import Link from "next/link";
// import Image from "next/image";

// function Portfolio() {
//   return (
//     <main className="container-page block relative xl:max-w-[1280px] xl:m-24 xl:p-10 lg:max-w-[1024px] lg:m-20 bg-whh lg:p-10 rounded-[40px] md:max-w-full md:m-0 md:p-0 sm:max-w-full sm:m-0 sm:p-0">
//       <Navbar />
//       <div className="flex justify-between relative max-w-[1240px] h-[210px] bg-white border-t-2 border-b-2 border-[#f2f2f2] p-10 mr-[-40px] ml-[-40px] items-center">
//         <h1 className="text-5xl font-bold ml-3">Portfolio</h1>
//         <span className="text-sm text-center text-secondary mb-36 mr-8">My Work</span>
//       </div>
//       <div className="flex justify-center">
//         <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-5 mt-24 mb-24">
//           {/* 1 */}
//           <Link href="/project1">
//             <div className="relative group overflow-hidden w-full sm:w-[350px] md:w-[450px] lg:w-[500px] h-[250px] sm:h-[200px] md:h-[250px] lg:h-[350px] xl:w-[500px] border-2 rounded-xl shadow-lg">
//               <Image
//                 src="/zz.png"
//                 alt="portfolio"
//                 width={600}
//                 height={350}
//                 className="w-full h-full rounded-xl transition-all duration-500 group-hover:scale-105"
//               />
//               <div className="absolute inset-0 flex items-center justify-center bg-secondary bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                 <span className="text-[#e5e5e5] font-bold text-2xl">Beauty Product Store</span>
//               </div>
//             </div>
//           </Link>
//           {/* 2 */}
//           <Link href="/">
//             <div className="relative group overflow-hidden w-full sm:w-[350px] md:w-[450px] lg:w-[600px] h-[250px] sm:h-[200px] md:h-[250px] lg:h-[350px] border-2 rounded-xl shadow-lg">
//               <Image
//                 src="/d4.png"
//                 alt="portfolio"
//                 width={600}
//                 height={350}
//                 className="w-full h-full rounded-xl transition-all duration-500 group-hover:scale-105"
//               />
//               <div className="absolute inset-0 flex items-center justify-center bg-secondary bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                 <span className="text-[#e5e5e5] font-bold text-2xl">Beauty Product Store</span>
//               </div>
//             </div>
//           </Link>
//           {/* Repeat for other items */}
//         </div>
//       </div>
//       <Footer />
//     </main>
//   );
// }

// export default Portfolio;
