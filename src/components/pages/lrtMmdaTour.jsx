import { MdPhoneIphone } from "react-icons/md";
import { HiOutlineMailOpen } from "react-icons/hi";
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { BsGlobe } from "react-icons/bs";

function LrtMmdaTour(){

    return(
        <>
            <header className="flex justify-between">
                <figure className="bg-black w-fit">
                    <img className="w-28" src="/images/new-logoni-bro.png" alt="" />
                </figure>

                <div className="flex pr-6 gap-6 max-sm:flex-col max-sm:gap-1 max-sm:items-center max-sm:justify-center ">
                    <span className="flex items-center gap-2">
                        <MdPhoneIphone />
                        <h3 className="text-sm max-sm:text-[.7rem]"> +09282782832</h3>
                    </span>

                    <span className="flex items-center gap-2">
                        <HiOutlineMailOpen />
                        <h3 className="max-sm:text-sm"> kenith.zro@gmail.com</h3>
                    </span>
                </div>
                
            </header>

            <main className="w-full px-50 max-xl:px-20 max-sm:px-7">
                <section className="w-full flex justify-center mt-15 flex-col items-center">
                    <img className="w-15" src="/images/logo-favicon.png" alt="" />
                    <h1 className="font-bold text-4xl Font-Play my-3 text-center">Systems in Motion: MMDA and LRT-2 Experience</h1>
                    <span className="sm text-slate-500">Read Article</span>
                    <img className="w-full object-cover mt-10 h-[35rem] max-md:h-96" src="/images/lrt2.png" alt="" />
                </section>

                <section className="flex my-20 justify-center">
                    <div className="relative">
                        
                        <div className="w-fit absolute max-md:static max-md:w-full">
                            <span className="text-center w-fit ">
                                <hr className=" w-full border-2" />
                                <h1 className="Font-Play text-4xl font-bold">25</h1>
                                <h1 className="text-sm text-slate-400 mt-1 font-sans">APRIL 11</h1>
                            </span>

                            <span className="flex flex-col justify-center max-md:flex-row items-center mt-7 text-4xl max-sm:text-xl gap-3 max-md:mb-10">
                                <a href="https://web.facebook.com/kenneth.tubio" target="_blank"><CiFacebook /></a>
                                <a href="https://x.com/siBrolngto" target="_blank"><FaXTwitter /></a>
                                <a href="https://kennethtubio.netlify.app/" target="_blank"><BsGlobe /></a>
                            </span>
                        </div>

                        <div className="px-30 max-lg:px-20 max-md:px-0">
                            <h1 className="Font-Play font-bold text-4xl mb-10">LRT Line 2</h1>
                            <p className="mb-7 Font-Play text-lg max-lg:text-base max-sm:text-[.6rem]">Step into the dynamic world of urban transit as we explored the operations behind the Light Rail Transit Line 2 (LRT-2), one of Metro Manila’s key transportation arteries. Our visit brought us to the heart of its maintenance facility, where we witnessed firsthand how these massive trains are meticulously serviced and inspected for safety and reliability. From specialized workshops to high-tech diagnostic equipment, we gained valuable insight into the critical work that keeps the trains running smoothly day after day. Expert engineers and staff walked us through their routines, showcasing the precision and coordination required to maintain a transport system that serves thousands of commuters daily.</p>

                            <p className=" Font-Play text-lg max-lg:text-base max-sm:text-[.6rem]">After our behind-the-scenes tour, we experienced the LRT-2 system in motion by riding the train ourselves. Gliding above the bustling streets of Metro Manila, we saw the city from a new perspective, appreciating the convenience and speed this elevated railway provides. The ride allowed us to observe station operations, passenger flow, and the seamless integration of public transit into the urban landscape. This immersive journey gave us a deeper appreciation of how vital transportation infrastructure is to daily life and national progress — a system constantly in motion, sustained by the hands of those who work behind the scenes.</p>


                            <h1 className="Font-Play font-bold text-4xl mb-10 mt-25">MMDA</h1>
                            <p className="mb-7 Font-Play text-lg max-lg:text-base max-sm:text-[.6rem]">Our visit to the Metropolitan Manila Development Authority (MMDA) headquarters offered an eye-opening experience into the agency responsible for the pulse of Metro Manila’s daily flow. Nestled in Pasig City, the towering 20-story facility serves as the command center for managing traffic, disaster response, urban planning, and public safety across the capital region. As we moved through various departments and control rooms, we were introduced to the systems and technologies used to monitor real-time traffic conditions, coordinate emergency responses, and enforce road safety regulations. The agency’s dedication to maintaining order amid the urban chaos was evident in every corner.</p>

                            <figure className="w-full mb-5 flex gap-4 max-lg:flex-col">
                                <img className="object-cover h-96 w-1/2 max-lg:w-full" src="/images/mmda1.png" alt="" />
                                <img className="object-cover h-96 w-1/2 max-lg:w-full" src="/images/mmda2.png" alt="" />
                            </figure>

                            <p className=" Font-Play text-lg max-lg:text-base max-sm:text-[.6rem]">Guided by MMDA personnel, we explored how they manage metropolitan-wide projects, from flood control initiatives to pedestrian safety campaigns. We observed how CCTV surveillance, digital mapping, and traffic modeling tools are utilized to ensure smooth coordination among local government units. The visit highlighted the complexities of governing a megacity and the crucial role MMDA plays in shaping a more efficient and livable Metro Manila. It was a powerful reminder that beneath the everyday movements of commuters and motorists lies a highly organized system built on public service, discipline, and innovation.</p>
                        </div>
                    </div>
                </section>

            </main>
            
            <footer className="flex justify-center items-center gap-8 px-20 pb-15">
                <h1 className="Font-Play text-5xl max-xl:text-2xl font-bold max-md:text-3xl">Thank You.</h1>
                <hr className="border-1 w-3/4 max-md:hidden" />
            </footer>
        </>
    )
}

export default LrtMmdaTour;