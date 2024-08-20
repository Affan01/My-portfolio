// import { TbLayoutCollage } from "react-icons/tb";
// import { MdOutlineScreenSearchDesktop ,MdContactSupport } from "react-icons/md";
// import { HiComputerDesktop } from "react-icons/hi2";
// import { FaOpencart } from "react-icons/fa";
// import { BiBrain } from "react-icons/bi";
// import React from "react";
// function Services(){
//     return(
//         <main className="text-center mt-20 ">
            
// <div className=""><h1 className="text-4xl font-bold pt- gap-2 flex flex-col justify-center items-center group">Services
// <span className="underline-custom  border-2 border-primary rounded-md w-[100px] h-1 bg-primary transition-all duration-[600ms] group-hover:w-[160px] w-2s text-center  "></span>
// </h1>
// </div>
// <div className="flex items-center justify-center mt-20">
// <div className=" grid grid-cols-3 gap-10  ">
//     <div className=" group relative flex cursor-pointer flex-col items-center justify-evenly overflow-hidden w-80 h-52 border-2 border-solid  border-gray-200 shadow-lg bg-white rounded-lg transition-all duration-500 hover:scale-110  ">
//         <div className="absolute -left-10 -top-10 z-0 h-20 w-20  bg-red-400 rounded-[50%] transition-all duration-700 group-hover:scale-[20]">
//         </div> 
//         <div className="flex gap-2">
//         <TbLayoutCollage size={35} className="text-primary mt-6 z-10 text-center transition-all duration-700 ease-in-out group-hover:text-white"/>
//         <h1 className=" mt-7  z-10 text-center text-xl font-bold transition-all duration-700 ease-in-out group-hover:text-white"> UX/UI Design </h1>
//         </div>
//         <p className="text-sm text-secondary z-10 mx-5 text-center font-medium transition-all duration-700 ease-in-out group-hover:text-white">Creating intuitive, attractive and user-friendly interfaces. </p>
//     </div>
//         {/* 2 */}
//         <div className=" group relative flex cursor-pointer flex-col items-center justify-evenly overflow-hidden w-80 h-52 border-2 border-solid  border-gray-200 shadow-lg bg-white rounded-lg transition-all duration-500 hover:scale-110  ">
//         <div className="absolute -left-10 -top-10 z-0 h-20 w-20  bg-[#9CB380] rounded-[50%] transition-all duration-700 group-hover:scale-[20]">
//         </div> 
//         <div className="flex gap-2">
//         <HiComputerDesktop size={35} className="text-primary mt-6 z-10 text-center transition-all duration-700 ease-in-out group-hover:text-white"/>
//         <h1 className=" mt-7  z-10 text-center text-xl font-bold transition-all duration-700 ease-in-out group-hover:text-white">Web Development</h1>
//         </div>
//         <p className="text-sm text-secondary z-10 mx-5 text-center font-medium transition-all duration-700 ease-in-out group-hover:text-white">Full Stack Development with Cross browser compatibility.</p>
//     </div>

//     {/* 3 */}
//     <div className=" group relative flex cursor-pointer flex-col items-center justify-evenly overflow-hidden w-80 h-52 border-2 border-solid  border-gray-200 shadow-lg bg-white rounded-lg transition-all duration-500 hover:scale-110  ">
//         <div className="absolute -left-10 -top-10 z-0 h-20 w-20  bg-[#9e7bd7] rounded-[50%] transition-all duration-700 group-hover:scale-[20]">
//         </div> 
//         <div className="flex gap-2">
//         <BiBrain size={35} className="text-primary mt-6 z-10 text-center transition-all duration-700 ease-in-out group-hover:text-white"/>
//         <h1 className=" mt-7  z-10 text-center text-xl font-bold transition-all duration-700 ease-in-out group-hover:text-white">AI Based Solution</h1>
//         </div>
//         <p className="text-sm  z-10 mx-5 text-secondary text-center font-medium transition-all duration-700 ease-in-out group-hover:text-white">AI based Model training and Integration with Web.</p>
//     </div>

//     {/* 4 */}
//     <div className=" group relative flex cursor-pointer flex-col items-center justify-evenly overflow-hidden w-80 h-52 border-2 border-solid  border-gray-200 shadow-lg bg-white rounded-lg transition-all duration-500 hover:scale-110  ">
//         <div className="absolute -left-10 -top-10 z-0 h-20 w-20  bg-[#C59849] rounded-[50%] transition-all duration-700 group-hover:scale-[20]">
//         </div> 
//         <div className="flex gap-2">
//         <MdOutlineScreenSearchDesktop size={35} className="text-primary mt-6 z-10 text-center transition-all duration-700 ease-in-out group-hover:text-white"/>
//         <h1 className=" mt-7  z-10 text-center text-xl font-bold transition-all duration-700 ease-in-out group-hover:text-white">SEO Optimization</h1>
//         </div>
//         <p className="text-sm  z-10 mx-5 text-secondary text-center font-medium transition-all duration-700 ease-in-out group-hover:text-white">
//         Improving search rankings through best SEO practices.</p>
//     </div>

//     {/* 5 */}
//     <div className=" group relative flex cursor-pointer flex-col items-center justify-evenly overflow-hidden w-80 h-52 border-2 border-solid  border-gray-200 shadow-lg bg-white rounded-lg transition-all duration-500 hover:scale-110  ">
//         <div className="absolute -left-10 -top-10 z-0 h-20 w-20  bg-[#29AB87] rounded-[50%] transition-all duration-700 group-hover:scale-[20]">
//         </div> 
//         <div className="flex gap-2">
//         <FaOpencart size={35} className="text-primary mt-6 z-10 text-center transition-all duration-700 ease-in-out group-hover:text-white"/>
//         <h1 className=" mt-7  z-10 text-center text-xl font-bold transition-all duration-700 ease-in-out group-hover:text-white">Ecommerce</h1>
//         </div>
//         <p className="text-sm text-secondary z-10 mx-5 text-center font-medium transition-all duration-700 ease-in-out group-hover:text-white">Building robust Next.js e-commerce platforms for businesses.</p>
//     </div>

