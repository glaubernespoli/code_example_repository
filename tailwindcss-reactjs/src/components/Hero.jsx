import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-black sm:text-5xl mb-14 md:text-7xl lg:text-9xl">
        Hola Mariana!
      </h1>
      <Link
        className="flex items-center px-10 py-6 text-3xl transition duration-300 ease-in-out bg-yellow-500 rounded-full hover:bg-yellow-300 animate-bounce"
        to="/menu"
      >
        Order Now{" "}
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      </Link>
    </div>
  );
};

export default Hero;
