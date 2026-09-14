import logo from "../assets/logo-text.png";

function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white pt-14">

      <div className="mx-auto w-[90%] max-w-6xl">

        <div className="grid gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">

          <div>
            <img
              src={logo}
              alt="Dev Stack"
              className="w-28"
            />

            <p className="mt-5 max-w-sm text-sm leading-7 text-gray-500">
              Discover technologies, compare development tools,
              and create the perfect stack for your next project.
            </p>

            <div className="mt-6 flex gap-5">
              <a
                href="#"
                className="text-sm text-gray-600 hover:text-pink-600"
              >
                GitHub
              </a>

              <a
                href="#"
                className="text-sm text-gray-600 hover:text-pink-600"
              >
                Twitter
              </a>

              <a
                href="#"
                className="text-sm text-gray-600 hover:text-pink-600"
              >
                LinkedIn
              </a>
            </div>
          </div>

        
          <div className="flex flex-col gap-3">
            <h4 className="mb-2 text-sm font-bold">
              Product
            </h4>

            <a
              href="#home"
              className="text-sm text-gray-500 hover:text-pink-600"
            >
              Home
            </a>

            <a
              href="#technologies"
              className="text-sm text-gray-500 hover:text-pink-600"
            >
              Technologies
            </a>

            <a
              href="#projects"
              className="text-sm text-gray-500 hover:text-pink-600"
            >
              Projects
            </a>
          </div>

        
          <div className="flex flex-col gap-3">
            <h4 className="mb-2 text-sm font-bold">
              Company
            </h4>

            <a
              href="#about"
              className="text-sm text-gray-500 hover:text-pink-600"
            >
              About
            </a>

            <a
              href="#contact"
              className="text-sm text-gray-500 hover:text-pink-600"
            >
              Contact
            </a>

            <a
              href="#"
              className="text-sm text-gray-500 hover:text-pink-600"
            >
              Careers
            </a>
          </div>

         
          <div className="flex flex-col gap-3">
            <h4 className="mb-2 text-sm font-bold">
              Legal
            </h4>

            <a
              href="#"
              className="text-sm text-gray-500 hover:text-pink-600"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="text-sm text-gray-500 hover:text-pink-600"
            >
              Terms of Service
            </a>
          </div>

        </div>

        
        <div className="flex flex-col justify-between gap-4 border-t border-gray-200 py-6 text-xs text-gray-500 sm:flex-row">
          <p>
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a href="#">
              Privacy
            </a>

            <a href="#">
              Terms
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;