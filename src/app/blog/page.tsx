import Navbar from "../navbar/page";
import Footer from "../footer/page";
import Image from "next/image";

function Blog() {
    return (
        <main className=" container-page block relative  xl:max-w-[1280px] xl:m-28 xl:p-10 lg:max-w-[1024px] lg:m-20 bg-whh lg:p-10 40 70 60 rounded-[40px] md:max-w-f md:m-10 md:p-10 sm:max-w-full sm:bg-whh sm:m-0 sm:p-0">
        <Navbar/>
        <div className="flex flex-col md:flex-row justify-between items-center relative max-w-full h-[180px] bg-whh border-t-2 border-b-2 border-[#eae9e9] p-5 md:p-10 -mx-5 md:mx-0">
        <h1 className="text-3xl md:text-5xl font-bold ml-3">Blog</h1>
        <span className="text-sm text-center text-secondary mt-5 md:mt-0">My Diary</span>
      </div>


    <section className="ml-3">

            <section className="mt-2">
                <div className="mb-5 ">
                    <h1 className=" text-center text-2xl font-bold gap-2 group flex flex-col justify-center items-center">Web App Development Process
                        <span className="underline  border-2 border-primary rounded-md w-[100px] h-1 bg-primary transition-all duration-[600ms] group-hover:w-[260px] w-2s text-center  "></span>
                    </h1>
                </div>
                <p className="text-secondary mb-10">The web development process involves gathering requirements, planning the project, designing wireframes and mockups, developing the frontend and backend,testing for functionality and compatibility, deploying the website, and providing ongoing maintenance and optimization.</p>
                <div className="flex justify-center mb-16  max-sm:hidden max-md:hidden">
                    <div className="relative border-8 border-red-600 hover:bg-red-600 hover:text-white shadow-xl p-16 rounded-full w-24 h-24 text-center"><h1 className="absolute text-center left-7 text-lg font-bold  top-[50px]">Planning</h1></div>
                    <div className="relative top-16 border-gray-300 bg-gray-300 border-2  w-24 h-1 "></div>
                    <div className="relative border-8 border-green-600  hover:bg-green-600 hover:text-white p-16 rounded-full w-24 h-24 text-center"><h1 className="absolute text-center left-9 text-lg font-bold  top-[50px]">Design</h1></div>
                    <div className="relative top-16 border-gray-300 bg-gray-300 border-2 w-24 h-1 "></div>
                    <div className="relative border-8 border-[#946cd3] hover:bg-[#946cd3] hover:text-white p-16 rounded-full w-24 h-24 text-center"><h1 className="absolute text-center left-1 text-lg font-bold  top-[50px]">Development</h1></div>
                    <div className="relative top-16 border-gray-300 bg-gray-300 border-2 w-24 h-1 "></div>
                    <div className="relative border-8 border-[#C59849] hover:bg-[#C59849] hover:text-white p-16 rounded-full w-24 h-24 text-center"><h1 className="absolute text-center left-8 text-lg font-bold  top-[50px]">Testing</h1></div>
                    <div className="relative top-16 border-gray-300 bg-gray-300 border-2 w-24 h-1 "></div>
                    <div className="relative border-8 border-[#29AB87] hover:bg-[#29AB87] hover:text-white p-16 rounded-full w-24 h-24 text-center"><h1 className="absolute text-center left-2 text-lg font-bold  top-[50px]">Deployment</h1></div>
                    <div className="relative top-16 border-gray-300 bg-gray-300 border-2 w-24 h-1 "></div>
                    <div className="relative border-8 border-[#3facc0] hover:bg-[#3facc0] hover:text-white p-16 rounded-full w-24 h-24 text-center"><h1 className="absolute text-center left-2 text-lg font-bold  top-[50px]">Optimization</h1></div>
                </div>
            </section>
            {/* 2 */}
            <section className="mt-20">
                <div>
                    <div className="education">
                        <div className="mb-8">
                            <h1 className="text-2xl font-bold">Planning</h1>
                            <div className="relative  border w-28  bg-white rounded-full ">

                                <div className=" border-2 w-14  border-primary rounded-full"></div>
                            </div>
                        </div>
                        <p className="text-secondary">
                            The planning process in web development involves several essential steps. First, the project scope is defined to set clear objectives and deliverables. Next, a sitemap is created to outline the website&apos;s structure and navigation. Wireframes are developed to design basic layouts and functionalities for each page. Milestones are then set to establish a timeline with key deliverables and deadlines. Resources are allocated, assigning tasks to team members and determining the necessary tools and budget. Finally, the technology stack is selected, choosing the appropriate tools, frameworks, and platforms to be used. This comprehensive planning ensures an organized workflow, efficient use of resources, and a clear roadmap for the development phase.</p>
                            <Image src="/pl.png" width={500} height={100} alt="dv" className="max-sm:hidden max-md:hidden relative w-[500px] left-96 top-6"></Image>

                    </div>
                    </div>
            </section>
            {/* 3 */}
            <section className="mt-12">
                <div>
                    <div className="education">
                        <div className="mb-8">
                            <h1 className="text-2xl font-bold">Design</h1>
                            <div className="relative  border w-24  bg-white rounded-full ">

                                <div className=" border-2 w-14  border-primary rounded-full"></div>
                            </div>
                        </div>
                        <p className="text-secondary">
                        The design phase in web development focuses on creating the visual and interactive elements of the website. This involves transforming wireframes into high-fidelity mockups that incorporate branding, color schemes, typography, and images. Designers work on user interface (UI) and user experience (UX) to ensure the site is visually appealing and easy to navigate. Interactive prototypes may be created to demonstrate functionality and gather feedback. The goal is to create a cohesive and engaging design that aligns with the project&apos;s objectives and enhances the user experience. This phase sets the foundation for the development team to bring the design to life.</p>                    </div>
                        <p className="text-secondary mt-2"><span className="font-bold text-black">1. Focus on UI/UX: </span> <br/>Ensure the design enhances user experience and usability, making the website easy to navigate and interact with, while maintaining a visually attractive interface.</p>
                        <p className="text-secondary mt-2"><span className="font-bold text-black">2. Create High-Fidelity Mockups:</span> <br/>Transform wireframes into detailed visual designs, incorporating branding elements like color schemes, typography, and images to create a cohesive and appealing look.</p>
                        <p className="text-secondary mt-1"><span className="text-black font-bold">3. Develop Interactive Prototypes:</span><br/>Create prototypes to demonstrate the website&apos;s functionality and gather feedback. This helps identify potential issues and refine the design before moving to the development phase.</p>

                    </div>
            </section>
            {/* 4 */}
            <section className="mt-12">
                <div>
                    <div className="education">
                        <div className="mb-8">
                            <h1 className="text-2xl font-bold">Development</h1>
                            <div className="relative  border w-32  bg-white rounded-full ">

                                <div className=" border-2 w-14  border-primary rounded-full"></div>
                            </div>
                        </div>
                        <p className="text-secondary">
                        The development phase in web development involves transforming the design into a functional website. This includes both frontend and backend development. Frontend developers implement the visual elements using HTML, CSS, and JavaScript, ensuring the site is responsive and user-friendly. Backend developers work on the server-side, setting up databases, servers, and application logic to manage data and ensure smooth functionality. Integration of APIs and third-party services may also occur during this phase. Continuous testing is conducted to identify and fix bugs, ensuring the website functions as intended. This phase is critical for bringing the design to life and creating a fully operational site.</p>                    </div>
                        <Image src="/dv.png" alt="dv" width={500} height={100} className="max-sm:hidden max-md:hidden relative left-80 top-6"></Image>

                    </div>
            </section>
            {/* 5 */}
            <section className="mt-12">
                <div>
                    <div className="education">
                        <div className="mb-8">
                            <h1 className="text-2xl font-bold">Testing</h1>
                            <div className="relative  border w-24  bg-white rounded-full ">

                                <div className=" border-2 w-14  border-primary rounded-full"></div>
                            </div>
                        </div>
                        <p className="text-secondary">

                        Testing in software development is the systematic process of verifying and validating a system or application to ensure it meets specified requirements, functions correctly, and delivers a reliable user experience.</p>                    </div>
                        <p className="text-secondary mt-1"><span className="text-black font-bold">1. Functionality Testing:</span><br/>Checks if all features and functionalities of the website work as intended. This includes testing forms, buttons, navigation, and interactive elements to ensure they perform their intended actions without errors.</p>
                        <p className="text-secondary mt-1"><span className="text-black font-bold">2. Usability Testing:</span><br/> Focuses on how easy and intuitive the website is for users to navigate and interact with. Usability testing often involves real users performing tasks on the site to identify any usability issues or areas for improvement.</p>
                        <p className="text-secondary mt-1"><span className="text-black font-bold">3. Compatibility Testing: </span><br/>Ensures the website performs consistently across different devices (desktops, tablets, mobile phones) and web browsers (Chrome, Firefox, Safari, etc.). This testing verifies that the site displays correctly and functions well on various platforms.</p>
                        <p className="text-secondary mt-1"><span className="text-black font-bold">4. Security Testing:</span><br/>Checks for vulnerabilities and potential security risks within the website or web application. This includes testing for threats like SQL injection, cross-site scripting (XSS), and ensuring data encryption protocols are properly implemented.</p>
                        <p className="text-secondary mt-1"><span className="text-black font-bold">5. Performance Testing:</span><br/> Evaluates the website's speed, responsiveness, and stability under different conditions, such as heavy traffic or low internet connectivity. Performance testing helps identify and address bottlenecks that could impact user experience.</p>
                        <p className="text-secondary mt-1"><span className="text-black font-bold">6. Regression Testing:</span><br/>Verifies that recent code changes or updates to the website have not introduced new issues or caused existing functionalities to break. This ensures the overall stability and reliability of the website after updates.</p>

                   
                   
                   
                    </div>
            </section>
            {/* 6 */}
            <section className="mt-12">
                <div>
                    <div className="education">
                        <div className="mb-8">
                            <h1 className="text-2xl font-bold">Deployment</h1>
                            <div className="relative  border w-32  bg-white rounded-full ">

                                <div className=" border-2 w-14  border-primary rounded-full"></div>
                            </div>
                        </div>
                        <p className="text-secondary">

                        Deployment in the context of web development refers to the process of making a website or web application live and accessible to users. It involves transferring the developed code and associated assets from a development environment to a production environment, typically a web server. Deployment includes tasks such as configuring server settings, uploading files, setting up databases, and ensuring all dependencies are met. It also involves testing the deployed application to verify that it functions correctly in the live environment and is ready for use by end-users. Continuous monitoring and maintenance may follow deployment to address any issues that arise and ensure optimal performance of the website or application. Successful deployment marks the transition of the development phase to the operational phase, making the product available for public access.</p>                    </div>
                       <div className= "max-sm:hidden max-md:hidden bg-white mr-[-40px] ml-[-40px] mt-10 h-96 border border-gray-300"> <Image src="/dep.png" alt="dv" width={500} height={0} className="max-sm:hidden max-md:hidden relative  left-96 top-"></Image></div>

                    </div>
            </section>
            {/* 7 */}
            <section className="mt-12 mb-24">
                <div>
                    <div className="education">
                        <div className="mb-8">
                            <h1 className="text-2xl font-bold">Optimization</h1>
                            <div className="relative  border w-32  bg-white rounded-full ">

                                <div className=" border-2 w-14  border-primary rounded-full"></div>
                            </div>
                        </div>
                        <p className="text-secondary">
                        Optimization in web development involves refining a site to improve speed, performance, and efficiency. This includes optimizing code, images, and assets to reduce load times, implementing caching strategies, and refining server configurations to enhance responsiveness. The aim is to create a faster, more efficient website that provides a better user experience and improves overall site performance metrics.</p>                    </div>
                    </div>
            </section>
            <p className="text-secondary"><span className="text-black font-bold"></span></p>


            </section>
        <Footer/>
        </main>
    )
} export default Blog;
