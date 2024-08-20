import Navbar from "../navbar/page";
import Footer from "../footer/page";

function Resume() {
  return (
    <main className="container-page block relative  xl:max-w-[1280px] xl:m-28 xl:p-10 lg:max-w-[1024px] lg:m-20 bg-whh lg:p-10 40 70 60 rounded-[40px] md:max-w-f md:m-10 md:p-10 sm:max-w-full sm:bg-whh sm:m-0 sm:p-0">
      <Navbar/>
      <div className="flex flex-col md:flex-row justify-between items-center relative max-w-full h-[180px] bg-whh border-t-2 border-b-2 border-[#eae9e9] p-5 md:p-10 -mx-5 md:mx-0">
        <h1 className="text-3xl md:text-5xl font-bold ml-3">Resume</h1>
        <span className="text-sm text-center text-secondary mt-5 md:mt-0">2 Years of Experience</span>
      </div>
      {/* main 2 div */}
      <div className="flex justify-center gap-32 mt-24  max-sm:flex-wrap md:flex-wrap lg:flex-nowrap">
        {/* 1ed */}
        <div className="education max-sm:w-[350px]">
          <div className="mb-8">
          <h1 className="text-2xl font-bold">Education</h1>
          <div className="relative  border w-32  bg-white rounded-full ">

            <div className=" border-2 w-14  border-primary rounded-full"></div>
          </div>
          </div>

          <div className="border-2 rounded-tl-md rounded-tr-md border-wh p-5 ">
            <div className="flex gap-2 ">
              <h1 className=" relative  left-[-40px] text-sm text-secondary border-2 rounded-full border-primary pl-2 pr-2 ">2024</h1>
              <span className="relative  left-[-40px] text-sm text-secondary ">GC University</span>
            </div>
            <h1 className="text-lg font-bold">Bachelor in Information Technology</h1>
            <p className="text-sm text-secondary">I completed my Bachelor's degree in Information Technology, gaining<br /> skills in programming, database management, and network systems.<br /> My education has prepared me to contribute in the IT industry.</p>
          </div>
          {/* 2 */}
          <div className="border-2  border-wh p-5">
            <div className="flex gap-2 ">
              <h1 className="relative  left-[-40px] text-sm text-secondary border-2 rounded-full border-primary pl-2 pr-2 ">2019</h1>
              <span className="relative  left-[-40px] text-sm text-secondary mt-1">KIPS College</span>
            </div>
            <h1 className="text-lg font-bold">F.S.C</h1>
            <p className="text-sm text-secondary">I completed my FSC, where I learned basic programming along with<br /> various science and technology subjects. This education provided<br /> me with a solid foundation in programming.</p>
          </div>
          {/* 3 */}
          <div className="border-2 rounded-bl-md rounded-br-md border-wh p-5">
            <div className="flex gap-2 ">
              <h1 className="relative  left-[-40px] text-sm text-secondary border-2 rounded-full border-primary pl-2 pr-2 ">2017</h1>
              <span className="relative  left-[-40px] text-sm text-secondary mt-1">Minhaj School</span>
            </div>
            <h1 className="text-lg font-bold">Matric</h1>
            <p className="text-sm text-secondary">I completed my matriculation with a focus on computer science,<br /> learning the fundamentals of computing and various aspects of science<br /> and technology.</p>
          </div>
        </div>

        {/* 2EX */}
        <div className="experience max-sm:w-[350px]">
        <div className="mb-8">
          <h1 className="text-2xl font-bold">Experience</h1>
          <div className="relative  border w-36  bg-white rounded-full ">

            <div className=" border-2 w-14  border-primary rounded-full"></div>
          </div>
          </div>

          {/* 1 */}
          <div className="border-2 rounded-tl-md rounded-tr-md border-wh p-5 ">
            <div className="flex gap-2 ">
              <h1 className="relative  left-[-40px] text-sm text-secondary border-2 rounded-full border-primary pl-2 pr-2 ">2024-Current</h1>
              <span className="relative  left-[-40px] text-sm text-secondary ">Freelancer</span>
            </div>
            <h1 className="text-lg font-bold">Web App Developer</h1>
            <p className="text-sm text-secondary">I am a web developer specializing in Next.js, TypeScript, and<br /> Tailwind CSS. I work as a freelancer, creating dynamic and<br /> responsive websites for clients.</p>
          </div>
          {/* 2 */}
          <div className="border-2   p-5">
            <div className="flex gap-2 ">
              <h1 className="relative  left-[-40px] text-sm text-secondary border-2 rounded-full border-primary pl-2 pr-2 ">2023-2024</h1>
              <span className="relative  left-[-40px] text-sm text-secondary ">PIAIC</span>
            </div>
            <h1 className="  text-lg font-bold">Full Stack Development</h1>
            <p className="text-sm text-secondary">I completed an internship at PIAIC, focusing on full stack development.<br /> This opportunity allowed me to enhance my skills in both front-end and<br /> back-end technologies.</p>
          </div>
          {/* 3 */}
          <div className="border-2  rounded-bl-md rounded-br-md p-5">
            <div className="flex gap-2 ">
              <h1 className="relative  left-[-40px] text-sm text-secondary border-2 rounded-full border-primary pl-2 pr-2 ">2022-2023</h1>
              <span className="relative  left-[-40px] text-sm text-secondary mt-1">DPS</span>
            </div>
            <h1 className="text-lg font-bold">Frontend Development</h1>
            <p className="text-sm text-secondary">I worked at DPS as a frontend developer, where I gained practical <br />experience in HTML5, CSS3, and Bootstrap. My role involved creating <br />and maintaining responsive and user-friendly interfaces.</p>
          </div>
        </div>

      </div>


      {/* ....................................................................................... */}
      

{/* certificate Section */}
<section className="mt-24">
  <div className="relative left-10 mb-8">
    <h1 className="text-2xl font-bold">Certificates</h1>
    <div className="relative border w-36 bg-white rounded-full">
      <div className="border-2 w-14 border-primary rounded-full"></div>
    </div>
  </div>
  <div className="flex justify-center gap-12 flex-wrap">
    {/* Certificate 1 */}
    <div className="grid grid-cols-3 items-center justify-center w-full sm:w-auto">
      <div className="relative border bg-gray-200 border-gray-200 rounded-tl-lg rounded-bl-lg w-full sm:w-[185px] h-[150px]">
        <img src="/pi.png" alt="pi" className="w-28 sm:w-40 h-28 sm:h-40 object-cover relative top-[-7px] opacity-30"></img>
      </div>
      <div className="relative border-2 border-gray-200 rounded-tr-lg rounded-br-lg w-full sm:w-[370px] h-[150px] col-span-2 p-2 sm:p-4">
        <div className="relative top-7 flex flex-col gap-2 text-sm sm:text-base break-words">
          <h1 className="text-sm sm:text-lg font-bold text-center">Internship in Web Development</h1>
          <h2 className="text-xs sm:text-sm text-gray-400 text-center">Membership Id: PIAIC160151</h2>
          <h3 className="text-xs sm:text-sm text-gray-400 text-center">12 November 2024</h3>
        </div>
      </div>
    </div>
    {/* Certificate 2 */}
    <div className="grid grid-cols-3 items-center justify-center w-full sm:w-auto">
      <div className="relative border bg-gray-200 border-gray-200 rounded-tl-lg rounded-bl-lg w-full sm:w-[185px] h-[150px]">
        <img src="/cr.png" alt="pi" className="w-28 sm:w-40 h-24 object-cover relative top-4 left-3 opacity-50"></img>
      </div>
      <div className="relative border-2 border-gray-200 rounded-tr-lg rounded-br-lg w-full sm:w-[370px] h-[150px] col-span-2 p-2 sm:p-4">
        <div className="relative top-7 flex flex-col gap-2 text-sm sm:text-base break-words">
          <h1 className="text-sm sm:text-lg font-bold text-center">Certificate in Basic Programming</h1>
          <h2 className="text-xs sm:text-sm text-gray-400 text-center">Membership Id: PIAIC160151</h2>
          <h3 className="text-xs sm:text-sm text-gray-400 text-center">17 April 2022</h3>
        </div>
      </div>
    </div>
  </div>
</section>

{/* skill section */}
      
<section className="mt-24 mb-28 px-4">
  <div className="relative mb-8 text-center">
    <h1 className="text-2xl font-bold">Coding Skills</h1>
    <div className="relative mx-auto mt-4 border w-24 sm:w-36 bg-white rounded-full">
      <div className="border-2 w-10 sm:w-14 border-primary rounded-full mx-auto"></div>
    </div>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {/* Skill 1 */}
    <div className="flex flex-col sm:flex-row items-center justify-between">
      <span className="text-lg font-bold">Next.js</span>
      <span className="text-sm sm:ml-auto">90%</span>
      <div className="w-full sm:w-3/4 bg-white border-2 border-gray-300 rounded-full mt-2 sm:mt-0">
        <div className="w-[90%] bg-primary border-4 border-primary rounded-full"></div>
      </div>
    </div>
    {/* Skill 2 */}
    <div className="flex flex-col sm:flex-row items-center justify-between">
      <span className="text-lg font-bold">UX/UI Design</span>
      <span className="text-sm sm:ml-auto">85%</span>
      <div className="w-full sm:w-3/4 bg-white border-2 border-gray-300 rounded-full mt-2 sm:mt-0">
        <div className="w-[85%] bg-primary border-4 border-primary rounded-full"></div>
      </div>
    </div>
    {/* Skill 3 */}
    <div className="flex flex-col sm:flex-row items-center justify-between">
      <span className="text-lg font-bold">Typescript</span>
      <span className="text-sm sm:ml-auto">100%</span>
      <div className="w-full sm:w-3/4 bg-white border-2 border-gray-300 rounded-full mt-2 sm:mt-0">
        <div className="w-full bg-primary border-4 border-primary rounded-full"></div>
      </div>
    </div>
    {/* Skill 4 */}
    <div className="flex flex-col sm:flex-row items-center justify-between">
      <span className="text-lg font-bold">Html5</span>
      <span className="text-sm sm:ml-auto">100%</span>
      <div className="w-full sm:w-3/4 bg-white border-2 border-gray-300 rounded-full mt-2 sm:mt-0">
        <div className="w-full bg-primary border-4 border-primary rounded-full"></div>
      </div>
    </div>
    {/* Skill 5 */}
    <div className="flex flex-col sm:flex-row items-center justify-between">
      <span className="text-lg font-bold">Tailwind</span>
      <span className="text-sm sm:ml-auto">100%</span>
      <div className="w-full sm:w-3/4 bg-white border-2 border-gray-300 rounded-full mt-2 sm:mt-0">
        <div className="w-full bg-primary border-4 border-primary rounded-full"></div>
      </div>
    </div>
    {/* Skill 6 */}
    <div className="flex flex-col sm:flex-row items-center justify-between">
      <span className="text-lg font-bold">Css3</span>
      <span className="text-sm sm:ml-auto">100%</span>
      <div className="w-full sm:w-3/4 bg-white border-2 border-gray-300 rounded-full mt-2 sm:mt-0">
        <div className="w-full bg-primary border-4 border-primary rounded-full"></div>
      </div>
    </div>
    {/* Skill 7 */}
    <div className="flex flex-col sm:flex-row items-center justify-between">
      <span className="text-lg font-bold">Pyqt</span>
      <span className="text-sm sm:ml-auto">95%</span>
      <div className="w-full sm:w-3/4 bg-white border-2 border-gray-300 rounded-full mt-2 sm:mt-0">
        <div className="w-[95%] bg-primary border-4 border-primary rounded-full"></div>
      </div>
    </div>
    {/* Skill 8 */}
    <div className="flex flex-col sm:flex-row items-center justify-between">
      <span className="text-lg font-bold">Ecommerce</span>
      <span className="text-sm sm:ml-auto">100%</span>
      <div className="w-full sm:w-3/4 bg-white border-2 border-gray-300 rounded-full mt-2 sm:mt-0">
        <div className="w-full bg-primary border-4 border-primary rounded-full"></div>
      </div>
    </div>
  </div>
</section>

        {/* ....................... */}

        <Footer/>
    </main>
  )
} export default Resume;














