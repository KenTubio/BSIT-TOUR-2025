import { MdPhoneIphone } from "react-icons/md";
import { HiOutlineMailOpen } from "react-icons/hi";
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { BsGlobe } from "react-icons/bs";

function SubicTour(){

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
                    <h1 className="font-bold text-4xl Font-Play my-3 text-center">Subic Serenity: Art and a Peaceful City</h1>
                    <span className="sm text-slate-500">Read Article</span>
                    <img className="w-full object-cover mt-10 h-[35rem] max-md:h-96" src="/images/bg.png" alt="" />
                </section>

                <section className="flex my-20 justify-center">
                    <div className="relative">
                        
                        <div className="w-fit absolute max-md:static max-md:w-full">
                            <span className="text-center w-fit ">
                                <hr className=" w-full border-2" />
                                <h1 className="Font-Play text-4xl font-bold">25</h1>
                                <h1 className="text-sm text-slate-400 mt-1 font-sans">APRIL 8</h1>
                            </span>

                            <span className="flex flex-col justify-center max-md:flex-row items-center mt-7 text-4xl max-sm:text-xl gap-3 max-md:mb-10">
                                <a href="https://web.facebook.com/kenneth.tubio" target="_blank"><CiFacebook /></a>
                                <a href="https://x.com/siBrolngto" target="_blank"><FaXTwitter /></a>
                                <a href="https://kennethtubio.netlify.app/" target="_blank"><BsGlobe /></a>
                            </span>
                        </div>

                        <div className="px-30 max-lg:px-20 max-md:px-0">
                            <h1 className="Font-Play font-bold text-4xl mb-10">SBECC</h1>
                            <p className="mb-7 Font-Play text-lg max-lg:text-base max-sm:text-[.6rem]">
                            On our trip to Subic, we visited the Subic Bay Exhibition and Convention Center (SBECC), a peaceful and modern place where many local artworks were displayed. The building was large and clean, and the atmosphere was quiet and relaxing. We saw paintings, crafts, and other creative pieces that showed the talent and stories of the people in the area. It was a great chance to learn more about the culture through art.
                            </p>

                            <p className="Font-Play text-lg max-lg:text-base max-sm:text-[.6rem]">
                            Outside the center, Subic’s calm and green surroundings added to the peaceful feeling of the day. The city was very clean and safe, with wide roads and trees everywhere. It was the perfect place to take a slow walk, take photos, and enjoy a quiet moment away from the busy city life. Our visit to Subic showed us how art and peace can come together in one beautiful place.
                            </p>



                            <h1 className="Font-Play font-bold text-4xl mb-10 mt-25">SBMA Police</h1>
                            <p className="mb-7 Font-Play text-lg max-lg:text-base max-sm:text-[.6rem]">Situated within the Subic Bay Freeport Zone, the SBMA Police exemplify discipline, professionalism, and community-oriented service in one of the country’s most vital economic hubs. As the guardians of peace and order in this bustling area, they play a crucial role in maintaining safety for both residents and visitors alike. With their presence extending across commercial zones, eco-tourism sites, and strategic checkpoints, the SBMA Police embody a commitment to law enforcement that is both visible and approachable. Their dedication to upholding regulations while fostering public trust highlights their essential role in the overall success and security of the Subic Bay Freeport community.</p>

                            <figure className="w-full mb-5 flex gap-4 max-lg:flex-col">
                                <img className="object-cover h-96 w-full" src="/images/police.png" alt="" />
                                <img className="object-cover h-96 w-1/2 max-lg:w-full" src="/images/police3.jpeg" alt="" />
                            </figure>

                            <p className=" Font-Play text-lg max-lg:text-base max-sm:text-[.6rem]">Always ready to respond with efficiency and care, the SBMA Police are more than just enforcers of the law—they are active partners in community development and public service. Whether assisting tourists, guiding traffic, or responding to emergencies, their presence reflects a balance of authority and approachability. With a focus on transparency and accountability, they regularly engage with local stakeholders to ensure that safety protocols align with the evolving needs of the area. Their visible commitment to peace and order not only strengthens public confidence but also contributes to the overall sense of security that defines the Subic Bay Freeport Zone.</p>
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

export default SubicTour;