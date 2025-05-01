import { MdPhoneIphone } from "react-icons/md";
import { HiOutlineMailOpen } from "react-icons/hi";
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { BsGlobe } from "react-icons/bs";

function CityTour(){

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
                    <h1 className="font-bold text-4xl Font-Play my-3 text-center">Manila in Minutes: A Quick City Tour</h1>
                    <span className="sm text-slate-500">Read Article</span>
                    <img className="w-full object-cover mt-10 h-[35rem] max-md:h-96" src="/images/intra.jpeg" alt="" />
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
                            <h1 className="Font-Play font-bold text-4xl mb-10">Intramuros</h1>
                            <p className="mb-7 Font-Play text-lg max-lg:text-base max-sm:text-[.6rem]">Step back in time as you explore the storied walls of Intramuros, Manila’s historic walled city. Once the seat of Spanish colonial power, this fortress-like district is home to cobblestone streets, centuries-old churches, and grand colonial architecture. From the majestic Fort Santiago, where national hero José Rizal was imprisoned, to the awe-inspiring Manila Cathedral and the ornate San Agustin Church, each corner of Intramuros whispers tales of the past. Guided tours offer rich insights into Philippine history, culture, and resilience that shaped the nation today.</p>

                            <p className=" Font-Play text-lg max-lg:text-base max-sm:text-[.6rem]">As you walk through its charming alleys, you'll encounter horse-drawn kalesas, local artisans, and quaint cafes tucked into colonial ruins — a blend of old-world charm and modern Filipino spirit. Whether you're snapping photos on Baluarte de San Diego, enjoying a calm moment in Plaza Roma, or trying traditional dishes in local eateries, Intramuros offers a truly immersive cultural experience. It’s more than just a tour; it’s a walk through the soul of Manila.</p>


                            <h1 className="Font-Play font-bold text-4xl mb-10 mt-25">Rizal Park</h1>
                            <p className="mb-7 Font-Play text-lg max-lg:text-base max-sm:text-[.6rem]">Nestled in the heart of Manila, Rizal Park—also known as Luneta—is a verdant urban oasis steeped in national pride. This iconic landmark commemorates the life and legacy of Dr. José Rizal, the Philippines’ national hero, whose martyrdom sparked the country's fight for independence. At the center of the park stands the solemn Rizal Monument, guarded day and night, making it a powerful site of reflection and patriotism. Beyond its historical significance, the park offers wide open lawns, landscaped gardens, and memorials that tell the story of the nation..</p>

                            <figure className="w-full mb-5 flex gap-4 max-lg:flex-col">
                                <img className="object-cover h-96 w-full" src="/images/first.png" alt="" />
                                <img className="object-cover h-96 w-full" src="/images/park.png" alt="" />
                            </figure>

                            <p className=" Font-Play text-lg max-lg:text-base max-sm:text-[.6rem]">Whether you’re strolling by the Chinese and Japanese Gardens, watching the musical dancing fountains, or learning at the National Museum Complex nearby, Rizal Park offers something for every kind of traveler. It’s a place where history meets leisure, where you can unwind under towering trees while connecting with the country’s storied past. Ideal for solo visits or family outings, Rizal Park is more than a stop—it’s a meaningful experience in the heart of Manila.</p>
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

export default CityTour;