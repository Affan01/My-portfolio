// import { FaRegHeart } from "react-icons/fa6";
// import { FiWatch } from "react-icons/fi";
// import { BsAward } from "react-icons/bs";
// import { BiCoffeeTogo } from "react-icons/bi";





// function Fun() {
//     return (
//         <main className="mt-16">
//             <div className="">
//                 <h1 className="text-center text-4xl font-bold gap-2 flex flex-col justify-center items-center group">Fun Fact
//                     <span className="underline  border-2 border-primary rounded-md w-[100px] h-1 bg-primary transition-all duration-[600ms] group-hover:w-[160px] w-2s text-center  "></span>
//                 </h1>
//             </div>
//             <div className="flex gap-8 justify-center items-center mt-20">
//                 {/* 1 */}
//                 <div className='border-2 rounded-lg border-[#e5e5e5] w-60 h-44 flex flex-col justify-center items-center gap-3 transition-all duration-500 hover:scale-110'>
//                     <div className="mr-"><FaRegHeart size={60} className=" text-primary text-center" /></div>
//                     <div className="ml-"><h1 className="text-md font-bold text-center">Happy Clients</h1>

//                         <h2 className="text-4xl font-bold mt-1 text-center text-[#afaeae]">158</h2></div>
//                 </div>

//                 {/* 2 */}
//                 <div className='border-2 rounded-lg border-[#e5e5e5] w-60 h-44 flex flex-col justify-center items-center gap-3 transition-all duration-500 hover:scale-110'>
//                     <div className="mr-"><FiWatch size={60} className=" text-primary text-center" /></div>
//                     <div className="ml-"><h1 className="text-md font-bold text-center">Working Hours</h1>
//                         <h2 className="text-4xl font-bold mt-1 text-center text-[#afaeae]">700</h2></div>
//                 </div>


//                 {/* 3 */}
//                 <div className='border-2 rounded-lg border-[#e5e5e5] w-60 h-44 flex flex-col justify-center items-center gap-3 transition-all duration-500 hover:scale-110'>
//                     <div className="mr-"><BsAward size={60} className=" text-primary text-center" /></div>
//                     <div className="ml-"><h1 className="text-md font-bold text-center transition-all duration-700 ease-in-out group-hover:text-white">Awards Won</h1>
//                         <h2 className="text-4xl font-bold mt- text-center text-[#afaeae]">3</h2></div>
//                 </div>
//                 {/* 4 */}
//                 <div className='border-2 rounded-lg shadow-sm border-[#e5e5e5] w-60 h-44 flex flex-col justify-center items-center gap-3 transition-all duration-500 hover:scale-110 '>
//                     <div className="mr-"><BiCoffeeTogo size={60} className=" text-primary text-center" /></div>
//                     <div className="ml-"><h1 className="text-md font-bold text-center">Coffee Consumed</h1>
//                         <h1 className="text-4xl font-bold mt- text-center text-[#afaeae]">300</h1>
//                     </div>
//                 </div>
//             </div>
//         </main>

//     )
// } export default Fun;







import { FaRegHeart } from "react-icons/fa";
import { FiWatch } from "react-icons/fi";
import { BsAward } from "react-icons/bs";
import { BiCoffeeTogo } from "react-icons/bi";

function Fun() {
    return (
        <main className="mt-16 p-4">
            <div className="text-center">
                <h1 className="text-4xl font-bold flex flex-col justify-center items-center group">
                    Fun Fact
                    <span className="underline border-2 border-primary rounded-md w-[100px] h-1 bg-primary transition-all duration-[600ms] group-hover:w-[160px] text-center"></span>
                </h1>
            </div>
            <div className="flex flex-wrap gap-4  justify-center items-center mt-20">
                {/* 1 */}
                <div className="border-2 rounded-xl border-[#e5e5e5] w-[380px] h-48 bg-white sm:w-64 sm:h-44 flex flex-col justify-center items-center gap-3 transition-all duration-500 hover:scale-110">
                    <div><FaRegHeart size={60} className="text-primary text-center" /></div>
                    <div><h1 className="text-md font-bold text-center">Happy Clients</h1>
                        <h2 className="text-4xl font-bold mt-1 text-center text-[#afaeae]">158</h2>
                    </div>
                </div>

                {/* 2 */}
                <div className="border-2 rounded-xl border-[#e5e5e5] w-[380px] h-48 bg-white sm:w-64 sm:h-44 flex flex-col justify-center items-center gap-3 transition-all duration-500 hover:scale-110">
                    <div><FiWatch size={60} className="text-primary text-center" /></div>
                    <div><h1 className="text-md font-bold text-center">Working Hours</h1>
                        <h2 className="text-4xl font-bold mt-1 text-center text-[#afaeae]">700</h2>
                    </div>
                </div>

                {/* 3 */}
                <div className="border-2 rounded-xl border-[#e5e5e5] w-[380px] h-48 bg-white sm:w-64 sm:h-44 flex flex-col justify-center items-center gap-3 transition-all duration-500 hover:scale-110">
                    <div><BsAward size={60} className="text-primary text-center" /></div>
                    <div><h1 className="text-md font-bold text-center transition-all duration-700 ease-in-out group-hover:text-white">Awards Won</h1>
                        <h2 className="text-4xl font-bold mt- text-center text-[#afaeae]">3</h2>
                    </div>
                </div>

                {/* 4 */}
                <div className="border-2 rounded-xl shadow-sm border-[#e5e5e5] w-[380px] h-48 bg-white sm:w-64 sm:h-44 flex flex-col justify-center items-center gap-3 transition-all duration-500 hover:scale-110">
                    <div><BiCoffeeTogo size={60} className="text-primary text-center" /></div>
                    <div><h1 className="text-md font-bold text-center">Coffee Consumed</h1>
                        <h1 className="text-4xl font-bold mt- text-center text-[#afaeae]">300</h1>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Fun;