//     {/* 6 */}
//     <div className=" group relative flex cursor-pointer flex-col items-center justify-evenly overflow-hidden w-80 h-52 border-2 border-solid  border-gray-200 shadow-lg bg-white rounded-lg transition-all duration-500 hover:scale-110  ">
//         <div className="absolute -left-10 -top-10 z-0 h-20 w-20  bg-[#3facc0] rounded-[50%] transition-all duration-700 group-hover:scale-[20]">
//         </div> 
//         <div className="flex gap-2">
//         <MdContactSupport size={35} className="text-primary mt-6 z-10 text-center transition-all duration-700 ease-in-out group-hover:text-white"/>
//         <h1 className=" mt-7  z-10 text-center text-xl font-bold transition-all duration-700 ease-in-out group-hover:text-white">Support</h1>
//         </div>
//         <p className="text-sm text-secondary z-10 mx-5 text-center font-medium transition-all duration-700 ease-in-out group-hover:text-white">Providing continuous application maintenance and technical support.</p>
//     </div>




//     {/* <div className="w-80 h-52 border-2 border-solid  border-gray-200 shadow-lg bg-white rounded-lg"></div>
//     <div className="w-80 h-52 border-2 border-solid  border-gray-200 shadow-lg bg-white rounded-lg">3</div>
//     <div className="w-80 h-52 border-2 border-solid  border-gray-200 shadow-lg bg-white rounded-lg">4</div>
//     <div className="w-80 h-52 border-2 border-solid  border-gray-200 shadow-lg bg-white rounded-lg">5</div>
//     <div className="w-80 h-52 border-2 border-solid  border-gray-200 shadow-lg bg-white rounded-lg">6</div> */}
// </div>
// </div>
// </main>
//     )
// }export default Services;




import { TbLayoutCollage } from "react-icons/tb";
import { MdOutlineScreenSearchDesktop, MdContactSupport } from "react-icons/md";
import { HiComputerDesktop } from "react-icons/hi2";
import { FaOpencart } from "react-icons/fa";
import { BiBrain } from "react-icons/bi";
import React from "react";

function Services() {
  return (
    <main className="text-center mt-20 p-4">
      <div>
        <h1 className="text-4xl font-bold flex flex-col justify-center items-center group">
          Services
          <span className="underline-custom border-2 border-primary rounded-md w-[100px] h-1 bg-primary transition-all duration-[600ms] group-hover:w-[160px] w-2s text-center"></span>
        </h1>
      </div>
      <div className="flex items-center justify-center mt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Service Card */}
          {[
            {
              icon: <TbLayoutCollage size={35} className="text-primary mt-6 z-10 text-center transition-all duration-700 ease-in-out group-hover:text-white" />,
              title: "UX/UI Design",
              description: "Creating intuitive, attractive and user-friendly interfaces.",
              bgColor: "bg-red-400"
            },
            {
              icon: <HiComputerDesktop size={35} className="text-primary mt-6 z-10 text-center transition-all duration-700 ease-in-out group-hover:text-white" />,
              title: "Web Development",
              description: "Full Stack Development with Cross browser compatibility.",
              bgColor: "bg-[#9CB380]"
            },
            {
              icon: <BiBrain size={35} className="text-primary mt-6 z-10 text-center transition-all duration-700 ease-in-out group-hover:text-white" />,
              title: "AI Based Solution",
              description: "AI based Model training and Integration with Web.",
              bgColor: "bg-[#9e7bd7]"
            },
            {
              icon: <MdOutlineScreenSearchDesktop size={35} className="text-primary mt-6 z-10 text-center transition-all duration-700 ease-in-out group-hover:text-white" />,
              title: "SEO Optimization",
              description: "Improving search rankings through best SEO practices.",
              bgColor: "bg-[#C59849]"
            },
            {
              icon: <FaOpencart size={35} className="text-primary mt-6 z-10 text-center transition-all duration-700 ease-in-out group-hover:text-white" />,
              title: "Ecommerce",
              description: "Building robust Next.js e-commerce platforms for businesses.",
              bgColor: "bg-[#29AB87]"
            },
            {
              icon: <MdContactSupport size={35} className="text-primary mt-6 z-10 text-center transition-all duration-700 ease-in-out group-hover:text-white" />,
              title: "Support",
              description: "Providing continuous application maintenance and technical support.",
              bgColor: "bg-[#3facc0]"
            }
          ].map((service, index) => (
            <div key={index} className="group relative flex cursor-pointer flex-col items-center justify-evenly overflow-hidden w-full max-w-xs h-52 border-2 border-solid border-gray-200 shadow-lg bg-white rounded-lg transition-all duration-500 hover:scale-110 mx-auto">
              <div className={`absolute -left-10 -top-10 z-0 h-20 w-20 ${service.bgColor} rounded-[50%] transition-all duration-700 group-hover:scale-[20]`}></div>
              <div className="flex gap-2">
{service.icon}
<h1 className="mt-7 z-10 text-center text-xl font-bold transition-all duration-700 ease-in-out group-hover:text-white">{service.title}</h1>
</div>
<p className="text-sm text-secondary z-10 mx-5 text-center font-medium transition-all duration-700 ease-in-out group-hover:text-white">
{service.description}
</p>
</div>
))}
</div>
</div>
</main>
);
}

export default Services;