// import Navbar from "../navbar/page";
// import Footer from "../footer/page";

// function Resume() {
//   return (
//     <main className="container-page block relative xl:max-w-[1280px] xl:m-24 xl:p-10 lg:max-w-[1024px] lg:m-20 bg-whh lg:p-10 40 70 60 rounded-[40px] md:max-w-f md:m-10 md:p-10 sm:max-w-full sm:bg-whh sm:m-0 sm:p-0">
//       <Navbar />
    // <div className="ml-5">
    //   <div className="flex flex-col md:flex-row justify-between items-center relative max-w-full h-[180px] bg-whh border-t-2 border-b-2 border-[#eae9e9] p-5 md:p-10 -mx-5 md:mx-0">
    //     <h1 className="text-3xl md:text-5xl font-bold ml-3">Resume</h1>
    //     <span className="text-sm text-center text-secondary mt-5 md:mt-0">2 Years of Experience</span>
    //   </div>
//       {/* main 2 div */}
//       <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-32 mt-10 md:mt-24">
//         {/* 1ed */}
//         <div className="education w-full md:w-1/2">
//           <div className="mb-8">
//             <h1 className="text-xl md:text-2xl font-bold">Education</h1>
//             <div className="relative border w-20 md:w-32 bg-white rounded-full">
//               <div className="border-2 w-8 md:w-14 border-primary rounded-full"></div>
//             </div>
//           </div>

