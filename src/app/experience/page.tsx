// pages/about.js
import Image from "next/image";
function Experience() {
    return (
        <main className="mt-14">
            <div className="">
            <p className="text-center text-sm text-[#666]">Get To Know More</p>
            <h1 className="gap-2 text-center text-4xl font-bold group flex  flex-col justify-center items-center">Experience 
            <span className="underline-custom  border-2 border-primary rounded-md w-[100px]  h-1 bg-primary transition-all duration-[600ms] group-hover:w-[190px] w-2s text-center  "></span>
            </h1>
            </div>
                    <div className='flex gap-10 justify-center mt-20 max-md:flex-wrap'>
                        {/* Internship */}
                        <div className='hidden md:flex max-md:h-44 max-md:w-96  border-2 rounded-3xl border-[#d7d5d5] w-72 h-96 flex-col justify-center items-center gap-9'>
                            <div className="mr-14 mb-5"><img src="/sa.png" alt="picc" className="absolute  w-14 h-14 object-cover"></img></div>
                            <div className="ml-"><h1 className="text-lg font-bold text-center">Internship</h1>
                                <h1 className="text-sm font-serif text-center text-[#666]">DPS</h1>
                                <h2 className="text-md text-center text-[#666]">Frontend Development</h2></div>
                        </div>
                        <div className=" flex flex-col gap-5">
                        {/* Experience */}
                        <div className='max-sm:w-[320px] md:h-44 md:w-96 border-2 rounded-3xl border-[#d7d5d5] w-96 h-44 flex flex-col justify-center items-center gap-9 '>
                            <div className="mr-14 mb-5 "><img src="/a1.png" alt="picc" className="absolute  w-14 h-14 object-cover"></img></div>
                            <div><h1 className="text-lg font-bold text-center">Experience</h1>
                                <h2 className="text-sm font-serif text-center text-[#666]">1+ years</h2>
                                <h2 className="text-md text-center text-[#666]">Web App Development</h2></div>
                        </div>
                        {/* education */}
                        <div className='max-sm:w-[320px] md:h-44 border-2 rounded-3xl border-[#d7d5d5] w-96 h-44 flex flex-col justify-center items-center gap-9 '>
                            <div className="mr-14 mb-5"><img src="/d.png" alt="picc" className="absolute  w-14 h-14 object-cover"></img></div>
                            <div><h1 className="text-lg font-bold text-center">Education</h1>
                                <h2 className="text-sm font-serif text-center text-[#666]">Fsc</h2>
                                <h2 className="text-md text-center text-[#666]">B.Sc. Information Technology</h2></div>
                        </div>
                        </div>

                         {/* Job */}
                         <div className='hidden md:flex max-md:h-44 max-md:w-96 border-2 rounded-3xl border-[#d7d5d5] w-72 h-96 flex-col justify-center items-center gap-9 '>
                            <div className="mr-14 mb-5"><img src="/j.png" alt="picc" className="absolute  w-14 h-14 object-cover"></img></div>
                            <div><h1 className="text-lg font-bold text-center">Job</h1>
                                <h2 className="text-sm font-serif text-center text-[#666]">Freelancer</h2>
                                <h2 className="text-md text-center text-[#666]">Web Developer</h2></div>
                        
                        </div>

                    </div>
                    
             

        </main>
    );
}

export default Experience;