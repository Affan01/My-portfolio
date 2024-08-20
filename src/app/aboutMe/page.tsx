// import Image from "next/image";
// import Link from "next/link";


// function About(){
//     return(
//         <main className=" mt-24 ">
//             {/* About me section */}
//     <div className="flex justify-center gap-16  md:flex-wrap sm:flex-wrap x">
//       <div className=" flex h-80 w-80 border-[14px] border-solid  border-white  rounded-full">
//         <Image src="/b.png" alt="profile picture" width={320} height={320} className="rounded-full w-80 h-74"/>
//       </div>
      
//       <div className="mt-7 ">
//       <div className="font-poppins-Helvetica-sans-serif text-secondary transition delay-0  hover:text-black animate-pulse ml-16">Hello, I'm</div>
//       <h1 className=" text-4xl mt-2 mb-3 ml-0 mr-0 font-bold text-black">Affan Hussain</h1>
//       <h2 className="font-poppins-Helvetica-sans-serif text-secondary transition delay-0 text-xl">Web App Developer</h2>
//       <p className="text-secondary text-md mt-3">I am a skilled web designer and web developer specializing<br/>
//        in creating dynamic, user-friendly websites using Next.js.<br/> With a keen eye for design and a solid foundation in modern<br/> web technologies, I craft seamless digital experiences.
//       </p>
//       <div className="flex mt-7 gap-2">
//       <Link href="/portfolio"> <button  className="bg-white hover:bg-primary hover:text-white text-black  w-[170px] border-solid border-2 border-primary p-2 rounded-full">Portfolio</button></Link>
//       <Link href="/contact"><button className="bg-white hover:bg-[#dcdbdb] text-black  w-[120px] border-solid border-2 border-[#dcdbdb] p-2 rounded-full">Contact</button></Link>
//       </div>
//       </div>
//     </div>
//         </main>
//     )
// }export default About;





import Image from "next/image";
import Link from "next/link";

function About() {
  return (
    <main className="mt-24 p-4">
      {/* About me section */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-16">
      <div className="flex h-40 w-48 md:h-60 md:w-64 lg:h-72 lg:w-80 border-[14px] border-solid border-whh rounded-full">
  <Image
    src="/ass.png"
    alt="profile picture"
    width={320}
    height={320}
    className="rounded-full w-48 h-40 md:w-64 md:h-60 lg:w-80 lg:h-72"
  />
</div>

        {/* <div className="flex h-80 w-80 border-[14px] border-solid border-white rounded-full">
          <Image
            src="/b.png"
            alt="profile picture"
            width={320}
            height={320}
            className="rounded-full w-80 h-74"
          />
        </div> */}

        <div className="mt-7 w-full max-w-md lg:max-w-lg">
          <div className="font-poppins-Helvetica-sans-serif text-secondary transition delay-0 hover:text-black animate-pulse text-center lg:text-left">
            Hello, I'm
          </div>
          <h1 className="text-4xl mt-2 mb-3 font-bold text-black text-center lg:text-left">
            Affan Hussain
          </h1>
          <h2 className="font-poppins-Helvetica-sans-serif text-secondary transition delay-0 text-xl text-center lg:text-left">
            Web App Developer
          </h2>
          <p className="text-secondary text-md mt-3 text-center lg:text-left">
            I am a skilled web designer and web developer specializing in
            creating dynamic, user-friendly websites using Next.js. With a keen
            eye for design and a solid foundation in modern web technologies, I
            craft seamless digital experiences.
          </p>
          <div className="flex justify-center lg:justify-start mt-7 gap-2">
            <Link href="/portfolio">
              <button className="bg-white hover:bg-primary hover:text-white text-black w-[170px] border-solid border-2 border-primary p-2 rounded-full">
                Portfolio
              </button>
            </Link>
            <Link href="/contact">
              <button className="bg-white hover:bg-[#dcdbdb] text-black w-[120px] border-solid border-2 border-[#dcdbdb] p-2 rounded-full">
                Contact
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;