//           <div className="border-2 rounded-tl-md rounded-tr-md border-wh p-5">
//             <div className="flex gap-2">
//               <h1 className="relative left-[-20px] md:left-[-40px] text-sm text-secondary border-2 rounded-full border-primary pl-2 pr-2">2024</h1>
//               <span className="relative left-[-20px] md:left-[-40px] text-sm text-secondary">GC University</span>
//             </div>
//             <h1 className="text-lg font-bold">Bachelor in Information Technology</h1>
//             <p className="text-sm text-secondary">I completed my Bachelor's degree in Information Technology, gaining<br /> skills in programming, database management, and network systems.<br /> My education has prepared me to contribute in the IT industry.</p>
//           </div>
//           {/* 2 */}
//           <div className="border-2 border-wh p-5">
//             <div className="flex gap-2">
//               <h1 className="relative left-[-20px] md:left-[-40px] text-sm text-secondary border-2 rounded-full border-primary pl-2 pr-2">2019</h1>
//               <span className="relative left-[-20px] md:left-[-40px] text-sm text-secondary mt-1">KIPS College</span>
//             </div>
//             <h1 className="text-lg font-bold">F.S.C</h1>
//             <p className="text-sm text-secondary">I completed my FSC, where I learned basic programming along with<br /> various science and technology subjects. This education provided<br /> me with a solid foundation in programming.</p>
//           </div>
//           {/* 3 */}
//           <div className="border-2 rounded-bl-md rounded-br-md border-wh p-5">
//             <div className="flex gap-2">
//               <h1 className="relative left-[-20px] md:left-[-40px] text-sm text-secondary border-2 rounded-full border-primary pl-2 pr-2">2017</h1>
//               <span className="relative left-[-20px] md:left-[-40px] text-sm text-secondary mt-1">Minhaj School</span>
//             </div>
//             <h1 className="text-lg font-bold">Matric</h1>
//             <p className="text-sm text-secondary">I completed my matriculation with a focus on computer science,<br /> learning the fundamentals of computing and various aspects of science<br /> and technology.</p>
//           </div>
//         </div>

