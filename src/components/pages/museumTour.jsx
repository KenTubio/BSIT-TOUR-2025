import { MdPhoneIphone } from "react-icons/md";
import { HiOutlineMailOpen } from "react-icons/hi";
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { BsGlobe } from "react-icons/bs";

function MuseumTour(){

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
                    <h1 className="font-bold text-4xl Font-Play my-3 text-center">Exploring History: The National Museum and Quezon Memorial Circle</h1>
                    <span className="sm text-slate-500">Read Article</span>
                    <img className="w-full object-cover mt-10 h-[35rem] max-md:h-96" src="/images/national-m.png" alt="" />
                </section>

                <section className="flex my-20 justify-center">
                    <div className="relative">
                        
                        <div className="w-fit absolute max-md:static max-md:w-full">
                            <span className="text-center w-fit ">
                                <hr className=" w-full border-2" />
                                <h1 className="Font-Play text-4xl font-bold">25</h1>
                                <h1 className="text-sm text-slate-400 mt-1 font-sans">APRIL 9</h1>
                            </span>

                            <span className="flex flex-col justify-center max-md:flex-row items-center mt-7 text-4xl max-sm:text-xl gap-3 max-md:mb-10">
                                <a href="https://web.facebook.com/kenneth.tubio" target="_blank"><CiFacebook /></a>
                                <a href="https://x.com/siBrolngto" target="_blank"><FaXTwitter /></a>
                                <a href="https://kennethtubio.netlify.app/" target="_blank"><BsGlobe /></a>
                            </span>
                        </div>

                        <div className="px-30 max-lg:px-20 max-md:px-0">
                            <h1 className="Font-Play font-bold text-4xl mb-10">National Museum</h1>
                            <p className="mb-7 Font-Play text-lg max-lg:text-base max-sm:text-[.6rem]">Immerse yourself in the rich tapestry of Filipino culture and history at the National Museum, Manila’s treasure trove of artistic and historical wonders. This iconic institution houses an impressive collection of indigenous artifacts, masterpieces of Filipino art, and significant historical exhibits that narrate the country's journey from pre-colonial times to the modern era. As you wander through its grand halls, you'll discover ancient relics, stunning sculptures, and historical artworks that reflect the nation's diverse heritage. Each exhibit offers a deeper understanding of the Philippines' rich past, making the National Museum a must-visit for anyone eager to learn about the heart and soul of the Filipino people.</p>

                            <p className=" Font-Play text-lg max-lg:text-base max-sm:text-[.6rem]">Step into a world of heritage and artistry at the National Museum, where the Philippines' vibrant history comes to life. From ancient artifacts to contemporary art, the museum showcases the country's diverse cultural roots and artistic achievements. Visitors can marvel at exquisite sculptures, archaeological finds, and historical collections that span centuries, offering a fascinating glimpse into the nation's evolution. With each gallery offering a unique narrative, the National Museum serves as a powerful reminder of the Philippines' rich cultural legacy and its enduring spirit.</p>


                            <h1 className="Font-Play font-bold text-4xl mb-10 mt-25">Manuel Quezon</h1>
                            <p className="mb-7 Font-Play text-lg max-lg:text-base max-sm:text-[.6rem]">Located in the bustling heart of Quezon City, the Manuel Quezon Museum offers an intimate look at the life and legacy of the Philippines’ second president. The museum, housed in the former residence of Manuel L. Quezon, showcases a wealth of personal artifacts, photographs, and memorabilia that reflect his pivotal role in the country’s history. Visitors can walk through carefully curated exhibits that chronicle his journey—from his early years in Baler to his presidency, where he championed the promotion of the national language and fought for independence. As you explore the museum’s galleries, you are reminded of Quezon’s vision and the profound impact he had on the development of the Philippine nation.</p>

                            <figure className="w-full mb-5 flex gap-4 max-lg:flex-col">
                                <img className="object-cover h-96 w-full" src="/images/quezon1.png" alt="" />
                                <img className="object-cover h-96 w-1/2 max-lg:w-full" src="/images/quezon2.png" alt="" />
                            </figure>

                            <p className=" Font-Play text-lg max-lg:text-base max-sm:text-[.6rem]">The Manuel Quezon Museum is not just a tribute to a prominent historical figure, but also a sanctuary of Philippine heritage. Surrounded by lush gardens and set against the backdrop of Quezon Memorial Circle, the museum offers a peaceful escape where history and nature coexist. As you move through the museum’s various rooms, you encounter a deep connection between Quezon’s personal life and his contributions to the country's political and cultural landscape. This place serves as a testament to his enduring influence, making it a must-visit destination for anyone seeking to understand the roots of modern Philippine democracy.</p>
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

export default MuseumTour;