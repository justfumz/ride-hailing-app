import { Link } from 'react-router-dom';

const HeroBanner = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-800 text-white py-20 px-4 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Reliable Ride Solutions for Busy Families & Corporates
      </h1>
      <p className="text-lg md:text-xl mb-6">
        Safe, Scheduled, and Seamless Transportation with a Human Touch.
      </p>
      <Link to="/book">
        <button className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-full hover:bg-blue-100 transition">
          Book a Ride
        </button>
      </Link>
    </section>
  );
};

export default HeroBanner;