//         {/* 2EX */}
//         <div className="experience w-full md:w-1/2">
//           <div className="mb-8">
//             <h1 className="text-xl md:text-2xl font-bold">Experience</h1>
//             <div className="relative border w-20 md:w-36 bg-white rounded-full">
//               <div className="border-2 w-8 md:w-14 border-primary rounded-full"></div>
//             </div>
//           </div>

//           {/* 1 */}
//           <div className="border-2 rounded-tl-md rounded-tr-md border-wh p-5">
//             <div className="flex gap-2">
//               <h1 className="relative left-[-20px] md:left-[-40px] text-sm text-secondary border-2 rounded-full border-primary pl-2 pr-2">2024-Current</h1>
//               <span className="relative left-[-20px] md:left-[-40px] text-sm text-secondary">Freelancer</span>
//             </div>
//             <h1 className="text-lg font-bold">Web App Developer</h1>
//             <p className="text-sm text-secondary">I am a web developer specializing in Next.js, TypeScript, and<br /> Tailwind CSS. I work as a freelancer, creating dynamic and<br /> responsive websites for clients.</p>
//           </div>
//           {/* 2 */}
//           <div className="border-2 border-wh p-5">
//             <div className="flex gap-2">
//               <h1 className="relative left-[-20px] md:left-[-40px] text-sm text-secondary border-2 rounded-full border-primary pl-2 pr-2">2023-2024</h1>
//               <span className="relative left-[-20px] md:left-[-40px] text-sm text-secondary">PIAIC</span>
//             </div>
//             <h1 className="text-lg font-bold">Full Stack Development</h1>
//             <p className="text-sm text-secondary">I completed an internship at PIAIC, focusing on full stack development.<br /> This opportunity allowed me to enhance my skills in both front-end and<br /> back-end technologies.</p>
//           </div>
//           {/* 3 */}
//           <div className="border-2 rounded-bl-md rounded-br-md border-wh p-5">
//             <div className="flex gap-2">
//               <h1 className="relative left-[-20px] md:left-[-40px] text-sm text-secondary border-2 rounded-full border-primary pl-2 pr-2">2022-2023</h1>
//               <span className="relative left-[-20px] md:left-[-40px] text-sm text-secondary mt-1">DPS</span>
//             </div>
//             <h1 className="text-lg font-bold">Frontend Development</h1>
//             <p className="text-sm text-secondary">I worked at DPS as a frontend developer, where I gained practical<br /> experience in HTML5, CSS3, and Bootstrap. My role involved creating<br /> and maintaining responsive and user-friendly interfaces.</p>
//           </div>
//         </div>
//       </div>

