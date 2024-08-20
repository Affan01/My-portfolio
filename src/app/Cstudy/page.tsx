// import Image from "next/image";
// function Cstudy(){
//     return(
//         <main className="mt-24 mb-24">
//             <div className=" ">
//             <h1 className=" text-center text-4xl font-bold gap-2 group flex flex-col justify-center items-center">Case Studies
//             <span className="underline  border-2 border-primary rounded-md w-[100px] h-1 bg-primary transition-all duration-[600ms] group-hover:w-[220px] w-2s text-center  "></span>
//             </h1>
//             </div>
//             <div className="flex justify-center mt-20">
//             {/* main div */}
//             <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 items-center justify-center ">
//                 <div className=" relative group overflow-hidden w-[400px] h-[350px] left-5 lg:left-0 lg:col-span-2 lg:w-[715px] lg:h-[250px] border border-whh rounded-2xl bg-slate-400 md:col-span-2 col-span-2  ">
//                 <img src="/bb.png" alt="picc" className="absolute rounded-2xl  w-full h-full object-cover opacity-65 bg-[#0f6494] transition-all duration-500 group-hover:scale-105  "></img> 
//                 <div className="absolute inset-0 flex items-center justify-center bg-secondary bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                     <span className=" text-[#e5e5e5] font-bold text-2xl">Beauity Product Store</span>
//                 </div>
//                                </div>
//                 <div className="relative group overflow-hidden w-[400px] h-[350px] left-5 lg:left-0 lg:row-span-2 lg:w-[350px] lg:h-[509px] border border-whh rounded-2xl bg-slate-400 row-span-2  ">
//                 <img src="/dd.png" alt="picc" className="absolute rounded-2xl  w-full h-full object-cover opacity-65 bg-[#0f6494] transition-all duration-500 group-hover:scale-105 "></img> 
//                 <div className="absolute inset-0 flex items-center justify-center bg-secondary bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                     <span className=" text-[#e5e5e5] font-bold text-2xl">RealEstate Web APP </span>
//                 </div>
//                 </div>
//                 <div className="relative group overflow-hidden w-[400px] h-[350px] left-5 lg:left-0 lg:row-span-2 lg:w-[350px] lg:h-[509px] border border-whh rounded-2xl bg-slate-400 row-span-2 from-neutral-500">
//                 <img src="/fff.png" alt="picc" className="absolute rounded-2xl  w-full h-full object-cover opacity-65 bg-[#0f6494] transition-all duration-500 group-hover:scale-105"></img> 
//                 <div className="absolute inset-0 flex items-center justify-center bg-secondary bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                     <span className=" text-[#e5e5e5] font-bold text-2xl">Multipurpose Bussiness</span>
//                 </div>
//                 </div>
//                 <div className="relative group overflow-hidden w-[400px] h-[350px] left-5 lg:left-0 lg:col-span-1 lg:w-[350px] lg:h-[250px] border border-whh rounded-2xl bg-slate-400">
//                 <img src="/zz.png" alt="picc" className="absolute rounded-2xl  w-full h-full object-cover opacity-65 bg-[#0f6494] transition-all duration-500 group-hover:scale-105"></img> 
//                 <div className="absolute inset-0 flex items-center justify-center bg-secondary bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                     <span className=" text-[#e5e5e5] font-bold text-2xl">Web App Development</span>
//                 </div>
//                 </div>
//                 <div className="relative group overflow-hidden w-[400px] h-[350px] left-5 lg:left-0 lg:col-span-2 lg:w-[715px] lg:h-[250px] border border-whh rounded-2xl bg-slate-400 col-span-2">
//                 <img src="/ss.png" alt="picc" className="absolute rounded-2xl  w-full h-full object-cover opacity-65 bg-[#0f6494] transition-all duration-500 group-hover:scale-105"></img> 
//                 <div className="absolute inset-0 flex items-center justify-center bg-secondary bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                     <span className=" text-[#e5e5e5] font-bold text-2xl">Clothing Store</span>
//                 </div>
//                 </div>
//             </div>
//             </div>
//         </main>
//     )
// }export default Cstudy;

import Image from "next/image";

function Cstudy() {
    return (
        <main className="mt-24 mb-24 p-4">
            <div className="text-center">
                <h1 className="text-4xl font-bold gap-2 group flex flex-col justify-center items-center">
                    Case Studies
                    <span className="underline border-2 border-primary rounded-md w-[100px] h-1 bg-primary transition-all duration-[600ms] group-hover:w-[220px]"></span>
                </h1>
            </div>
            <div className="flex justify-center mt-20">
                {/* main div */}
                <div className="grid grid-cols-1 gap- md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 items-center justify-center gap-4">
                    <div className="relative group overflow-hidden w-[350px] h-[340px] lg:left-1 lg:col-span-2 lg:w-[709px] lg:h-[250px] border border-[#e5e5e5] rounded-2xl bg-slate-400">
                        <img src="/bb.png" alt="Beauty Product Store" className="absolute inset-0 w-full h-full object-cover opacity-65 transition-all duration-500 group-hover:scale-105 rounded-2xl" />
                        <div className="absolute inset-0 flex items-center justify-center bg-secondary bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-[#e5e5e5] font-bold text-2xl">Beauty Product Store</span>
                        </div>
                    </div>
                    <div className="relative group overflow-hidden w-[350px] h-[340px] lg:row-span-2 lg:h-[509px] lg:w-[350px] border border-[#e5e5e5] rounded-2xl bg-slate-400">
                        <img src="/dd.png" alt="Real Estate Web App" className="absolute inset-0 w-full h-full object-cover opacity-65 transition-all duration-500 group-hover:scale-105 rounded-2xl" />
                        <div className="absolute inset-0 flex items-center justify-center bg-secondary bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-[#e5e5e5] font-bold text-2xl">Real Estate Web App</span>
                        </div>
                    </div>
                    <div className="relative group overflow-hidden w-[350px] h-[340px] lg:row-span-2 lg:h-[509px] lg:w-[350px] border border-[#e5e5e5] rounded-2xl bg-slate-400">
                        <img src="/fff.png" alt="Multipurpose Business" className="absolute inset-0 w-full h-full object-cover opacity-65 transition-all duration-500 group-hover:scale-105 rounded-2xl" />
                        <div className="absolute inset-0 flex items-center justify-center bg-secondary bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-[#e5e5e5] font-bold text-2xl">Multipurpose Business</span>
                        </div>
                    </div>
                    <div className="relative group overflow-hidden  h-[340px] w-[350px] lg:hidden xl:block xl:w-[350px] xl:h-[250px] border border-[#e5e5e5] rounded-2xl bg-slate-400">
                        <img src="/zz.png" alt="Web App Development" className="absolute inset-0 w-full h-full object-cover opacity-65 transition-all duration-500 group-hover:scale-105 rounded-2xl" />
                        <div className="absolute inset-0 flex items-center justify-center bg-secondary bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-[#e5e5e5] font-bold text-2xl">Web App Development</span>
                        </div>
                    </div>
                    <div className="relative group overflow-hidden w-[350px] h-[340px] lg:col-span-2 lg:w-[709px] lg:h-[250px] border border-[#e5e5e5] rounded-2xl bg-slate-400">
                        <img src="/ss.png" alt="Clothing Store" className="absolute inset-0 w-full h-full object-cover opacity-65 transition-all duration-500 group-hover:scale-105 rounded-2xl" />
                        <div className="absolute inset-0 flex items-center justify-center bg-secondary bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-[#e5e5e5] font-bold text-2xl">Clothing Store</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Cstudy;
