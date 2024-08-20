import Navbar from "./navbar/page"
import About from "./aboutMe/page"
import Services from "./services/page"
import Testimonial from "./testimonial/page"
import Experience from "./experience/page"
import Fun from "./funFact/page"
import Experties from "./experties/page"
import Cstudy from "./Cstudy/page"
import Footer from "./footer/page"

import React from "react";
        // Start home page

function Home() {
  return (
    <main className='container-page block relative  xl:max-w-[1280px] xl:m-28 xl:p-10 lg:max-w-[1024px] lg:m-20 bg-whh lg:p-10 40 70 60 rounded-[40px] md:max-w-f md:m-10 md:p-10 sm:max-w-full sm:bg-whh sm:m-0 sm:p-0'>
<Navbar/>
<About/>
<Experties/>
<Experience/>
<Services/>
<Testimonial/>
<Fun/>
<Cstudy/>
<hr className="mb-7 bg-gray-400"/>
<Footer />
    </main>);
} export default Home; 






// function Home() {
//   return (
//     <main className='container mx-auto px-4 sm:px-6 lg:px-8 lg:m-20 xl:px-10 xl:m-24 md:m-10 md:p-10 bg-whh rounded-[40px]'>
//       <Navbar />
//       <About />
//       <Experties />
//       <Experience />
//       <Services />
//       <Testimonial />
//       <Fun />
//       <Cstudy />
//       <hr className="mb-7 bg-gray-400" />
//       <Footer />
//     </main>
//   );
// }

// export default Home;
