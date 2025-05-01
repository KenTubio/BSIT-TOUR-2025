import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Fragment, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function FirstSection() {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <>
      <main className="relative bg-[url(/images/bg.png)] h-screen max-md:h- bg-cover bg-no-repeat bg-center rounded-br-[3rem] rounded-bl-[3rem]">
        <div className="absolute inset-0 bg-black/65 rounded-br-[3rem] rounded-bl-[3rem] z-0"></div>

        <header className="fixed left-0 right-0 top-0 flex items-center justify-between px-10 max-sm:px-3 bg-black/20 z-10">
          <img
            className="w-35 max-sm:w-20"
            src="/images/new-logoni-bro.png"
            alt=""
          />

          <figure className="flex text-white text-3xl max-sm:text-lg gap-6">
            <a
              href="https://github.com/KenTubio"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition hover:brightness-50 hover:cursor-pointer"
            >
              <FaGithub />
            </a>
            <a
              href="https://web.facebook.com/kenneth.tubio"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition hover:brightness-50 hover:cursor-pointer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.linkedin.com/in/kenneth-tubio-814b35359/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition hover:brightness-50 hover:cursor-pointer"
            >
              <FaLinkedin />
            </a>
          </figure>
        </header>

        <div
          className="absolute bottom-20
         left-20 max-md:left-1/2 max-md:top-1/2 max-md:-translate-y-1/2 max-md:-translate-x-1/2 max-md:transform max-md:text-center"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <h1 className="text-white font-bold text-8xl max-lg:text-7xl max-md:text-5xl max-sm:text-3xl Font-Inter tracking-wider antialiased leading-28 max-md:leading-normal">
            BSIT EDUCATIONAL INDUSTRY TOUR
          </h1>
          <span>
            <a href="#articles">
              <h2 className="text-white/70 mt-4 text-2xl max-lg:text-lg font-mono hover:underline hover:underline-offset-6 hover:text-white">
                Get Started | Articles
              </h2>
            </a>
          </span>
        </div>
      </main>

      <section id="articles" className="p-15 max-md:p-5 max-md:mt-15">
        <figure className="grid grid-cols-3 gap-10 max-xl:grid-cols-2 max-md:gap-2 max-sm:grid-cols-1">


          {/* separation para di malito */}
          <div className="Font-Inter p-4 rounded-4xl" data-aos="zoom-in">
            <img
              className="w-full rounded-4xl mb-4 object-cover h-72"
              src="/images/first.png"
              alt=""
            />

            <span className="text-sm text-gray-400 block mb-2 tracking-wide">
              April 7, 2025
            </span>

            <h1 className="text-3xl font-bold leading-tight my-5">
              Manila in Minutes: A Quick City Tour
            </h1>

            <a
              className="flex w-fit px-8 py-3 items-center border-2 mb-6 rounded-4xl hover:border-green-400 hover:text-green-400 hover:cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
              href="/city-tour"
            >
              <button>Read More</button>
              <MdKeyboardArrowRight />
            </a>

            <figure className="flex items-center gap-3">
              <img className="w-8" src="/images/logo-favicon.png" alt="" />
              <h1 className="text-lg font-semibold tracking-wider">
                  MANILA
              </h1>
            </figure>
          </div>


          {/* separation para di malito */}
          <div className="Font-Inter p-4 rounded-4xl" data-aos="zoom-in">
            <img
              className="w-full rounded-4xl mb-4 object-cover h-72"
              src="/images/bg.png"
              alt=""
            />

            <span className="text-sm text-gray-400 block mb-2 tracking-wide">
              April 8, 2025
            </span>

            <h1 className="text-3xl font-bold leading-tight my-5">
             Subic Serenity: Art and a Peaceful City
            </h1>

            <a
              className="flex w-fit px-8 py-3 items-center border-2 mb-6 rounded-4xl hover:border-green-400 hover:text-green-400 hover:cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
              href="/subic-tour"
            >
              <button>Read More</button>
              <MdKeyboardArrowRight />
            </a>

            <figure className="flex items-center gap-3">
              <img className="w-8" src="/images/logo-favicon.png" alt="" />
              <h1 className="text-lg font-semibold tracking-wider">
                  SUBIC
              </h1>
            </figure>
          </div>


          {/* separation para di malito */}
          <div className="Font-Inter p-4 rounded-4xl" data-aos="zoom-in">
            <img
              className="w-full rounded-4xl mb-4 object-cover h-72"
              src="/images/national-m.png"
              alt=""
            />

            <span className="text-sm text-gray-400 block mb-2 tracking-wide">
              April 9, 2025
            </span>

            <h1 className="text-3xl font-bold leading-tight my-5">
              National Museum and Quezon Memorial Circle
            </h1>

            <a
              className="flex w-fit px-8 py-3 items-center border-2 mb-6 rounded-4xl hover:border-green-400 hover:text-green-400 hover:cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
              href="/museum-tour"
            >
              <button>Read More</button>
              <MdKeyboardArrowRight />
            </a>

            <figure className="flex items-center gap-3">
              <img className="w-8" src="/images/logo-favicon.png" alt="" />
              <h1 className="text-lg font-semibold tracking-wider">
                  QUEZON CITY
              </h1>
            </figure>
          </div>
        </figure>
      </section>

      <footer className="text-white py-6 bg-[rgb(12,12,12)] rounded-tr-[3rem] rounded-tl-[3rem]">
        <div className="flex justify-center items-center mt-10">
          <p className="w-11/12 max-sm:w-full text-center Font-Inter text-slate-400 text-base max-lg:text-xs max-sm:text-[0.55rem] max-sm:px-2">
          Thank you for taking the time to explore my blog! Your interest means a lot. I’ve dedicated considerable effort to sharing my experiences and insights from various educational tours, and I hope you find the content both informative and inspiring.
          </p>
        </div>

        <figure className="flex justify-center mt-5">
          <img
            className="w-60 lg:w-44"
            src="./images/new-logoni-bro.png"
            alt=""
          />
        </figure>

        <h1 className="text-center font-inter antialiased text-slate-300 tracking-wider lg:text-sm">
          Tubio | Kenith.ZRO
        </h1>


        <div class="flex overflow-x-hidden text-3xl max-lg:text-xl max-sm:text-base font-bold Font-Inter mt-17 text-slate-600">
          <div class="flex justify-around min-w-full animate-move-right">
            <h1>THANK YOU.</h1>
            <h1>THANK YOU.</h1>
            <h1>THANK YOU.</h1>
            <h1>THANK YOU.</h1>
            <h1>THANK YOU.</h1>

          </div>
          <div class="flex justify-around min-w-full animate-move-right">
            <h1>THANK YOU.</h1>
            <h1>THANK YOU.</h1>
            <h1>THANK YOU.</h1>
            <h1>THANK YOU.</h1>
            <h1>THANK YOU.</h1>
  
          </div>
        </div>
      </footer>
    </>
  );
}

export default FirstSection;