//       {/* Certificate Section */}
//       <section className="mt-10 md:mt-24">
//         <div className="relative left md:left-10 mb-8">
//           <h1 className="text-xl md:text-2xl font-bold">Certificates</h1>
//           <div className="relative border w-20 md:w-36 bg-white rounded-full">
//             <div className="border-2 w-8 md:w-14 border-primary rounded-full"></div>
//           </div>
//         </div>
//         <div className="flex flex-col md:flex-row justify-center gap-5 md:gap-12">
//           {/* 1 */}
//           <div className="grid grid-cols-3 items-center justify-center mb-5 md:mb-0">
//             <div className="relative border bg-gray-200 border-gray-200 rounded-tl-lg rounded-bl-lg w-full md:w-[185px] h-[150px]">
//               <img src="/pi.png" alt="pi" className="w-40 h-40 object-cover relative top-[-7px] opacity-30" />
//             </div>
//             <div className="relative border-2 border-gray-200 rounded-tr-lg rounded-br-lg w-full md:w-[370px] h-[150px] col-span-2">
//               <div className="relative top-7 flex flex-col gap-2">
//                 <h1 className="text-lg font-bold text-center">Internship in Web Development</h1>
//                 <h2 className="text-sm text-gray-400 text-center">Membership Id: PIAIC160151</h2>
//                 <h3 className="text-xs text-gray-400 text-center">12 November 2024</h3>
//               </div>
//             </div>
//           </div>
//           {/* 2 */}
//           <div className="grid grid-cols-3 items-center justify-center">
//             <div className="relative border bg-gray-200 border-gray-200 rounded-tl-lg rounded-bl-lg w-full md:w-[185px] h-[150px]">
//               <img src="/cr.png" alt="gcu" className="w-40 h- object-cover relative top-[11px] opacity-30" />
//             </div>
//             <div className="relative border-2 border-gray-200 rounded-tr-lg rounded-br-lg w-full md:w-[370px] h-[150px] col-span-2">
//               <div className="relative top-7 flex flex-col gap-2">
//                 <h1 className="text-lg font-bold text-center">Bachelor of Science in Information Technology</h1>
//                 <h2 className="text-sm text-gray-400 text-center">University of Hertfordshire</h2>
//                 <h3 className="text-xs text-gray-400 text-center">11 October 2024</h3>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* skill section */}
//       <section className="mt-24 mb-28">
//       <div className="relative sm:left-11 mb-8">
//           <h1 className="text-2xl font-bold">Coding Skills</h1>
//           <div className="relative  border w-40  bg-white rounded-full ">

