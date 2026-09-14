import bannerStack from "../assets/banner-stack.png";

function Hero() {
  return (
    <section id="home" className="py-16 md:py-24">
      <div className="mx-auto grid w-[90%] max-w-6xl items-center gap-12 md:grid-cols-2">

      
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            Build Your Ideal
            <br />

            <span className="bg-linear-to-r from-brand-orange via-brand-pink to-brand-violet bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-gray-500 md:mx-0">
            Explore frontend, backend, database, and development tools.
            Compare technologies and build the perfect development stack
            for your next project.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
            <a
              href="#technologies"
              className="rounded-lg bg-gradient-to-r from-brand-orange via-brand-pink to-brand-violet px-6 py-3 text-sm font-semibold text-white"
            >
              Explore Technologies
            </a>

            <button className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-600">
              Learn More
            </button>
          </div>
        </div>

        
        <div className="flex justify-center">
          <img
            src={bannerStack}
            alt="Development Stack"
            className="w-full max-w-md"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;