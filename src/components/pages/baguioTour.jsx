import { MdPhoneIphone } from "react-icons/md";
import { HiOutlineMailOpen } from "react-icons/hi";
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { BsGlobe } from "react-icons/bs";

function BaguioTour(){

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
                    <h1 className="font-bold text-4xl Font-Play my-3 text-center">Peaks and Pines: Our Baguio Tour</h1>
                    <span className="sm text-slate-500">Read Article</span>
                    <img className="w-full object-cover mt-10 h-[35rem] max-md:h-96" src="/images/straw.png" alt="" />
                </section>

                <section className="flex my-20 justify-center">
                    <div className="relative">
                        
                        <div className="w-fit absolute max-md:static max-md:w-full">
                            <span className="text-center w-fit ">
                                <hr className=" w-full border-2" />
                                <h1 className="Font-Play text-4xl font-bold">25</h1>
                                <h1 className="text-sm text-slate-400 mt-1 font-sans">APRIL 12</h1>
                            </span>

                            <span className="flex flex-col justify-center max-md:flex-row items-center mt-7 text-4xl max-sm:text-xl gap-3 max-md:mb-10">
                                <a href="https://web.facebook.com/kenneth.tubio" target="_blank"><CiFacebook /></a>
                                <a href="https://x.com/siBrolngto" target="_blank"><FaXTwitter /></a>
                                <a href="https://kennethtubio.netlify.app/" target="_blank"><BsGlobe /></a>
                            </span>
                        </div>

                        <div className="px-30 max-lg:px-20 max-md:px-0">
                            <h1 className="Font-Play font-bold text-4xl mb-10">Strawberry Farm</h1>
                            <p className="mb-7 Font-Play text-lg max-lg:text-base max-sm:text-[.6rem]">Step into the refreshing highlands of Benguet as we visited the iconic Strawberry Farm in La Trinidad, just a short drive from Baguio City. Surrounded by rows of lush greenery and vibrant red fruit, the farm offered a hands-on experience where we had the chance to pick fresh strawberries straight from the soil. Guided by local farmers, we learned about the careful process of cultivating strawberries in the cool mountain climate — from planting and irrigation to the delicate art of harvesting these juicy, sweet berries.</p>

                            <p className=" Font-Play text-lg max-lg:text-base max-sm:text-[.6rem]">Beyond the fields, the tour immersed us in the agricultural traditions of the Cordillera region. We explored local stalls offering strawberry-based products like jams, wine, and taho, highlighting the creativity and livelihood of the community. The visit was not only a treat for the senses but also an eye-opening look into sustainable farming and the hard work behind every harvest. With baskets in hand and smiles on our faces, our trip to the Strawberry Farm was a refreshing escape into nature and culture — one that left us with sweet memories and a deeper appreciation for the farmers of the North.</p>


                            <h1 className="Font-Play font-bold text-4xl mb-10 mt-25">Bell Church</h1>
                            <p className="mb-7 Font-Play text-lg max-lg:text-base max-sm:text-[.6rem]">Tucked between the borders of Baguio City and La Trinidad lies the Bell Church, a peaceful sanctuary that blends spirituality, history, and Chinese-Filipino culture. As we entered through its ornate archway, we were greeted by traditional pagoda-style architecture, vibrant dragon statues, and beautifully landscaped gardens. The scent of incense lingered in the air as we explored the sacred halls and altars, each adorned with intricate symbols of Taoism and Buddhism. Our guide shared stories about the temple’s origins, the meaning behind its symbols, and the harmonious teachings it promotes.</p>

                            <figure className="w-full mb-5 flex gap-4 max-lg:flex-col">
                                <img className="object-cover h-96 w-1/2 max-lg:w-full" src="/images/bell1.png" alt="" />
                                <img className="object-cover h-96 w-full" src="/images/bell2.png" alt="" />
                            </figure>

                            <p className=" Font-Play text-lg max-lg:text-base max-sm:text-[.6rem]">Beyond its spiritual significance, the Bell Church offered a tranquil retreat from the city’s bustle. We took in sweeping views of the surrounding mountains and reflected in quiet courtyards designed for meditation and inner peace. The visit gave us a glimpse into the cultural diversity of Baguio and the enduring influence of Chinese traditions in the region. It was a moment of calm and curiosity — a chance to appreciate a different perspective on faith, architecture, and community.</p>


                            <h1 className="Font-Play font-bold text-4xl mb-10 mt-25">Philippine Military Academy</h1>
                            <p className="mb-7 Font-Play text-lg max-lg:text-base max-sm:text-[.6rem]">Perched on the hills of Fort Del Pilar in Baguio City, the Philippine Military Academy (PMA) stands as the country's premier institution for training future officers of the Armed Forces of the Philippines. Our visit to the academy offered a glimpse into the disciplined and structured lives of cadets preparing for military leadership. As we walked through the vast campus grounds, we saw iconic landmarks like the Melchor Hall, the cadet barracks, and monuments honoring Filipino heroes and military traditions. The sight of cadets marching in formation, with precision and pride, spoke volumes about the values of honor, courage, and integrity instilled in every PMA student.</p>

                            <figure className="w-full mb-5 flex gap-4 max-lg:flex-col">
                                <img className="object-cover h-96 w-full" src="/images/accad1.png" alt="" />
                                <img className="object-cover h-96 w-full" src="/images/accad.png" alt="" />
                            </figure>

                            <p className=" Font-Play text-lg max-lg:text-base max-sm:text-[.6rem]">Beyond the formal structures, the PMA experience was both educational and inspiring. Museum displays showcased the history of the Philippine military and the legacy of the academy’s distinguished alumni. We learned about the rigorous academic and physical training that cadets undergo, gaining a deeper appreciation for their dedication and service to the nation. Visiting PMA was not just a tour — it was a powerful reminder of the sacrifice and commitment required to lead and protect the country.</p>
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

export default BaguioTour;