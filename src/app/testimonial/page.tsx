// 'use client'
// import Image from 'next/image';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import { Pagination } from 'swiper/modules';
// function Testimonial() {
//   return (
//     <main className='  mt-24  '>
//       <div className="">
//       <h1 className='  text-center text-4xl font-bold gap-2 flex flex-col justify-center items-center group'>Testimonial
//       <span className="underline  border-2 border-primary rounded-md w-[100px] h-1 bg-primary transition-all duration-[600ms] group-hover:w-[200px] w-2s text-center  "></span>
//       </h1>
//       </div>
//       <div className='flex justify-center items-center ml-20 mr-20 mt-20'>
//       <Swiper
//         slidesPerView={2}
//         spaceBetween={30}
//         pagination={{
//           clickable: true,
//         }}
//         modules={[Pagination]}
//         className="mySwiper"
//       >
        
//         <SwiperSlide>
//         <div className=" flex flex-col md:flex-row gap-8 md:gap-14 items-center justify-center p-8 rounded-lg bg-white shadow-md border-[#e5e5e5] border-2">
//       <div className="w-48 h-28 rounded-full overflow-hidden">
//       <img src="./t1.png" alt="profile picture"  className="rounded-full w-28 h-20 mt-4  "/>

//       </div>
//       <div className="flex flex-col items-start gap-1 ">
//         <p className="text-sm font-sm text-[#666]">
//         Outstanding work! Delivered a high-quality, responsive website. Exceeded expectations with excellent communication.
//         </p>
//         <p className="text-md font-bold">Gary Johnson</p>
//         <p className="text-gray-500 text-sm -top-4">Locost Accessories</p>
//       </div>
//     </div>
//             </SwiperSlide> 
//         <SwiperSlide >
//         <div className="flex flex-col md:flex-row gap-8 md:gap-14 items-center justify-center p-8 rounded-lg bg-white shadow-md border-[#e5e5e5] border-2">
//       <div className="w-48 h-28  rounded-full overflow-hidden">
//       <img src="./d3.png" alt="profile picture"  className="rounded-full w-20 h-20 mt-4  "/>

//       </div>
//       <div className="flex flex-col items-start gap-1 ">
//         <p className="text-sm font-sm text-[#666]">
//         Exceptional web project! User-friendly design & exceeded expectations. Highly recommended developer.
//         </p>
//         <p className="text-md font-bold">Avery Joy</p>
//         <p className="text-gray-500 text-sm -top-4">Urban Threads</p>
//       </div>
//     </div>
//         </SwiperSlide>
//         <SwiperSlide>
//         <div className="flex flex-col md:flex-row gap-8 md:gap-14 items-center justify-center p-8 rounded-lg bg-white shadow-md border-[#e5e5e5] border-2">
//       <div className="w-48 h-28  rounded-full overflow-hidden">
//       <img src="./d2.png" alt="profile picture"  className="rounded-full w-28 h-20 mt-4  "/>

//       </div>
//       <div className="flex flex-col items-start gap-1 ">
//         <p className="text-sm font-sm text-[#666]">
//         Impressive AI voice assistant! User-friendly, efficient, and delivered beyond expectations. Highly recommended service.
//         </p>
//         <p className="text-md font-bold">Elsa Faith</p>
//         <p className="text-gray-500 text-sm -top-4">VoiceGenie AI</p>
//       </div>
//     </div>
//         </SwiperSlide>
//         <SwiperSlide>
//         <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center justify-center p-8 rounded-lg bg-white shadow-md border-[#e5e5e5] border-2">
//       <div className="w-48 h-28  rounded-full overflow-hidden">
//       <img src="./d4.png" alt="profile picture"  className="rounded-full w-18 h-20 mt-4  "/>

//       </div>
//       <div className="flex flex-col items-start gap-1 mr-3">
//         <p className="text-sm font-sm text-[#666]">
//         Outstanding work! Efficient, scalable, and delivered with exceptional attention to detail.
//         </p>
//         <p className="text-md font-bold">Harley-Rose</p>
//         <p className="text-gray-500 text-sm -top-4">Repair Opia</p>
//       </div>
//     </div>
//         </SwiperSlide>
       
//       </Swiper>
//       </div>
//     </main>
//   );
// }export default Testimonial;





'use client'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

function Testimonial() {
  return (
    <main className="mt-24 p-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold flex flex-col justify-center items-center group">
          Testimonial
          <span className="underline border-2 border-primary rounded-md w-[100px] h-1 bg-primary transition-all duration-[600ms] group-hover:w-[200px] w-2s text-center"></span>
        </h1>
      </div>
      <div className="flex justify-center items-center mt-20">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper w-full"
        >
          <SwiperSlide >
            <div className="flex flex-col md:flex-row gap-8 md:gap-14 items-center justify-center p-8 rounded-lg bg-white shadow-md border-[#e5e5e5] border-2">
              <div className="w-28 h-28 md:w-44 md:h-28 rounded-full overflow-hidden">
                <img src="./t1.png" alt="profile picture" className="rounded-full w-full h-full" />
              </div>
              <div className="flex flex-col items-start gap-1">
                <p className="text-sm font-sm text-[#666]">
                  Outstanding work! Delivered a responsive website and provide unique UI design.
                </p>
                <p className="text-md font-bold">Gary Johnson</p>
                <p className="text-gray-500 text-sm">Locost Accessories</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center justify-center p-8 rounded-lg bg-white shadow-md border-[#e5e5e5] border-2">
              <div className="w-28 h-28 md:w-48 md:h-28 rounded-full overflow-hidden">
                <img src="./d3.png" alt="profile picture" className="rounded-full w-full h-full" />
              </div>
              <div className="flex flex-col items-start gap-1">
                <p className="text-sm font-sm text-[#666]">
                Impressive clothing brand! User-friendly, efficient, and delivered beyond expectations.
                </p>
                <p className="text-md font-bold">Avery Joy</p>
                <p className="text-gray-500 text-sm">Urban Threads</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center justify-center p-8 rounded-lg bg-white shadow-md border-[#e5e5e5] border-2">
              <div className="w-28 h-28 md:w-48 md:h-28 rounded-full overflow-hidden">
                <img src="./d2.png" alt="profile picture" className="rounded-full w-full h-full" />
              </div>
              <div className="flex flex-col items-start gap-1">
                <p className="text-sm font-sm text-[#666]">
                  Impressive AI voice assistant! User-friendly, efficient, and delivered beyond expectations.
                </p>
                <p className="text-md font-bold">Elsa Faith</p>
                <p className="text-gray-500 text-sm">VoiceGenie AI</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center justify-center p-8 rounded-lg bg-white shadow-md border-[#e5e5e5] border-2">
              <div className="w-28 h-28 md:w-48 md:h-28 rounded-full overflow-hidden">
                <img src="./d4.png" alt="profile picture" className="rounded-full w-full h-full" />
              </div>
              <div className="flex flex-col items-start gap-1 mr-3">
                <p className="text-sm font-sm text-[#666]">
                  Outstanding work! Efficient, scalable, and delivered with exceptional attention to detail.
                </p>
                <p className="text-md font-bold">Harley-Rose</p>
                <p className="text-gray-500 text-sm">Repair Opia</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </main>
  );
}

export default Testimonial;