//             <div className=" border-2 w-14  border-primary rounded-full"></div>
//           </div>
//           </div>
//         <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-4 sm:left-5 ">
//       {/* 1 */}
//       <div>
//       <span className="text-lg font-bold">Next.js</span>
//       <span className="relative sm:left-[400px] left-56">90%</span>
//       <div className="relative  border-2 sm:w-[500px] w-80  border-gray-300 bg-white rounded-full ">

//         <div className=" border-4 sm:w-[450px] w-72  border-primary rounded-full"></div>
//       </div>
//       </div>
//       {/* 2 */}
//       <div className="relative sm:left-2">
//       <span className="text-lg font-bold">UX/UI Design</span>
//       <span className="relative sm:left-[350px] left-[167px]">85%</span>
//       <div className="relative  border-2 sm:w-[500px] w-80 border-gray-300 bg-white rounded-full ">

//         <div className=" border-4 sm:w-[430px] w-64  border-primary rounded-full"></div>
//       </div>
//       </div>
//       {/* 3 */}
//       <div>
//       <span className="text-lg font-bold">Typescript</span>
//       <span className="relative sm:left-[360px] left-[180px]">100%</span>
//       <div className="relative  border-2 sm:w-[500px] w-80 border-gray-300 bg-white rounded-full ">

//         <div className=" border-4 sm:w-[500px] w-80  border-primary rounded-full"></div>
//       </div>
//       </div>

//       {/* 4 */}
//       <div className="relative sm:left-2">
//       <span className="text-lg font-bold">Html5</span>
//       <span className="relative sm:left-[410px] left-[220px]">100%</span>
//       <div className="relative  border-2 sm:w-[500px] w-80 border-gray-300 bg-white rounded-full ">

//         <div className=" border-4 sm:w-[500px] w-80  border-primary rounded-full"></div>
//       </div>
//       </div>

//       {/* 5 */}
//       <div>
//       <span className="text-lg font-bold">Tailwind</span>
//       <span className="relative sm:left-[380px] left-[200px]">100%</span>
//       <div className="relative  border-2 sm:w-[500px] w-80 border-gray-300 bg-white rounded-full ">

//         <div className=" border-4 sm:w-[500px] w-80  border-primary rounded-full"></div>
//       </div>
//       </div>

//       {/* 6 */}
//       <div className="relative sm:left-2">
//       <span className="text-lg font-bold">Css3</span>
//       <span className="relative sm:left-[420px] left-[230px]">100%</span>
//       <div className="relative  border-2 sm:w-[500px] w-80 border-gray-300 bg-white rounded-full ">

//         <div className=" border-4 sm:w-[500px] w-80  border-primary rounded-full"></div>
//       </div>
//       </div>
//       {/* 7 */}
//       <div>
//       <span className="text-lg font-bold">Pyqt</span>
//       <span className="relative sm:left-[420px] left-[240px]">90%</span>
//       <div className="relative  border-2 sm:w-[500px] w-80 border-gray-300 bg-white rounded-full ">

//         <div className=" border-4 sm:w-[450px] w-72  border-primary rounded-full"></div>
//       </div>
//       </div>
//     {/* 8 */}
//       <div className="relative sm:left-2">
//       <span className="text-lg font-bold">Ecommerce</span>
//       <span className="relative sm:left-[360px] left-[175px]">100%</span>
//       <div className="relative  border-2 sm:w-[500px] w-80 border-gray-300 bg-white rounded-full ">

//         <div className=" border-4 sm:w-[500px] w-80  border-primary rounded-full"></div>
//       </div>
//       </div>

//       </div>
//       </section>
      

//       </div>
//       <Footer/>
//     </main>
//   );
// }

// export default Resume;






