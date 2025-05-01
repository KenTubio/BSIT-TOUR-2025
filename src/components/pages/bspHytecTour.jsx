import { MdPhoneIphone } from "react-icons/md";
import { HiOutlineMailOpen } from "react-icons/hi";
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { BsGlobe } from "react-icons/bs";

function BspHytecTour(){

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
                    <h1 className="font-bold text-4xl Font-Play my-3 text-center">Future-Ready: Hytec and BSP Experience</h1>
                    <span className="sm text-slate-500">Read Article</span>
                    <img className="w-full object-cover mt-10 h-[35rem] max-md:h-96" src="/images/bsp.jpg" alt="" />
                </section>

                <section className="flex my-20 justify-center">
                    <div className="relative">
                        
                        <div className="w-fit absolute max-md:static max-md:w-full">
                            <span className="text-center w-fit ">
                                <hr className=" w-full border-2" />
                                <h1 className="Font-Play text-4xl font-bold">25</h1>
                                <h1 className="text-sm text-slate-400 mt-1 font-sans">APRIL 7</h1>
                            </span>

                            <span className="flex flex-col justify-center max-md:flex-row items-center mt-7 text-4xl max-sm:text-xl gap-3 max-md:mb-10">
                                <a href="https://web.facebook.com/kenneth.tubio" target="_blank"><CiFacebook /></a>
                                <a href="https://x.com/siBrolngto" target="_blank"><FaXTwitter /></a>
                                <a href="https://kennethtubio.netlify.app/" target="_blank"><BsGlobe /></a>
                            </span>
                        </div>

                        <div className="px-30 max-lg:px-20 max-md:px-0">
                            <h1 className="Font-Play font-bold text-4xl mb-10">Banko Sentral Ng Pilipinas</h1>
                            <p className="mb-7 Font-Play text-lg max-lg:text-base max-sm:text-[.6rem]">Step into the heart of the Philippines' financial system with a visit to the Bangko Sentral ng Pilipinas, where economic strategy and national progress converge. Our journey through the BSP headquarters offered a rare glimpse into the inner workings of the country’s central bank — from currency production and security features to the vital role it plays in maintaining monetary stability. Inside its modern yet stately halls, we were guided through interactive exhibits and discussions that deepened our understanding of inflation control, banking systems, and the power of fiscal discipline in nation-building.</p>

                            <p className=" Font-Play text-lg max-lg:text-base max-sm:text-[.6rem]">Beyond numbers and notes, the BSP visit also emphasized the institution's mission of promoting financial literacy and inclusion for all Filipinos. We witnessed how the bank’s initiatives empower communities through responsible money management and digital banking access. The experience left us with a newfound appreciation for the intricacies of the economy and the commitment required to keep it balanced, fair, and forward-moving. It was not just an educational visit — it was an eye-opening look into how finance serves as a cornerstone of national development.</p>


                            <h1 className="Font-Play font-bold text-4xl mb-10 mt-25">HYTEC Power Inc.</h1>
                            <p className="mb-7 Font-Play text-lg max-lg:text-base max-sm:text-[.6rem]">Stepping into Hytec Power Inc. in Novaliches, Quezon City, we were immediately immersed in a hub of innovation and technological advancement. Established in 1994 by Engr. Eric Jude S. Soliman, Hytec Power has become a leading provider of industrial and educational solutions in the Philippines . Our tour began with an overview of their mission to bridge the gap between academic training and industry needs, emphasizing the importance of aligning education with real-world applications. We explored various training modules and equipment designed to enhance skills in automation, robotics, and other cutting-edge technologies, reflecting the company's commitment to Industry 4.0 standards.</p>

                            <figure className="w-full mb-5 flex gap-4 max-lg:flex-col">
                                <img className="object-cover h-96 w-full" src="/images/hytec1.png" alt="" />
                                <img className="object-cover h-96 w-full" src="/images/hytec2.png" alt="" />
                            </figure>

                            <p className=" Font-Play text-lg max-lg:text-base max-sm:text-[.6rem]">Throughout our visit, we witnessed firsthand how Hytec Power integrates advanced technology with education to prepare the future workforce. Interactive demonstrations showcased their state-of-the-art training systems, highlighting the practical applications of theoretical knowledge. The experience underscored the vital role that companies like Hytec Power play in fostering a skilled and adaptable workforce, ready to meet the evolving demands of modern industries. By the end of our tour, we left with a deeper appreciation for the synergy between education and industry, inspired by Hytec Power's dedication to empowering the next generation of professionals.</p>
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

export default BspHytecTour;