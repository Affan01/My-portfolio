import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import { FaHome } from "react-icons/fa";


import Navbar from "../navbar/page";
import Footer from "../footer/page";
function Contact(){
    return(
        <main className='container-page block relative  xl:max-w-[1280px] xl:m-28 xl:p-10 lg:max-w-[1024px] lg:m-20 bg-whh lg:p-10 40 70 60 rounded-[40px] md:max-w-f md:m-10 md:p-10 sm:max-w-full sm:bg-whh sm:m-0 sm:p-0'>
    <Navbar/>
    <div className="flex flex-col md:flex-row justify-between items-center relative max-w-full h-[180px] bg-whh border-t-2 border-b-2 border-[#eae9e9] p-5 md:p-10 -mx-5 md:mx-0">
        <h1 className="text-3xl md:text-5xl font-bold ml-3">Contact</h1>
        <span className="text-sm text-center text-secondary mt-5 md:mt-0">Get in Touch</span>
      </div>

    <div className="mt-24 mb-24 flex justify-evenly ">
        
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2  gap-6 px-4 sm:px-2">
{/* 1 */}
<div className="border-2 rounded-2xl bg-white flex flex-col items-center p-6 md:w-[350px] lg:w-[450px]">
                        <FaPhoneAlt size={50} className="text-primary mb-4" />
                        <h1 className="text-xl font-bold text-center mb-2 sm:text-lg">Phone Number</h1>
                        <h2 className="text-md font-bold text-center text-[#afaeae]">+923020000122</h2>
                    </div>

                    {/* 2 */}
                    <div className="border-2 rounded-2xl bg-white flex flex-col items-center p-6 md:w-[350px] lg:w-[450px]">
                        <MdEmail size={50} className="text-primary mb-4" />
                        <h1 className="text-xl font-bold text-center mb-2 sm:text-lg">Email</h1>
                        <h2 className="text-md font-bold text-center text-[#afaeae]">affanhussain954@gmail.com</h2>
                    </div>

                    {/* 3 */}
                    <div className="border-2 rounded-2xl bg-white flex flex-col items-center p-6 md:w-[350px] lg:w-[450px]">
                        <FaTelegramPlane size={50} className="text-primary mb-4" />
                        <h1 className="text-xl font-bold text-center mb-2 sm:text-lg">Telegram</h1>
                        <h2 className="text-md font-bold text-center text-[#afaeae]">+923020000122</h2>
                    </div>

                    {/* 4 */}
                    <div className="border-2 rounded-2xl bg-white flex flex-col items-center p-6 md:w-[90%] lmd:w-[350px] lg:w-[450px] ">
                        <FaHome size={50} className="text-primary mb-4" />
                        <h1 className="text-xl font-bold text-center mb-2 sm:text-lg">Address</h1>
                        <h2 className="text-md font-bold text-center text-[#afaeae]">Air Avenue City, Faisalabad</h2>
                    </div>


</div>
       
    </div>
    <Footer/>
        </main>
    )
}export default Contact;






// import { FaPhoneAlt, FaTelegramPlane, FaHome } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";

// import Navbar from "../navbar/page";
// import Footer from "../footer/page";

// function Contact() {
//     return (
//         <main className='container-page block relative xl:max-w-[1280px] xl:m-24 xl:p-10 lg:max-w-[1024px] lg:m-20 lg:p-10 md:max-w-full md:m-0 md:p-4 sm:max-w-full sm:m-0 sm:p-2 bg-whh rounded-[40px]'>
//             <Navbar />
//             <div className="flex flex-col items-center justify-center relative max-w-full h-auto bg-white border-t-2 border-b-2 border-[#f2f2f2] p-10">
//                 <h1 className="text-4xl font-bold mb-2 sm:text-3xl">Contact</h1>
//                 <span className="text-sm text-secondary mb-8">Get in Touch</span>
//             </div>
//             <div className="mt-12 flex flex-col items-center md:mt-8">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 sm:px-2">
                    // {/* 1 */}
                    // <div className="border-2 rounded-2xl bg-white flex flex-col items-center p-6 md:w-[90%] lg:w-[80%]">
                    //     <FaPhoneAlt size={50} className="text-primary mb-4" />
                    //     <h1 className="text-xl font-bold text-center mb-2 sm:text-lg">Phone Number</h1>
                    //     <h2 className="text-md font-bold text-center text-[#afaeae]">+923020000122</h2>
                    // </div>

                    // {/* 2 */}
                    // <div className="border-2 rounded-2xl bg-white flex flex-col items-center p-6 md:w-[90%] lg:w-[80%]">
                    //     <MdEmail size={50} className="text-primary mb-4" />
                    //     <h1 className="text-xl font-bold text-center mb-2 sm:text-lg">Email</h1>
                    //     <h2 className="text-md font-bold text-center text-[#afaeae]">affanhussain954@gmail.com</h2>
                    // </div>

                    // {/* 3 */}
                    // <div className="border-2 rounded-2xl bg-white flex flex-col items-center p-6 md:w-[90%] lg:w-[80%]">
                    //     <FaTelegramPlane size={50} className="text-primary mb-4" />
                    //     <h1 className="text-xl font-bold text-center mb-2 sm:text-lg">Telegram</h1>
                    //     <h2 className="text-md font-bold text-center text-[#afaeae]">+923020000122</h2>
                    // </div>

                    // {/* 4 */}
                    // <div className="border-2 rounded-2xl bg-white flex flex-col items-center p-6 md:w-[90%] lg:w-[80%]">
                    //     <FaHome size={50} className="text-primary mb-4" />
                    //     <h1 className="text-xl font-bold text-center mb-2 sm:text-lg">Address</h1>
                    //     <h2 className="text-md font-bold text-center text-[#afaeae]">Air Avenue City, Faisalabad</h2>
                    // </div>
//                 </div>
//             </div>
//             <Footer />
//         </main>
//     );
// }

// export default Contact;
