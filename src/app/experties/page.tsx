// function Experties(){
//     return(
// <main className="mt-24">
//     <div className="flex justify-normal items-center ml-44  ">
//        <div className="text-gray-500 w-[500px]"><p className="text-md  ">
//         I building web applications using <span className="text-xl font-bold text-black">Next.js, TypeScript.<br/></span> </p>
//        <p className="text-md ">
//         My experience with Next.js ensures high-performance,server-rendered React 
//         apps with excellent SEO. TypeScript enhancescode quality through strong
//         type-checking, while Tailwind CSS allows for rapid, responsive & visually 
//         appealing  design. Together, these skills enable me to  create and
//          maintainable web solutions.</p></div>
//         {/* image */}
//         <div className=""><img src="/n.gif" alt="process" className="h-full [400px] w-full [500px]"></img></div>
//     </div>
// </main>
//     )
// }export default Experties;


function Experties() {
    return (
      <main className="mt-12 p-4">
        <div className="mb-8 md:hidden lg:hidden xl:hidden">
            <p className="text-center text-sm text-[#666]">About Me</p>
            <h1 className="gap-2 text-center text-4xl font-bold group flex  flex-col justify-center items-center">Experties
            <span className="underline-custom  border-2 border-primary rounded-md w-[100px]  h-1 bg-primary transition-all duration-[600ms] group-hover:w-[190px] w-2s text-center  "></span>
            </h1>
            </div>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-16">
          <div className="text-gray-500 max-w-md lg:max-w-lg">
            <p className="text-md">
            </p>
            <p className="text-md mt-4 text-center">              I build web app using

            <span className="text-xl font-bold text-black"> Next.js, TypeScript. </span> 
             My experience with Next.js ensures high-performance, server-rendered React apps with excellent SEO. TypeScript enhances code quality through strong type-checking, while Tailwind CSS allows for rapid, responsive & visually appealing design. Together, these skills enable me to create and maintain maintainable web solutions.
            </p>
          </div>
          {/* image */}
          <div className="flex justify-center items-center">
            <img src="/n.gif" alt="process" className="max-h-[400px] max-w-full lg:max-w-md" />
          </div>
        </div>
      </main>
    );
  }
  
  export default Experties;
  

